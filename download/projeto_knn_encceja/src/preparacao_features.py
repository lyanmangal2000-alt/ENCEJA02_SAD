# -*- coding: utf-8 -*-
"""
=============================================================================
PREPARAÇÃO DE FEATURES — CODIFICAÇÃO, NORMALIZAÇÃO E SPLIT (Etapa 2)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

Este módulo define o PRÉ-PROCESSADOR do KNN usando um ColumnTransformer do
scikit-learn, que é serializado junto com o modelo (joblib). Assim, a
interface (Streamlit) envia o perfil CATEGÓRICO cru do candidato e recebe a
previsão — toda a codificação/normalização é reaplicada identicamente.

DECISÕES DE CODIFICAÇÃO (cada uma justificada):

  1. ORDINAL para variáveis com hierarquia natural:
     - renda_familiar        (faixas de salário mínimo crescem monotonamente)
     - escolaridade_anterior (níveis de ensino são ordenáveis)
     - situacao_trabalho     (ordenável por intensidade de horas trabalhadas)
     JUSTIFICATIVA: codificar ordinalmente preserva a informação de ORDEM que
     existe na variável. Em KNN isso importa: um candidato de renda "De 5 a 10
     SM" deve ficar mais "perto" de "De 3 a 5 SM" do que de "Nenhuma renda".
     One-hot destruiria essa noção de distância gradual.

  2. ONE-HOT para variáveis nominais (sem ordem):
     - sexo, SG_UF_PROVA (27 UFs), certificacao
     JUSTIFICATIVA: não existe ordem natural entre UFs nem entre sexos;
     ordinal inventaria uma hierarquia falsa que distorceria as distâncias.

  3. ORDINAL numérico para faixa etária:
     - TP_FAIXA_ETARIA (código 1–19 já é uma ordem de idade); tratamos o
     código como numérico contínuo após conversão. A proximidade etária
     fica preservada (25 anos é mais próximo de 26–30 que de 60+).

  4. STANDARDSCALER (Z-score) sobre TODAS as features codificadas:
     JUSTIFICATIVA — ETAPA CRÍTICA EM KNN: o algoritmo soma quadrados de
     diferenças (distância euclidiana). Sem padronização, uma variável com
     amplitude numérica grande (ex.: código da UF codificado 1–27) dominaria
     o cálculo, e variáveis binárias teriam peso quase nulo. O Z-score coloca
     todas as dimensões em escala comparável (média 0, desvio 1).

  5. SPLIT 80/20 ESTRATIFICADO por TP_CERTIFICACAO:
     JUSTIFICATIVA: o tipo de certificação é a maior quebra de distribuição
     do público (fundamental ≠ médio em perfil e desempenho). Estratificar
     garante que treino e teste tenham proporções idênticas dessa variável,
     tornando as métricas de avaliação estáveis e comparáveis.

  Nota: o fit do scaler é feito SEMPRE apenas no conjunto de TREINO (dentro
  do Pipeline do sklearn) para evitar vazamento de dados (data leakage) do
  conjunto de teste para o modelo.
=============================================================================
"""

import numpy as np
import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OrdinalEncoder, OneHotEncoder, StandardScaler

import config

# -----------------------------------------------------------------------------
# Definição dos blocos de features (ordem de inserção = ordem no vetor final)
# -----------------------------------------------------------------------------

# Variáveis ordinais: a ORDEM DAS CATEGORIAS é informação relevante e é passada
# explicitamente ao OrdinalEncoder (categorias='auto' seguiria ordem alfabética
# — ERRADO para renda/escolaridade/trabalho).
CATEGORIAS_ORDINAIS = {
    "renda_familiar": list(config.MAP_RENDA.values()),
    "escolaridade_anterior": list(config.MAP_ESCOLARIDADE.values()),
    "situacao_trabalho": list(config.MAP_TRABALHO.values()),
}

# Variáveis nominais (one-hot)
CATEGORIAS_ONEHOT = ["TP_SEXO", "SG_UF_PROVA", "certificacao"]

