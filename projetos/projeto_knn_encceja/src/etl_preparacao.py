# -*- coding: utf-8 -*-
"""
=============================================================================
ETL — PREPARAÇÃO E TRATAMENTO DOS DADOS (Etapa 1 do pipeline)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

O QUE ESTE SCRIPT FAZ (em ordem, com as JUSTIFICATIVAS de cada decisão):
    1. Lê o CSV do INEP com encoding='latin-1' e sep=';' — formato técnico
       oficial dos microdados (ver config.py);
    2. Converte tipos numéricos e trata valores ausentes (campo vazio → NaN);
    3. FILTRO DE PRESENÇA: mantém apenas candidatos presentes (=1) em pelo
       menos uma prova COM nota preenchida. JUSTIFICATIVA: candidato ausente
       ou eliminado não possui desempenho real — incluí-lo introduziria ruído
       artificial (imputar nota de quem faltou fabricaria dados que não
       existem), enviesando o KNN;
    4. Decodifica as respostas do questionário socioeconômico (Q0x → categorias
       legíveis) usando os mapeamentos de config.py;
    5. Cria variáveis derivadas de apoio (região, grupos etários, flag de
       exame completo, contagem de aprovações);
    6. Salva a base processada em data/base_processada.csv para as etapas
       seguintes (features → treino → interface).

DECISÃO DE ESCOPO PARA MODELAGEM (marcada na coluna IN_EXAME_COMPLETO):
    Para TREINAR o regressor de 5 notas simultâneas (multi-output) usamos
    candidatos com presença e nota válida nas 5 provas ("exame completo"),
    pois o KNeighborsRegressor não aceita alvos ausentes. Candidatos com
    presença parcial PERMANECEM na base processada e são usados nas análises
    descritivas/exploratórias do dashboard. Esta separação maximiza o uso dos
    dados sem fabricar notas.
=============================================================================
"""

import pandas as pd

import config


# -----------------------------------------------------------------------------
# 1. LEITURA
# -----------------------------------------------------------------------------

def ler_microdados(caminho: str | None = None) -> pd.DataFrame:
    """
    Lê o CSV de microdados com o formato técnico do INEP.

    DECISÕES (e porquês):
      - encoding='latin-1' : os arquivos do INEP NÃO são UTF-8; forçar UTF-8
        corromperia acentos de nomes de municípios e categorias;
      - sep=';'            : separador oficial do pacote de microdados;
      - dtype=str          : lê tudo como texto para controlar a conversão
        (evita que pandas infira tipos mistos em colunas com vazios);
      - na_values=['']     : ausência no arquivo oficial é CAMPO VAZIO, não
        "NA"/"NaN" — aqui é convertida para NaN do pandas.
    """
    caminho = caminho or config.usar_base_disponivel()
    colunas_desejadas = (
        config.COLUNAS_PERFIL + config.COLUNAS_PRESENCA + config.COLUNAS_NOTAS
        + config.COLUNAS_APROVACAO + config.COLUNAS_QUESTIONARIO
    )

    print(f"[etl] Lendo: {caminho}")
    # usecols só pode ser aplicado se todas as colunas existirem no arquivo;
    # verificamos o header primeiro para dar erro claro se algo faltar.
    header = pd.read_csv(caminho, sep=";", encoding="latin-1", nrows=0)
    faltantes = [c for c in colunas_desejadas if c not in header.columns]
    if faltantes:
        raise ValueError(
            f"[etl] Colunas ausentes no arquivo {caminho.name}: {faltantes}\n"
            f"      Verifique os mapeamentos de config.py contra o Dicionário\n"
            f"      de Dados oficial do INEP da edição correspondente."
        )
    df = pd.read_csv(
        caminho, sep=";", encoding="latin-1", dtype=str, na_values=[""],
        usecols=colunas_desejadas, low_memory=False,
    )
    print(f"[etl] Registros lidos: {len(df):,}")
    return df


# -----------------------------------------------------------------------------
# 2. CONVERSÃO DE TIPOS
# -----------------------------------------------------------------------------

