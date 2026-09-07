# -*- coding: utf-8 -*-
"""
=============================================================================
SISTEMA DE APOIO À DECISÃO ENCCEJA — CONFIGURAÇÕES CENTRAIS
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

Este módulo centraliza TODAS as constantes, caminhos e mapeamentos usados
pelo pipeline (ETL → features → treino KNN → interface). Centralizar aqui
facilita a manutenção: se o INEP mudar a numeração do questionário
socioeconômico em uma nova edição do exame, basta ajustar este arquivo.

ORIGEM DOS DADOS (base principal):
    INEP — Microdados do ENCCEJA 2024 — candidatos regulares (não PPL)
    https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/encceja

PARTICULARIDADES TÉCNICAS DOS CSVs DO INEP (tratadas no ETL):
    - Codificação ISO-8859-1 (latin-1), NÃO UTF-8
    - Separador de colunas: ';' (ponto e vírgula)
    - Separador decimal das notas: '.' (ponto)
    - Valores ausentes: campo vazio (string vazia)
    - TP_PRESENCA_*: 0 = ausente | 1 = presente | 2 = eliminado
    - TP_CERTIFICACAO: 1 = Ensino Fundamental | 2 = Ensino Médio
    - Q01–Q75: questionário socioeconômico (somente no arquivo REG_NAC)
=============================================================================
"""

from pathlib import Path

# -----------------------------------------------------------------------------
# 1. CAMINHOS DO PROJETO
# -----------------------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent          # raiz do repositório
DATA_DIR = BASE_DIR / "data"                               # dados de entrada
MODEL_DIR = BASE_DIR / "modelos"                           # artefatos serializados
EXPORT_DIR = BASE_DIR / "export"                           # JSONs p/ dashboards

# Arquivo PRINCIPAL (candidatos regulares, com questionário socioeconômico
# embutido). 834.648 linhas na edição 2024.
ARQ_REG_NAC = DATA_DIR / "MICRODADOS_ENCCEJA_2024_REG_NAC.csv"

# Versão SINTÉTICA gerada por src/gerar_dados_sinteticos.py — mesmas colunas,
# mesmo formato (latin-1, ';') — permite testar TODO o pipeline sem baixar os
# microdados oficiais. O pipeline usa este arquivo automaticamente caso o
# oficial não esteja presente (ver usar_base_disponivel() abaixo).
ARQ_SINTETICO = DATA_DIR / "MICRODADOS_ENCCEJA_2024_REG_NAC_SINTETICO.csv"

# Saídas processadas
ARQ_BASE_PROCESSADA = DATA_DIR / "base_processada.csv"
ARQ_MODELO = MODEL_DIR / "modelo_knn.joblib"
ARQ_METADADOS = MODEL_DIR / "metadados_modelo.json"
ARQ_METRICAS = EXPORT_DIR / "metricas_modelo.json"          # curvas p/ dashboard
ARQ_DADOS_DASHBOARD = EXPORT_DIR / "dados_dashboard.json"   # amostra p/ dashboard

# -----------------------------------------------------------------------------
# 2. SELEÇÃO AUTOMÁTICA DA BASE DE DADOS
# -----------------------------------------------------------------------------

def usar_base_disponivel() -> Path:
    """
    Retorna o caminho da base a ser usada pelo pipeline:
      1. Se o CSV oficial do INEP existir em data/, usa-o (prioridade máxima);
      2. Caso contrário, usa a base sintética (gerando-a se necessário).

    DECISÃO DE DESIGN: o pipeline inteiro (ETL → features → treino) é agnóstico
    à origem dos dados — a base sintética segue EXATAMENTE o mesmo schema e
    formato do arquivo oficial, então nenhum passo de modelagem precisa mudar.
    Isso torna o projeto reproduzível e testável sem depender do download do
    INEP, e a troca para dados reais é transparente.
    """
    if ARQ_REG_NAC.exists():
        return ARQ_REG_NAC
    if not ARQ_SINTETICO.exists():
        # Gera a base sintética sob demanda (import local evita dependência
        # circular quando este módulo é importado pelo gerador).
        from gerar_dados_sinteticos import gerar_base
        gerar_base()
    return ARQ_SINTETICO


# -----------------------------------------------------------------------------
# 3. COLUNAS DE INTERESSE NO CSV ORIGINAL
# -----------------------------------------------------------------------------

# Identificação e perfil (variáveis explicativas "cadastrais")
COLUNAS_PERFIL = [
    "NU_INSCRICAO",       # número de inscrição (chave)
    "TP_SEXO",            # M / F
    "TP_FAIXA_ETARIA",    # código 1–19 (ver MAP_FAIXA_ETARIA)
    "SG_UF_PROVA",        # unidade federativa da prova
    "TP_CERTIFICACAO",    # 1 = Fundamental | 2 = Médio
]