# Faixa etária: tratada como numérica ordinal (código 1–19 preserva a idade)
FAIXA_NUMERICA = ["TP_FAIXA_ETARIA"]


def construir_preprocessador() -> ColumnTransformer:
    """
    Monta o ColumnTransformer com os três blocos de transformação.
    A ORDEM dos blocos define a ordem das colunas do vetor final, o que é
    documentado nos metadados para o dashboard web replicar a codificação.
    """
    colunas_ordinais = list(CATEGORIAS_ORDINAIS.keys())
    ordem_categorias = [CATEGORIAS_ORDINAIS[c] for c in colunas_ordinais]

    return ColumnTransformer(
        transformers=[
            # Bloco 1 — ordinais com hierarquia explícita
            ("ordinais",
             OrdinalEncoder(categories=ordem_categorias,
                            handle_unknown="use_encoded_value", unknown_value=-1),
             colunas_ordinais),
            # Bloco 2 — nominais em one-hot (ignore ignora categorias novas
            # com segurança em produção)
            ("onehot",
             OneHotEncoder(handle_unknown="ignore", sparse_output=False),
             CATEGORIAS_ONEHOT),
            # Bloco 3 — faixa etária como numérica ordinal de idade
            ("faixa", "passthrough", FAIXA_NUMERICA),
        ],
        remainder="drop",
        verbose_feature_names_out=False,
    )


def nomes_features(preprocessador: ColumnTransformer) -> list[str]:
    """Retorna os nomes das features após a transformação (auditabilidade).

    Deve ser chamado APÓS o preprocessador ter sido ajustado (fit).
    """
    return list(preprocessador.get_feature_names_out())


def preparar_conjuntos():
    """
    Carrega a base processada, separa X (perfil) e y (notas), e divide em
    treino/teste estratificado. Retorna tudo o que o treino precisa.

    ESCOPO: usa apenas IN_EXAME_COMPLETO = 1 (justificativa no docstring do
    módulo ETL — o regressor multi-output exige alvos completos).
    """
    df = pd.read_csv(config.ARQ_BASE_PROCESSADA, sep=";", encoding="utf-8",
                     low_memory=False)

    df_completo = df[df["IN_EXAME_COMPLETO"] == 1].copy()
    print(f"[features] Base processada: {len(df):,} | exames completos p/ treino: "
          f"{len(df_completo):,}")

    colunas_x = (list(CATEGORIAS_ORDINAIS.keys()) + CATEGORIAS_ONEHOT + FAIXA_NUMERICA)
    alvos = config.ALVOS

    X = df_completo[colunas_x].copy()
    y = df_completo[alvos].copy()

    # Conversão da faixa etária para numérico (código oficial 1–19 já é ordem)
    X["TP_FAIXA_ETARIA"] = X["TP_FAIXA_ETARIA"].astype(float)

    # SPLIT ESTRATIFICADO 80/20 (justificativa no cabeçalho do módulo)
    X_treino, X_teste, y_treino, y_teste = train_test_split(
        X, y,
        test_size=config.TEST_SIZE,
        random_state=config.SEMENTE,
        stratify=df_completo["TP_CERTIFICACAO"],
    )
    print(f"[features] Treino: {len(X_treino):,} | Teste: {len(X_teste):,} "
          f"(estratificado por TP_CERTIFICACAO)")

    return {
        "df_completo": df_completo,
        "X_treino": X_treino, "X_teste": X_teste,
        "y_treino": y_treino, "y_teste": y_teste,
        "colunas_x": colunas_x,
        "alvos": alvos,
    }


if __name__ == "__main__":
    conjuntos = preparar_conjuntos()
    # Demonstração: ajusta o preprocessador e mostra o vetor resultante
    pre = construir_preprocessador()
    Xt = pre.fit_transform(conjuntos["X_treino"])
    print(f"[features] Vetor final de features: {Xt.shape[1]} dimensões")
    print(f"[features] Nomes: {list(pre.get_feature_names_out())}")
