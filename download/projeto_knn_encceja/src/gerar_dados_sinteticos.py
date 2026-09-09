# -*- coding: utf-8 -*-
"""
=============================================================================
GERADOR DE BASE SINTÉTICA — MICRODADOS ENCCEJA 2024 (REG_NAC)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

POR QUE ESTE ARQUIVO EXISTE?
    Os microdados oficiais do INEP (834.648 linhas no REG_NAC) são públicos,
    porém volumosos e sujeitos a disponibilidade de download. Para que o
    pipeline seja 100% executável e demonstrável em qualquer ambiente,
    geramos uma base SINTÉTICA que:

      1. Segue EXATAMENTE o mesmo schema e formato do arquivo oficial
         (encoding latin-1, separador ';', ausência = campo vazio);
      2. Reproduz distribuições e correlações PLAUSÍVEIS do ENCCEJA 2024
         (demografia, presença nas provas, efeito socioeconômico nas notas,
         gradientes regionais documentados na literatura educacional BR);
      3. Permite que TODO o restante do pipeline (ETL, features, KNN,
         interface) seja desenvolvido, testado e demonstrado sem alteração
         nenhuma quando o CSV oficial for colocado em data/.

    ⚠️ Os números produzidos por este gerador NÃO são estatísticas oficiais.
    Eles servem para demonstrar a MECÂNICA do sistema de apoio à decisão.
    Para resultados oficiais, baixe os microdados no site do INEP e use-os
    (o pipeline detecta automaticamente e prioriza o arquivo real).

MODELO DE GERAÇÃO (simplificado, porém fiel aos fatos estilizados):
    habilidade_latente(θ) do candidato ~ função do perfil socioeconômico:
      + renda familiar            (gradiente positivo — dados IBEP/INEP)
      + escolaridade anterior     (gradiente positivo forte)
      - trabalho em tempo integral (efeito negativo moderado)
      ± região da UF              (Sul/Sudeste > Centro-Oeste > N/NE)
      ± faixa etária              (pico suave entre 26 e 40 anos)
    nota_area = 90 + 16·θ + ruído(18)  → escala 0–180, corte 100
    redação   = 5.1 + 0.8·θ + ruído(1.9) → escala 0–10, corte 5
    A habilidade compartilhada gera a correlação entre áreas (~0,55),
    como observado nos microdados reais.
=============================================================================
"""

import numpy as np
import pandas as pd

import config


# -----------------------------------------------------------------------------
# Distribuições de probabilidade plausíveis (calibradas a partir de fatos
# estilizados dos microdados ENCCEJA/ENEM e de dados demográficos do IBGE)
# -----------------------------------------------------------------------------

# Sexo — público do ENCCEja é majoritariamente feminino (~55%)
P_SEXO = {"F": 0.55, "M": 0.45}

# Faixa etária (códigos 1–19) — público concentra-se entre 18 e 50 anos.
# Ordem dos códigos: 1=menor de 18 | 2–9=18 a 25 anos (1 por idade) |
# 10=26–30 | 11=31–35 | 12=36–40 | 13=41–45 | 14=46–50 | 15=51–55 |
# 16=56–60 | 17=61–65 | 18=66–70 | 19=70+
PESOS_FAIXA_ETARIA = np.array([
    0.008,                                                     #  1 menor de 18
    0.030, 0.035, 0.038, 0.036, 0.034, 0.032, 0.030, 0.028,   #  2–9: 18–25
    0.050, 0.058,                                              # 10–11: 26–35
    0.055, 0.050,                                              # 12–13: 36–45
    0.046, 0.042,                                              # 14–15: 46–55
    0.035, 0.028,                                              # 16–17: 56–65
    0.022, 0.014,                                              # 18–19: 66–70+
])
# Normaliza para somar exatamente 1.0 (evita erro de arredondamento manual)
PESOS_FAIXA_ETARIA = PESOS_FAIXA_ETARIA / PESOS_FAIXA_ETARIA.sum()