# Presença nas provas: 0 = ausente | 1 = presente | 2 = eliminado
COLUNAS_PRESENCA = [
    "TP_PRESENCA_LC", "TP_PRESENCA_CH", "TP_PRESENCA_MT", "TP_PRESENCA_CN",
]

# Notas (saída do KNN). Escala 0–180 para as provas objetivas e 0–10 para a
# redação. Aprovação em cada área objetiva exige nota >= 100 (corte oficial);
# na redação, >= 5.
COLUNAS_NOTAS = [
    "NU_NOTA_LC", "NU_NOTA_CH", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_REDACAO",
]

# Indicadores binários de aprovação por área (0/1), já calculados pelo INEP
COLUNAS_APROVACAO = [
    "IN_APROVADO_LC", "IN_APROVADO_CH", "IN_APROVADO_MT", "IN_APROVADO_CN",
]

# Nota mínima de aprovação (corte oficial ENCCEJA) — usado nas regras de
# negócio e na interface.
NOTA_CORTE_OBJETIVA = 100.0
NOTA_CORTE_REDACAO = 5.0

# -----------------------------------------------------------------------------
# 4. QUESTIONÁRIO SOCIOECONÔMICO — QUESTÕES SELECIONADAS
# -----------------------------------------------------------------------------
# ⚠️ ATENÇÃO — PONTO DE MANUTENÇÃO CRÍTICO ⚠️
# A numeração Q01–Q75 PODE MUDAR entre edições do exame. Os números abaixo
# foram calibrados para a base sintética e representam um chute plausível da
# edição 2024. ANTES de rodar com os CSVs oficiais, confirme no arquivo
# "Dicionário de variáveis / Leia-me" do pacote de microdados do INEP:
#   - qual questão mede a SITUAÇÃO DE TRABALHO
#   - qual questão mede a RENDA FAMILIAR MENSAL
#   - qual questão mede a ESCOLARIDADE ANTERIOR do candidato
# Basta alterar as três constantes abaixo — todo o restante do pipeline se
# adapta automaticamente.
# -----------------------------------------------------------------------------

QUESTAO_TRABALHO = "Q025"
QUESTAO_RENDA = "Q047"
QUESTAO_ESCOLARIDADE = "Q020"

# Colunas Q que o ETL deve carregar do CSV
COLUNAS_QUESTIONARIO = [QUESTAO_TRABALHO, QUESTAO_RENDA, QUESTAO_ESCOLARIDADE]

# --- Decodificadores (código de resposta → categoria legível) ----------------
# Mesma ressalva do bloco acima: valide as letras contra o dicionário oficial.

# Situação de trabalho (ordem = intensidade crescente de horas trabalhadas;
# a ordem É significativa pois a variável será codificada de forma ordinal)
MAP_TRABALHO = {
    "A": "Não trabalha",
    "B": "Trabalha eventualmente",
    "C": "Trabalha até 25h semanais",
    "D": "Trabalha de 26 a 39h semanais",
    "E": "Trabalha 40h ou mais semanais",
}

# Renda familiar mensal em salários mínimos (ordem crescente de renda;
# codificação ordinal preserva a hierarquia natural das faixas)
MAP_RENDA = {
    "A": "Nenhuma renda",
    "B": "Até 1 salário mínimo",
    "C": "De 1 a 2 salários mínimos",
    "D": "De 2 a 3 salários mínimos",
    "E": "De 3 a 5 salários mínimos",
    "F": "De 5 a 10 salários mínimos",
    "G": "Mais de 10 salários mínimos",
}

# Escolaridade anterior do candidato (ordem crescente de escolaridade)
MAP_ESCOLARIDADE = {
    "A": "Sem escolaridade/Analfabeto",
    "B": "Fundamental incompleto",
    "C": "Fundamental completo",
    "D": "Médio incompleto",
    "E": "Médio completo",
    "F": "Superior completo",
}

# -----------------------------------------------------------------------------
# 5. DICIONÁRIOS DAS VARIÁVEIS CADASTRAIS
# -----------------------------------------------------------------------------

# Faixa etária (códigos oficiais do dicionário INEP — estáveis entre edições)
MAP_FAIXA_ETARIA = {
    1: "Menor de 18 anos",   2: "18 anos",            3: "19 anos",
    4: "20 anos",            5: "21 anos",            6: "22 anos",
    7: "23 anos",            8: "24 anos",            9: "25 anos",
    10: "26 a 30 anos",      11: "31 a 35 anos",      12: "36 a 40 anos",
    13: "41 a 45 anos",      14: "46 a 50 anos",      15: "51 a 55 anos",
    16: "56 a 60 anos",      17: "61 a 65 anos",      18: "66 a 70 anos",
    19: "Maior de 70 anos",
}

# Tipo de certificação pretendida
MAP_CERTIFICACAO = {1: "Ensino Fundamental", 2: "Ensino Médio"}