def converter_tipos(df: pd.DataFrame) -> pd.DataFrame:
    """
    Converte colunas para os tipos corretos a partir do texto original.

    ATENÇÃO: apenas colunas NUMÉRICAS são convertidas. TP_SEXO, SG_UF_PROVA
    e NU_INSCRICAO permanecem como texto (não são numéricas por natureza e
    to_numeric as destruiria em NaN).
    """
    df = df.copy()

    # Códigos inteiros (faixa etária, certificação, presença, aprovação)
    colunas_inteiras = (
        ["TP_FAIXA_ETARIA", "TP_CERTIFICACAO"]
        + config.COLUNAS_PRESENCA
        + config.COLUNAS_APROVACAO
    )
    for col in colunas_inteiras:
        df[col] = pd.to_numeric(df[col], errors="coerce").astype("Int64")

    # Notas são decimais com '.' como separador (já tratado pelo pandas)
    for col in config.COLUNAS_NOTAS:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    return df


# -----------------------------------------------------------------------------
# 3. FILTRO DE PRESENÇA (regra do enunciado)
# -----------------------------------------------------------------------------

def filtrar_presentes(df: pd.DataFrame) -> pd.DataFrame:
    """
    Mantém apenas candidatos PRESENTES (=1) em pelo menos uma prova e com a
    nota correspondente preenchida.

    JUSTIFICATIVA: a ausência (TP_PRESENCA=0) e a eliminação (=2) não geram
    desempenho real comparável. Usar "pelo menos uma prova" preserva o maior
    volume de dados possível; a nota preenchida garante que o registro
    efetivamente participou daquela avaliação.
    """
    df = df.copy()
    mascara_alguma_prova = pd.Series(False, index=df.index)
    area_por_prova = {"LC": "NU_NOTA_LC", "CH": "NU_NOTA_CH",
                      "MT": "NU_NOTA_MT", "CN": "NU_NOTA_CN"}
    for prova, col_nota in area_por_prova.items():
        presente = df[f"TP_PRESENCA_{prova}"] == 1
        tem_nota = df[col_nota].notna()
        mascara_alguma_prova |= (presente & tem_nota)

    antes = len(df)
    df = df[mascara_alguma_prova].copy()
    print(f"[etl] Filtro de presença: {antes:,} → {len(df):,} "
          f"({antes - len(df):,} ausentes/eliminados removidos)")
    return df


# -----------------------------------------------------------------------------
# 4. DECODIFICAÇÃO DO QUESTIONÁRIO SOCIOECONÔMICO
# -----------------------------------------------------------------------------

def decodificar_questionario(df: pd.DataFrame) -> pd.DataFrame:
    """
    Traduz os códigos (A, B, C...) das questões socioeconômicas selecionadas
    para categorias legíveis, criando colunas descritivas novas.

    JUSTIFICATIVA: manter os códigos originais dificultaria a auditoria das
    análises e a manutenção do projeto. As colunas de código originais são
    preservadas para rastreabilidade.
    """
    df = df.copy()

    mapeamentos = {
        "TRABALHO": (config.QUESTAO_TRABALHO, config.MAP_TRABALHO, "situacao_trabalho"),
        "RENDA": (config.QUESTAO_RENDA, config.MAP_RENDA, "renda_familiar"),
        "ESCOLARIDADE": (config.QUESTAO_ESCOLARIDADE, config.MAP_ESCOLARIDADE,
                         "escolaridade_anterior"),
    }
    for chave, (q_col, mapa, nome_saida) in mapeamentos.items():
        if q_col not in df.columns:
            raise ValueError(
                f"[etl] Questão {q_col} ({chave}) não existe no CSV. "
                f"Ajuste config.QUESTAO_{chave} conforme o dicionário oficial do INEP."
            )
        df[nome_saida] = df[q_col].map(mapa)
        n_vazios = df[nome_saida].isna().sum()
        if n_vazios:
            print(f"[etl] ⚠ {n_vazios:,} respostas de {nome_saida} sem categoria "
                  f"conhecida (código fora do mapeamento ou em branco) — mantidas "
                  f"como ausentes.")

    # Variáveis cadastrais também ganham versões legíveis
    df["faixa_etaria"] = df["TP_FAIXA_ETARIA"].map(config.MAP_FAIXA_ETARIA)
    df["certificacao"] = df["TP_CERTIFICACAO"].map(config.MAP_CERTIFICACAO)
    df["regiao"] = df["SG_UF_PROVA"].map(config.UF_REGIAO)
    return df