# UF — proporcional à população (IBGE ~2024, arredondado)
PESOS_UF = {
    "SP": 0.205, "MG": 0.101, "RJ": 0.080, "BA": 0.068, "RS": 0.052,
    "PR": 0.052, "PE": 0.044, "CE": 0.043, "PA": 0.037, "MA": 0.033,
    "SC": 0.035, "GO": 0.032, "ES": 0.019, "PB": 0.019, "AM": 0.020,
    "RN": 0.017, "MT": 0.017, "AL": 0.016, "PI": 0.016, "DF": 0.014,
    "MS": 0.013, "SE": 0.011, "RO": 0.009, "TO": 0.007, "AC": 0.004,
    "AP": 0.004, "RR": 0.003,
}
# Normaliza para somar 1.0 (tolerância a arredondamentos manuais)
_suf = sum(PESOS_UF.values())
PESOS_UF = {uf: p / _suf for uf, p in PESOS_UF.items()}

# Certificação pretendida — Ensino Médio concentra a maioria (~65%)
P_CERTIFICACAO = {1: 0.35, 2: 0.65}

# Situação de trabalho — público do ENCCEJA é fortemente trabalhador
P_TRABALHO = {"A": 0.20, "B": 0.12, "C": 0.14, "D": 0.17, "E": 0.37}

# Renda familiar — concentração nas faixas de até 2 salários mínimos
P_RENDA = {"A": 0.07, "B": 0.22, "C": 0.26, "D": 0.18, "E": 0.15, "F": 0.09, "G": 0.03}

# Escolaridade anterior — CONDICIONADA à certificação pretendida:
# quem busca o Fundamental ainda não o concluiu (A/B/C); quem busca o Médio
# tem fundamental completo ou mais (C/D/E). Mantém coerência interna.
P_ESCOLARIDADE_POR_CERT = {
    1: {"A": 0.18, "B": 0.62, "C": 0.17, "D": 0.02, "E": 0.01, "F": 0.00},
    2: {"A": 0.02, "B": 0.28, "C": 0.30, "D": 0.32, "E": 0.07, "F": 0.01},
}

# Efeito regional na habilidade latente (desvios da média nacional) —
# gradiente documentado em avaliações educacionais brasileiras (SAEB, ENEM)
EFEITO_REGIAO = {
    "Sul": 0.28, "Sudeste": 0.22, "Centro-Oeste": 0.05,
    "Nordeste": -0.24, "Norte": -0.30,
}

# Efeito por faixa etária (código 1–19) — pico suave entre 25 e 40 anos
def efeito_idade(codigo: int) -> float:
    if codigo <= 8:                 # até 24 anos
        return 0.05
    if codigo in (9, 10, 11, 12):   # 25 a 40 — núcleo do público
        return 0.15
    if codigo in (13, 14):          # 41–50
        return 0.02
    if codigo in (15, 16):          # 51–60
        return -0.12
    return -0.25                    # 60+


