# -*- coding: utf-8 -*-
"""
REEXPORTAÇÃO RÁPIDA DO DASHBOARD — utilitário de desenvolvimento
Recarrega o modelo serializado + conjuntos e reexporta os JSONs do dashboard
sem repetir a busca de hiperparâmetros (que é determinística e já validada).
"""

import joblib

import config
import preparacao_features as prep
from treino_knn import exportar_dashboard


def main():
    modelo = joblib.load(config.ARQ_MODELO)
    conjuntos = prep.preparar_conjuntos()
    pipeline = modelo["pipeline_regressor"]
    melhor = modelo["melhor_config"]
    metricas = {
        "metricas_area": None, "mae_global": modelo["mae_global"],
        "rmse_global": modelo["rmse_global"],
    }
    # metricas_area já existe no metadados_modelo.json — recarrega
    import json
    with open(config.ARQ_METADADOS, encoding="utf-8") as f:
        met = json.load(f)
    metricas["metricas_area"] = met["metricas_area"]
    exportar_dashboard(pipeline, conjuntos, melhor, metricas)

    # Garante que os metadados carregam melhor_config e config_final
    if "melhor_config" not in met:
        met["melhor_config"] = melhor
    if "config_final" not in met:
        met["config_final"] = {**melhor, "peso": config.PESO_FINAL}
    with open(config.ARQ_METADADOS, "w", encoding="utf-8") as f:
        json.dump(met, f, ensure_ascii=False, indent=2)
    print("[reexporta] metadados_modelo.json atualizado")


if __name__ == "__main__":
    main()