# -----------------------------------------------------------------------------
# 5. VARIÁVEIS DERIVADAS
# -----------------------------------------------------------------------------

def criar_variaveis_derivadas(df: pd.DataFrame) -> pd.DataFrame:
    """
    Cria variáveis de apoio para modelagem e dashboards:
      - IN_EXAME_COMPLETO: presença com nota válida nas 5 provas — define a
        subpopulação usada no treino multi-output (ver docstring do módulo);
      - nota_media_objetivas: média das 4 objetivas (proxy de desempenho geral
        nas análises exploratórias);
      - n_aprovacoes: quantas das 4 áreas o candidato foi aprovado (0–4);
      - grupo_etario: agrupamento das 19 faixas em 6 grupos p/ visualização.
    """
    df = df.copy()

    areas = {"LC": "NU_NOTA_LC", "CH": "NU_NOTA_CH",
             "MT": "NU_NOTA_MT", "CN": "NU_NOTA_CN"}

    completo = pd.Series(True, index=df.index)
    for prova, col_nota in areas.items():
        completo &= (df[f"TP_PRESENCA_{prova}"] == 1) & df[col_nota].notna()
    completo &= df["NU_NOTA_REDACAO"].notna()
    df["IN_EXAME_COMPLETO"] = completo.astype(int)

    df["nota_media_objetivas"] = df[[c for c in areas.values()]].mean(axis=1)

    aprov_cols = config.COLUNAS_APROVACAO
    df["n_aprovacoes"] = df[aprov_cols].fillna(0).sum(axis=1).astype(int)

    # Grupo etário: mapeia código 1–19 para 6 grupos legíveis no dashboard
    def grupo(codigo):
        if codigo <= 8:
            return "Até 24 anos"
        if codigo in (9, 10):
            return "25 a 29 anos"
        if codigo in (11, 12):
            return "30 a 39 anos"
        if codigo in (13, 14):
            return "40 a 49 anos"
        if codigo in (15, 16):
            return "50 a 59 anos"
        return "60 anos ou mais"

    df["grupo_etario"] = df["TP_FAIXA_ETARIA"].astype("Float64").apply(
        lambda c: grupo(int(c)) if pd.notna(c) else None
    )

    return df


# -----------------------------------------------------------------------------
# 6. PIPELINE PRINCIPAL
# -----------------------------------------------------------------------------

def executar_etl() -> pd.DataFrame:
    """Executa o ETL completo e salva a base processada."""
    df = ler_microdados()
    df = converter_tipos(df)
    df = filtrar_presentes(df)
    df = decodificar_questionario(df)
    df = criar_variaveis_derivadas(df)

    # Tratamento final de ausentes nas variáveis explicativas do KNN:
    # DECISÃO — REMOÇÃO em vez de imputação. JUSTIFICATIVA: as variáveis são
    # categóricas (não há "média" sensata para imputar) e o volume de ausentes
    # é pequeno em relação à base; imputar a modalidade criaria perfis
    # artificiais que poluem a vizinhança do KNN.
    explicativas = ["situacao_trabalho", "renda_familiar", "escolaridade_anterior",
                    "faixa_etaria", "certificacao", "regiao"]
    antes = len(df)
    df = df.dropna(subset=explicativas).copy()
    if antes - len(df):
        print(f"[etl] Removidos {antes - len(df):,} registros com perfil "
              f"socioeconômico incompleto (justificado: remoção > imputação p/ categóricas)")

    df.to_csv(config.ARQ_BASE_PROCESSADA, sep=";", encoding="utf-8", index=False)
    print(f"[etl] Base processada salva: {config.ARQ_BASE_PROCESSADA}")
    print(f"[etl] Registros finais: {len(df):,} | exames completos: "
          f"{df['IN_EXAME_COMPLETO'].sum():,}")
    return df


if __name__ == "__main__":
    executar_etl()