def gerar_dataframe(n: int = config.N_SINTETICO, semente: int = config.SEMENTE) -> pd.DataFrame:
    """
    Gera o DataFrame sintético com o MESMO schema do
    MICRODADOS_ENCCEJA_2024_REG_NAC.csv (colunas usadas pelo projeto).

    Parâmetros
    ----------
    n : int       número de candidatos a simular
    semente : int semente aleatória (reprodutibilidade)

    Retorna
    -------
    pd.DataFrame com as colunas geradas
    """
    rng = np.random.default_rng(semente)

    ufs = list(PESOS_UF.keys())
    pesos_uf = np.array([PESOS_UF[u] for u in ufs])
    pesos_uf = pesos_uf / pesos_uf.sum()

    # ------------------------------------------------------------------
    # 1) PERFIL SOCIODEMOGRÁFICO
    # ------------------------------------------------------------------
    sexo = rng.choice(list(P_SEXO.keys()), size=n, p=list(P_SEXO.values()))
    faixa = rng.choice(np.arange(1, 20), size=n, p=PESOS_FAIXA_ETARIA)
    uf = rng.choice(ufs, size=n, p=pesos_uf)
    cert = rng.choice(list(P_CERTIFICACAO.keys()), size=n, p=list(P_CERTIFICACAO.values()))

    regiao = np.array([config.UF_REGIAO[u] for u in uf])

    # Trabalho e renda são correlacionados entre si e com a região
    # (regiões mais ricas → rendas mais altas): aplicamos um ajuste simples
    # por região na escolha da faixa de renda.
    ajuste_renda = np.where(
        regiao == "Sudeste", 0.6,
        np.where(regiao == "Sul", 0.6,
                 np.where(regiao == "Centro-Oeste", 0.3,
                          np.where(regiao == "Norte", -0.3, -0.35))),
    )
    codigos_renda = np.array(list(config.MAP_RENDA.keys()))     # A..G (ordinal)
    renda = np.empty(n, dtype=object)
    for i in range(n):
        # desloca o "centro" da distribuição conforme a região
        base_idx = rng.choice(len(codigos_renda), p=list(P_RENDA.values()))
        deslocado = int(np.clip(base_idx + round(ajuste_renda[i]), 0, len(codigos_renda) - 1))
        renda[i] = codigos_renda[deslocado]

    trabalho = rng.choice(list(P_TRABALHO.keys()), size=n, p=list(P_TRABALHO.values()))

    # Escolaridade condicionada à certificação (coerência interna do perfil)
    escolaridade = np.empty(n, dtype=object)
    for i in range(n):
        p = P_ESCOLARIDADE_POR_CERT[cert[i]]
        escolaridade[i] = rng.choice(list(p.keys()), p=list(p.values()))

    # ------------------------------------------------------------------
    # 2) HABILIDADE LATENTE θ (motor das correlações)
    # ------------------------------------------------------------------
    ord_renda = np.array([ord(r) - ord("A") for r in renda])          # 0..6
    ord_esc = np.array([ord(e) - ord("A") for e in escolaridade])     # 0..5
    efeito_trabalho = np.array([-0.35 if t in ("D", "E") else (-0.15 if t == "C" else 0.0)
                                for t in trabalho])
    efeito_uf = np.array([EFEITO_REGIAO[r] for r in regiao])
    efeito_fx = np.array([efeito_idade(int(f)) for f in faixa])

    theta = (
        0.26 * (ord_renda - 2.0)          # renda centrada (média ~2)
        + 0.34 * (ord_esc - 2.5)          # escolaridade centrada
        + efeito_trabalho
        + efeito_uf
        + efeito_fx
        + rng.normal(0.0, 1.0, n)         # componente individual não-observável
    )

    # ------------------------------------------------------------------
    # 3) PRESENÇA NAS PROVAS (0/1 por área, correlacionada ao candidato)
    # ------------------------------------------------------------------
    # Modelo realista: a decisão de COMPARECER AO EXAME é global do candidato
    # (quem não vai, falta a tudo); quem compareceu ainda tem pequena chance
    # de faltar a uma prova específica. Isso reproduz a presença "tudo ou
    # quase tudo" observada nos microdados reais (taxa de abstenção ~25%).
    p_comparecer = np.clip(rng.normal(0.78, 0.18, n), 0.03, 0.99)
    compareceu = rng.random(n) < p_comparecer
    areas = ["LC", "CH", "MT", "CN"]
    presenca = {
        a: (compareceu & (rng.random(n) < 0.94)).astype(int) for a in areas
    }

    # ------------------------------------------------------------------
    # 4) NOTAS (0–180) e REDAÇÃO (0–10)
    # ------------------------------------------------------------------
    # Calibração: média base 94 + 16·θ com ruído 16,5 reproduz taxa de
    # aprovação por área em torno de 38–42% entre presentes (padrão
    # observado no ENCCEJA), com perfis favoráveis ultrapassando 90%.
    notas = {}
    for a in areas:
        bruto = 94.0 + 16.0 * theta + rng.normal(0.0, 16.5, n)
        bruto = np.clip(bruto, 15.0, 180.0)
        notas[f"NU_NOTA_{a}"] = np.where(presenca[a] == 1, np.round(bruto, 1), np.nan)

    # Redação: correlacionada à mesma θ; ausente quando o candidato não
    # participou da prova de Linguagens (dia 1 inclui a redação)
    redacao = np.clip(5.3 + 0.85 * theta + rng.normal(0.0, 1.9, n), 0.0, 10.0)
    notas["NU_NOTA_REDACAO"] = np.where(presenca["LC"] == 1, np.round(redacao, 1), np.nan)

    # ------------------------------------------------------------------
    # 5) INDICADORES DE APROVAÇÃO (corte oficial: 100 nas objetivas, 5 na red.)
    # ------------------------------------------------------------------
    aprov = {}
    for a in areas:
        aprov[f"IN_APROVADO_{a}"] = np.where(
            presenca[a] == 1,
            (notas[f"NU_NOTA_{a}"] >= config.NOTA_CORTE_OBJETIVA).astype(float),
            np.nan,  # ausente → indicador vazio (como no INEP)
        )

    # ------------------------------------------------------------------
    # 6) MONTAGEM DO DATAFRAME (schema do arquivo oficial)
    # ------------------------------------------------------------------
    df = pd.DataFrame({
        "NU_INSCRICAO": [f"24{s:09d}" for s in range(1, n + 1)],
        "TP_SEXO": sexo,
        "TP_FAIXA_ETARIA": faixa.astype(int),
        "SG_UF_PROVA": uf,
        "TP_CERTIFICACAO": cert.astype(int),
        "TP_PRESENCA_LC": presenca["LC"],
        "TP_PRESENCA_CH": presenca["CH"],
        "TP_PRESENCA_MT": presenca["MT"],
        "TP_PRESENCA_CN": presenca["CN"],
        "NU_NOTA_LC": notas["NU_NOTA_LC"],
        "NU_NOTA_CH": notas["NU_NOTA_CH"],
        "NU_NOTA_MT": notas["NU_NOTA_MT"],
        "NU_NOTA_CN": notas["NU_NOTA_CN"],
        "NU_NOTA_REDACAO": notas["NU_NOTA_REDACAO"],
        "IN_APROVADO_LC": aprov["IN_APROVADO_LC"],
        "IN_APROVADO_CH": aprov["IN_APROVADO_CH"],
        "IN_APROVADO_MT": aprov["IN_APROVADO_MT"],
        "IN_APROVADO_CN": aprov["IN_APROVADO_CN"],
        # Questionário socioeconômico (códigos A..G / A..E, como no oficial)
        config.QUESTAO_TRABALHO: trabalho,
        config.QUESTAO_RENDA: renda,
        config.QUESTAO_ESCOLARIDADE: escolaridade,
    })

    return df