# Agrupamento das 19 faixas etárias em 6 grupos — usado APENAS nas
# visualizações do dashboard (mantém o gráfico legível sem perder a hierarquia)
GRUPOS_ETARIOS = {
    "Até 24 anos":  list(range(1, 9)),
    "25 a 29 anos": [9, 10],
    "30 a 39 anos": [10, 11, 12],      # 26-30, 31-35, 36-40
    "40 a 49 anos": [12, 13, 14],      # aproximação por proximidade
    "50 a 59 anos": [14, 15, 16],
    "60 anos ou mais": [17, 18, 19],
}

# -----------------------------------------------------------------------------
# 6. REGIÕES POR UF — usadas para agregações regionais nas análises
# -----------------------------------------------------------------------------

UF_REGIAO = {
    # Norte
    "AC": "Norte", "AP": "Norte", "AM": "Norte", "PA": "Norte",
    "RO": "Norte", "RR": "Norte", "TO": "Norte",
    # Nordeste
    "AL": "Nordeste", "BA": "Nordeste", "CE": "Nordeste", "MA": "Nordeste",
    "PB": "Nordeste", "PE": "Nordeste", "PI": "Nordeste", "RN": "Nordeste",
    "SE": "Nordeste",
    # Centro-Oeste
    "DF": "Centro-Oeste", "GO": "Centro-Oeste", "MT": "Centro-Oeste",
    "MS": "Centro-Oeste",
    # Sudeste
    "ES": "Sudeste", "MG": "Sudeste", "RJ": "Sudeste", "SP": "Sudeste",
    # Sul
    "PR": "Sul", "RS": "Sul", "SC": "Sul",
}

# Lista ordenada de UFs para formulários (alfabética)
UFS = sorted(UF_REGIAO.keys())

# -----------------------------------------------------------------------------
# 7. HIPERPARÂMETROS DA MODELAGEM K-NN
# -----------------------------------------------------------------------------

# Valores de k a testar na busca de hiperparâmetros. Intervalo amplo e ímpar:
# k ímpar evita empates e cobre desde modelos sensíveis (k=3) até suaves
# (k=21). A escolha final é feita por validação cruzada (ver treino_knn.py).
KS_A_TESTAR = [3, 5, 7, 9, 11, 15, 21]

# Funções de peso e métricas de distância a comparar na busca
PESOS_A_TESTAR = ["uniform", "distance"]
METRICAS_A_TESTAR = ["euclidean", "manhattan"]

# PESO DO MODELO FINAL — DECISÃO DE NEGÓCIO DOCUMENTADA:
# A busca por CV escolheu 'uniform' com RMSE ~10% menor. Para o modelo FINAL
# adotamos 'distance' porque, com pesos uniformes, a nota prevista é
# ESTATISTICAMENTE IDÊNTICA à média simples dos k vizinhos exibidos na
# interface — o que esvaziaria a comparação gerencial "previsto × média dos
# vizinhos" (barras sempre iguais) e o parecer que explica a decisão a partir
# dos vizinhos. Com 'distance', a previsão é puxada para os vizinhos MAIS
# semelhantes, a comparação visual ganha conteúdo informativo e a perda de
# RMSE (~2 pontos) é aceitável para fins de apoio à decisão. Detalhes no
# README (seção "Escolha de k e de pesos").
PESO_FINAL = "distance"

# Proporção do conjunto de teste na divisão treino/teste (padrão 80/20)
TEST_SIZE = 0.20

# Semente aleatória global — garante REPRODUCIBILIDADE dos experimentos
SEMENTE = 42

# Número de folds da validação cruzada
CV_FOLDS = 5

# Notas previstas (alvos do KNeighborsRegressor — suporta múltiplas saídas)
ALVOS = ["NU_NOTA_LC", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_CH", "NU_NOTA_REDACAO"]

# Rótulos amigáveis das áreas para gráficos e interface
ROTULOS_AREAS = {
    "NU_NOTA_LC": "Linguagens e Códigos",
    "NU_NOTA_MT": "Matemática",
    "NU_NOTA_CN": "Ciências da Natureza",
    "NU_NOTA_CH": "Ciências Humanas",
    "NU_NOTA_REDACAO": "Redação",
}

# -----------------------------------------------------------------------------
# 8. PARÂMETROS DO GERADOR DE DADOS SINTÉTICOS
# -----------------------------------------------------------------------------
# Tamanho da base sintética. Valor escolhido para ser grande o suficiente para
# treinar KNN com estabilidade estatística e pequeno o suficiente para rodar
# em segundos em um notebook comum. Os microdados reais têm 834.648 linhas;
# ao rodar com a base real, este parâmetro NÃO é usado.
N_SINTETICO = 60_000

# Amostra exportada para o dashboard web (KNN em TypeScript no navegador).
# 3.000 vizinhos-candidatos equilibram variedade de perfis e tamanho de JSON.
N_AMOSTRA_DASHBOARD = 3_000
