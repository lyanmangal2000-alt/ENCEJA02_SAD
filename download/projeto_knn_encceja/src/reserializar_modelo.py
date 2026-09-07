# -*- coding: utf-8 -*-
"""
RESERIALIZAÇÃO RÁPIDA DO MODELO — utilitário de desenvolvimento
Reconstrói e re-serializa o modelo com a melhor configuração já validada
(busca de hiperparâmetros é determinística e custosa — não repetimos aqui).
"""

import json

import joblib

import config
import preparacao_features as prep
from treino_knn import exportar_dashboard
from sklearn.pipeline import Pipeline
from sklearn.neighbors import KNeighborsRegressor, KNeighborsClassifier


def main():
    # A melhor configuração está no metricas_modelo.json (exportado pela busca)
    with open(config.ARQ_METRICAS, encoding="utf-8") as f:
        melhor = json.load(f)["melhor_config"]
    with open(config.ARQ_METADADOS, encoding="utf-8") as f:
        met = json.load(f)
    conjuntos = prep.preparar_conjuntos()

    # Regressor final
    pipeline = Pipeline([
        ("pre", prep.construir_preprocessador()),
        ("modelo", KNeighborsRegressor(n_neighbors=melhor["k"],
                                       weights=melhor["peso"],
                                       metric=melhor["metrica"])),
    ])
    pipeline.fit(conjuntos["X_treino"], conjuntos["y_treino"])

    # Classificador auxiliar (mesma configuração)
    aprov_treino = conjuntos["df_completo"].loc[conjuntos["X_treino"].index,
                                                config.COLUNAS_APROVACAO]
    y_treino_flag = (aprov_treino.fillna(0).sum(axis=1) >= 3).astype(int)
    clf = Pipeline([
        ("pre", prep.construir_preprocessador()),
        ("modelo", KNeighborsClassifier(n_neighbors=melhor["k"],
                                        weights=melhor["peso"],
                                        metric=melhor["metrica"])),
    ])
    clf.fit(conjuntos["X_treino"], y_treino_flag)

    # Conjunto de treino para mapeamento de vizinhos (posições → candidatos)
    colunas_vizinhanca = (conjuntos["colunas_x"] + config.ALVOS
                          + config.COLUNAS_APROVACAO + ["NU_INSCRICAO"])
    df_treino = (conjuntos["df_completo"]
                 .loc[conjuntos["X_treino"].index]
                 .reset_index(drop=True)[colunas_vizinhanca])

    joblib.dump({
        "pipeline_regressor": pipeline,
        "pipeline_classificador": clf,
        "melhor_config": melhor,
        "colunas_x": conjuntos["colunas_x"],
        "alvos": conjuntos["alvos"],
        "rotulos_areas": config.ROTULOS_AREAS,
        "nota_corte": {"objetiva": config.NOTA_CORTE_OBJETIVA,
                       "redacao": config.NOTA_CORTE_REDACAO},
        "mae_global": met["mae_global"],
        "rmse_global": met["rmse_global"],
        "df_treino": df_treino,
    }, config.ARQ_MODELO)
    print(f"[reserializa] Modelo atualizado: {config.ARQ_MODELO}")

    metricas = {"metricas_area": met["metricas_area"],
                "mae_global": met["mae_global"],
                "rmse_global": met["rmse_global"]}
    exportar_dashboard(pipeline, conjuntos, melhor, metricas)


if __name__ == "__main__":
    main()