def salvar_csv_inep(df: pd.DataFrame, caminho=None) -> None:
    """
    Salva o DataFrame no MESMO formato técnico do arquivo oficial do INEP:
    encoding latin-1, separador ';', ausências como campo vazio.

    NOTA TÉCNICA: valores ausentes (NaN) viram string vazia ao exportar com
    na_rep="" — exatamente como o INEP representa ausência no CSV original.
    """
    caminho = caminho or config.ARQ_SINTETICO
    df.to_csv(caminho, sep=";", encoding="latin-1", index=False, na_rep="")
    print(f"[gerador] Base sintética salva: {caminho} ({len(df):,} candidatos)")


def gerar_base(n: int = config.N_SINTETICO, semente: int = config.SEMENTE) -> pd.DataFrame:
    """Gera a base e PERSISTE em data/ — ponto de entrada usado por config
    (usar_base_disponivel) e pelo __main__."""
    df = gerar_dataframe(n, semente)
    salvar_csv_inep(df)
    return df


if __name__ == "__main__":
    print("[gerador] Gerando base sintética do ENCCEJA 2024...")
    df = gerar_base(config.N_SINTETICO, config.SEMENTE)

    # Diagnóstico rápido (sanity check das distribuições geradas)
    presentes = (df[["TP_PRESENCA_LC", "TP_PRESENCA_CH", "TP_PRESENCA_MT",
                     "TP_PRESENCA_CN"]].max(axis=1) == 1).mean()
    print(f"[gerador] Taxa de presença (≥1 prova): {presentes:.1%}")
    print(f"[gerador] Nota média LC (presentes): {df['NU_NOTA_LC'].mean():.1f}")
    print(f"[gerador] Aprovação LC: {df['IN_APROVADO_LC'].mean():.1%} | "
          f"MT: {df['IN_APROVADO_MT'].mean():.1%}")
    print(f"[gerador] Redação média: {df['NU_NOTA_REDACAO'].mean():.2f}")
    print("[gerador] Concluído.")
