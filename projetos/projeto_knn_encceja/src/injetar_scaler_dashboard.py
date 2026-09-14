# -*- coding: utf-8 -*-
"""
ADICIONA PARÂMETROS DO SCALER AO JSON DO DASHBOARD
O dashboard web (Next.js) replica a codificação/normalização do pipeline
Python no navegador; para isso precisa de mean_/scale_ do StandardScaler
ajustado no treino. Este utilitário injeta "scaler" no dados_dashboard.json.
"""

import json

import joblib

import config


def main():
    with open(config.MODEL_DIR / "preprocessador_dashboard.joblib", "rb") as f:
        artefato = joblib.load(f)

    scaler = artefato["scaler_dashboard"]
    nomes = artefato["nomes_features"]

    with open(config.ARQ_DADOS_DASHBOARD, encoding="utf-8") as f:
        dados = json.load(f)

    dados["scaler"] = {
        "feature_names": nomes,
        "mean": [round(float(m), 6) for m in scaler.mean_],
        "scale": [round(float(s), 6) for s in scaler.scale_],
    }

    with open(config.ARQ_DADOS_DASHBOARD, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False)

    print(f"[scaler] injetado: {len(nomes)} features")
    print("exemplo:", nomes[:4], dados["scaler"]["mean"][:4])


if __name__ == "__main__":
    main()
