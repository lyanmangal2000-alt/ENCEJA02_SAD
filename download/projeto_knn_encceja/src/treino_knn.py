# -*- coding: utf-8 -*-
"""
=============================================================================
TREINO DO K-NN — BUSCA DE HIPERPARÂMETROS, AVALIAÇÃO E SERIALIZAÇÃO (Etapa 3)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

O QUE ESTE SCRIPT FAZ:
    1. Monta o Pipeline completo (preprocessador → scaler → KNeighborsRegressor);
    2. BUSCA DE HIPERPARÂMETROS por validação cruzada (5 folds) sobre o
       conjunto de treino, testando:
          - k ∈ {3, 5, 7, 9, 11, 15, 21}  (número de vizinhos)
          - pesos ∈ {uniform, distance}   (peso dos vizinhos na média)
          - distância ∈ {euclidean, manhattan}
    3. Seleciona a melhor configuração pelo RMSE médio (menor erro);
    4. Avalia a configuração final no conjunto de TESTE (nunca visto na busca):
       MAE e RMSE por área + indicador global;
    5. Treina um KNeighborsClassifier auxiliar para a variável gerencial
       "aprovado em pelo menos 3 das 4 áreas objetivas";
    6. Serializa modelo + metadados (joblib/JSON) e exporta as curvas de
       validação para o dashboard web.

JUSTIFICATIVAS-CHAVE (ecoadas no README e no vídeo):

  POR QUE K-NN PARA ESTE PROBLEMA?
    O negócio pede explicitamente "candidatos SEMELHANTES": o K-NN é a
    materialização algorítmica dessa pergunta — encontra os k perfis mais
    próximos do histórico e usa o desempenho real deles como estimativa.
    Além disso é um modelo INERENTEMENTE EXPLICÁVEL: a interface pode mostrar
    os vizinhos usados na previsão, o que dá transparência à decisão gerencial
    (requisito de um SAD). Modelos caixa-preta (redes, gradient boosting)
    preveriam talvez com menos erro, mas não responderiam "quem são os
    casos parecidos e o que aconteceu com eles?" — que é o produto pedido.

  POR QUE DISTÂNCIA EUCLIDIANA COMO PADRÃO?
    Após a padronização Z-score, todas as dimensões têm a mesma escala, e a
    euclidiana mede a proximidade "retilínea" natural entre perfis no espaço
    socioeconômico. A manhattan é testada como contraprova (mais robusta em
    alta dimensionalidade); a escolha final é empírica (validação cruzada).

  POR QUE VALIDAÇÃO CRUZADA PARA O k?
    Escolher k olhando só para o teste seria vazar o conjunto de avaliação.
    O k é selecionado por CV nos dados de TREINO; o teste fica intocado para
    estimar o erro de generalização.

  POR QUE PESO "distance" SER UMA OPÇÃO?
    Vizinhos muito próximos são mais informativos que vizinhos limítrofes;
    ponderar pela inversa da distância suaviza a previsão em bordas de
    espaço. Comparamos empíricamente com "uniform".
=============================================================================
"""

import json
import time

import numpy as np
import pandas as pd
import joblib

from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score, KFold
from sklearn.neighbors import KNeighborsRegressor, KNeighborsClassifier
from sklearn.metrics import (mean_absolute_error, mean_squared_error,
                             accuracy_score, classification_report)

import config
import preparacao_features as prep

# Artefato adicional do dashboard (pré-processador + scaler dedicados ao web)
ARQ_PRE_DASH = config.MODEL_DIR / "preprocessador_dashboard.joblib"


# -----------------------------------------------------------------------------
# 1. BUSCA DE HIPERPARÂMETROS
# -----------------------------------------------------------------------------

def buscar_melhor_configuracao(X_treino, y_treino) -> tuple[dict, list[dict]]:
    """
    Varre k × pesos × métricas com validação cruzada (5 folds) e retorna
    (melhor_configuração, histórico_completo_de_resultados).

    MÉTRICA DE SELEÇÃO: RMSE médio entre as 5 áreas (multi-output). RMSE
    penaliza erros grandes — desejável aqui, porque um erro grande de previsão
    na direção errada (prever aprovação para quem reprovaria) custa caro ao
    gestor em alocação de reforço.
    """
    historico = []
    cv = KFold(n_splits=config.CV_FOLDS, shuffle=True, random_state=config.SEMENTE)

    total = len(config.KS_A_TESTAR) * len(config.PESOS_A_TESTAR) * len(config.METRICAS_A_TESTAR)
    feitos = 0
    inicio = time.time()

    for metrica in config.METRICAS_A_TESTAR:
        for peso in config.PESOS_A_TESTAR:
            for k in config.KS_A_TESTAR:
                pipeline = Pipeline([
                    ("pre", prep.construir_preprocessador()),
                    ("modelo", KNeighborsRegressor(
                        n_neighbors=k, weights=peso, metric=metrica)),
                ])
                # cross_val_score com scoring neg_root_mean_squared_error por
                # saída: para multi-output, sklearn devolve a média dos RMSEs
                # por coluna (uniform_average) — exatamente o critério definido.
                scores = cross_val_score(
                    pipeline, X_treino, y_treino, cv=cv,
                    scoring="neg_root_mean_squared_error", n_jobs=-1,
                )
                rmse_cv = -scores.mean()
                historico.append({
                    "k": k, "peso": peso, "metrica": metrica,
                    "rmse_cv": round(float(rmse_cv), 4),
                })
                feitos += 1
                print(f"  [{feitos}/{total}] k={k:>2} peso={peso:<8} "
                      f"dist={metrica:<9} → RMSE(CV) = {rmse_cv:.2f}")

    melhor = min(historico, key=lambda h: h["rmse_cv"])
    print(f"\n[treino] Melhor configuração: k={melhor['k']}, peso={melhor['peso']}, "
          f"distância={melhor['metrica']} (RMSE CV = {melhor['rmse_cv']:.2f}) "
          f"— {time.time() - inicio:.1f}s")
    return melhor, historico


# -----------------------------------------------------------------------------
# 2. TREINO FINAL E AVALIAÇÃO NO TESTE
# -----------------------------------------------------------------------------

def treinar_e_avaliar(melhor: dict, conjuntos: dict) -> tuple[Pipeline, dict]:
    """
    Ajusta o pipeline final e avalia no teste.

    NOTA: o peso do modelo FINAL é config.PESO_FINAL ('distance'), decisão de
    negócio documentada em config.py — mantém a comparação gerencial
    "previsto × média dos vizinhos" informativa. O k e a métrica vêm da busca
    por validação cruzada.
    """
    pipeline = Pipeline([
        ("pre", prep.construir_preprocessador()),
        ("modelo", KNeighborsRegressor(
            n_neighbors=melhor["k"],
            weights=config.PESO_FINAL,
            metric=melhor["metrica"],
        )),
    ])
    pipeline.fit(conjuntos["X_treino"], conjuntos["y_treino"])

    y_prev = pipeline.predict(conjuntos["X_teste"])
    y_real = conjuntos["y_teste"].values

    # Métricas por área — o gestor precisa saber em qual disciplina o modelo
    # é mais/menos confiável.
    metricas_area = {}
    for i, alvo in enumerate(conjuntos["alvos"]):
        mae = mean_absolute_error(y_real[:, i], y_prev[:, i])
        rmse = float(np.sqrt(mean_squared_error(y_real[:, i], y_prev[:, i])))
        metricas_area[alvo] = {"mae": round(mae, 2), "rmse": round(rmse, 2)}
        print(f"[treino] {config.ROTULOS_AREAS[alvo]:<22} MAE={mae:5.2f}  RMSE={rmse:5.2f}")

    mae_global = float(np.mean([m["mae"] for m in metricas_area.values()]))
    rmse_global = float(np.mean([m["rmse"] for m in metricas_area.values()]))
    print(f"[treino] MÉDIA GLOBAL              MAE={mae_global:5.2f}  RMSE={rmse_global:5.2f}")

    return pipeline, {"metricas_area": metricas_area,
                      "mae_global": round(mae_global, 2),
                      "rmse_global": round(rmse_global, 2)}


# -----------------------------------------------------------------------------
# 3. CLASSIFICADOR AUXILIAR DE APROVAÇÃO (variável gerencial)
# -----------------------------------------------------------------------------

def treinar_classificador_aprovacao(conjuntos: dict, melhor: dict) -> tuple[Pipeline, dict]:
    """
    Treina KNeighborsClassifier para "aprovado em ≥ 3 das 4 objetivas"
    (proxy de certificação completa). Reaproveita k/peso/métrica da regressão
    para manter coerência e simplicidade.

    JUSTIFICATIVA DO ALVO: para o gestor, a pergunta binária relevante é
    "este perfil tende a conquistar a certificação?" — aprovação em 3 ou 4
    áreas já sinaliza forte probabilidade de certificado.
    """
    # As flags de aprovação ficam na base completa (y_treino contém apenas as
    # notas) — recuperamos pelos índices preservados na divisão treino/teste.
    df = conjuntos["df_completo"]
    aprov_treino = df.loc[conjuntos["X_treino"].index, config.COLUNAS_APROVACAO]
    aprov_teste = df.loc[conjuntos["X_teste"].index, config.COLUNAS_APROVACAO]

    y_treino_flag = (aprov_treino.fillna(0).sum(axis=1) >= 3).astype(int)
    y_teste_flag = (aprov_teste.fillna(0).sum(axis=1) >= 3).astype(int)

    clf = Pipeline([
        ("pre", prep.construir_preprocessador()),
        ("modelo", KNeighborsClassifier(
            n_neighbors=melhor["k"], weights=config.PESO_FINAL,
            metric=melhor["metrica"])),
    ])
    clf.fit(conjuntos["X_treino"], y_treino_flag)

    prev = clf.predict(conjuntos["X_teste"])
    acuracia = accuracy_score(y_teste_flag, prev)
    print(f"[treino] Classificador de aprovação (≥3/4 áreas): acurácia = {acuracia:.1%}")
    print(classification_report(y_teste_flag, prev, digits=2))

    return clf, {"acuracia_aprovacao": round(float(acuracia), 4)}


# -----------------------------------------------------------------------------
# 4. EXPORTAÇÃO PARA O DASHBOARD WEB
# -----------------------------------------------------------------------------

def exportar_dashboard(pipeline: Pipeline, conjuntos: dict, melhor: dict,
                       metricas: dict) -> None:
    """
    Exporta para export/ os insumos do dashboard web (Next.js):
      - metricas_modelo.json: curvas k × RMSE/MAE da busca + métricas finais;
      - dados_dashboard.json: amostra de candidatos (dados decodificados +
        vetores de features já padronizados) para o KNN rodar no navegador.

    O vetor padronizado é gerado aplicando SOMENTE o passo 'pre' do pipeline
    (ColumnTransformer) — o scaler não faz parte do ColumnTransformer aqui,
    então padronizamos manualmente com StandardScaler ajustado no treino,
    garantindo que o navegador replique exatamente a mesma transformação.
    """
    from sklearn.preprocessing import StandardScaler

    pre = pipeline.named_steps["pre"]
    nomes = pre.get_feature_names_out().tolist()

    # Base PROCESSADA completa (todos os presentes) — usada nos agregados
    # descritivos do dashboard; a base de TREINO fica restrita aos exames
    # completos (ver justificativa no ETL).
    df_processada = pd.read_csv(config.ARQ_BASE_PROCESSADA, sep=";",
                                encoding="utf-8", low_memory=False)

    # Padronizador dedicado ao dashboard (ajustado no treino → sem vazamento)
    Xt_treino = pre.transform(conjuntos["X_treino"])
    scaler_dash = StandardScaler().fit(Xt_treino)

    # ------------------- metricas_modelo.json -------------------
    config_final = {**melhor, "peso": config.PESO_FINAL}
    metricas_json = {
        "melhor_config": melhor,
        "config_final": config_final,
        "metricas_area": metricas["metricas_area"],
        "mae_global": metricas["mae_global"],
        "rmse_global": metricas["rmse_global"],
        "rotulos_areas": config.ROTULOS_AREAS,
        "ks_testados": config.KS_A_TESTAR,
    }
    with open(config.ARQ_METRICAS, "w", encoding="utf-8") as f:
        json.dump(metricas_json, f, ensure_ascii=False, indent=2)
    print(f"[export] {config.ARQ_METRICAS.name} salvo")

    # ------------------- dados_dashboard.json -------------------
    df = conjuntos["df_completo"]
    # Amostragem estratificada leve para diversidade de perfis
    amostra = (df.groupby(["TP_CERTIFICACAO", "SG_UF_PROVA"], group_keys=False)
                 .apply(lambda g: g.sample(min(len(g), max(2, config.N_AMOSTRA_DASHBOARD
                                                            // (2 * df["SG_UF_PROVA"].nunique()))),
                                          random_state=config.SEMENTE)))
    if len(amostra) > config.N_AMOSTRA_DASHBOARD:
        amostra = amostra.sample(config.N_AMOSTRA_DASHBOARD, random_state=config.SEMENTE)

    colunas_x = conjuntos["colunas_x"]
    X_amostra = amostra[colunas_x].copy()
    X_amostra["TP_FAIXA_ETARIA"] = X_amostra["TP_FAIXA_ETARIA"].astype(float)
    X_vec = scaler_dash.transform(pre.transform(X_amostra))

    aprov_cols = config.COLUNAS_APROVACAO
    registros = []
    for idx_row, (row_idx, linha) in enumerate(amostra.iterrows()):
        registros.append({
            "id": linha["NU_INSCRICAO"],
            "sexo": linha["TP_SEXO"],
            "faixa": int(linha["TP_FAIXA_ETARIA"]),
            "uf": linha["SG_UF_PROVA"],
            "cert": int(linha["TP_CERTIFICACAO"]),
            "trabalho": linha["situacao_trabalho"],
            "renda": linha["renda_familiar"],
            "escolaridade": linha["escolaridade_anterior"],
            "notas": {a: round(float(linha[a]), 1) for a in config.ALVOS},
            "aprov": {a: int(linha[a]) if pd.notna(linha[a]) else 0
                      for a in aprov_cols},
            "vec": [round(float(v), 4) for v in X_vec[idx_row]],
        })

    dados_json = {
        "gerado_em": time.strftime("%Y-%m-%d %H:%M:%S"),
        "origem": "sintético" if "SINTETICO" in str(config.usar_base_disponivel()) else "INEP oficial",
        "n_amostra": len(registros),
        "feature_names": nomes,
        "registros": registros,
        "agregados": gerar_agregados(df_processada),
    }
    with open(config.ARQ_DADOS_DASHBOARD, "w", encoding="utf-8") as f:
        json.dump(dados_json, f, ensure_ascii=False)
    print(f"[export] {config.ARQ_DADOS_DASHBOARD.name} salvo "
          f"({len(registros):,} amostras + agregados)")

    # Metadados do scaler também vão para o modelo serializado via joblib
    joblib.dump({
        "scaler_dashboard": scaler_dash,
        "preprocessador": pre,
        "nomes_features": nomes,
    }, ARQ_PRE_DASH)
    print(f"[export] {ARQ_PRE_DASH.name} salvo")


def gerar_agregados(df: pd.DataFrame) -> dict:
    """
    Pré-agrega estatísticas descritivas usadas pelos módulos 'Visão Geral' e
    'Análise Exploratória' do dashboard (evita processar milhares de linhas
    no navegador e garante números idênticos aos do pipeline Python).
    """
    areas_obj = ["NU_NOTA_LC", "NU_NOTA_CH", "NU_NOTA_MT", "NU_NOTA_CN"]

    # --- KPIs gerais (base = todos os presentes, não só exames completos) ---
    kpis = {
        "n_presentes": int(len(df)),
        "n_exames_completos": int(df["IN_EXAME_COMPLETO"].sum()),
        "pct_exames_completos": round(float(df["IN_EXAME_COMPLETO"].mean()) * 100, 1),
        "taxa_aprovacao": {a: round(float(df[a].mean()) * 100, 1)
                           for a in config.COLUNAS_APROVACAO},
        "media_notas": {a: round(float(df[a].mean()), 1) for a in config.ALVOS},
        "mediana_notas": {a: round(float(df[a].median()), 1) for a in config.ALVOS},
    }

    # --- Aprovação e notas por UF ---
    por_uf = (df.groupby("SG_UF_PROVA")
                .agg(n=("NU_INSCRICAO", "size"),
                     **{f"media_{a}": (a, "mean") for a in areas_obj},
                     **{f"aprov_{a}": (a.replace("NU_NOTA", "IN_APROVADO"), "mean")
                        for a in areas_obj})
                .round(4).reset_index().to_dict(orient="records"))

    # --- Notas médias por faixa de renda (ordem ordinal preservada) ---
    ordem_renda = list(config.MAP_RENDA.values())
    por_renda = (df.groupby("renda_familiar")
                   .agg(n=("NU_INSCRICAO", "size"),
                        **{f"media_{a}": (a, "mean") for a in areas_obj},
                        media_redacao=("NU_NOTA_REDACAO", "mean"),
                        taxa_aprovacao=("n_aprovacoes", lambda s: (s >= 3).mean()))
                   .reindex(ordem_renda).dropna().round(4).reset_index()
                   .to_dict(orient="records"))

    # --- Aprovação e contagem por grupo etário ---
    ordem_etaria = ["Até 24 anos", "25 a 29 anos", "30 a 39 anos",
                    "40 a 49 anos", "50 a 59 anos", "60 anos ou mais"]
    por_idade = (df.groupby("grupo_etario")
                   .agg(n=("NU_INSCRICAO", "size"),
                        media_geral=("nota_media_objetivas", "mean"),
                        taxa_aprovacao=("n_aprovacoes", lambda s: (s >= 3).mean()))
                   .reindex(ordem_etaria).dropna().round(4).reset_index()
                   .to_dict(orient="records"))

    # --- Efeito do trabalho ---
    ordem_trabalho = list(config.MAP_TRABALHO.values())
    por_trabalho = (df.groupby("situacao_trabalho")
                      .agg(n=("NU_INSCRICAO", "size"),
                           media_geral=("nota_media_objetivas", "mean"),
                           taxa_aprovacao=("n_aprovacoes", lambda s: (s >= 3).mean()))
                      .reindex(ordem_trabalho).dropna().round(4).reset_index()
                      .to_dict(orient="records"))

    # --- Médias por região × área (heatmap) ---
    por_regiao = (df.groupby("regiao")
                    .agg(**{a: (a, "mean") for a in areas_obj},
                         media_redacao=("NU_NOTA_REDACAO", "mean"))
                    .round(2).reset_index().to_dict(orient="records"))

    # --- Distribuição de notas (histograma, bins de 10) ---
    histogramas = {}
    for a in areas_obj + ["NU_NOTA_REDACAO"]:
        serie = df[a].dropna()
        step = 5 if a == "NU_NOTA_REDACAO" else 10
        bins = np.arange(0, (185 if step == 10 else 10.5), step)
        hist, edges = np.histogram(serie, bins=bins)
        histogramas[a] = {"edges": [round(float(e), 1) for e in edges],
                          "counts": [int(c) for c in hist]}

    return {
        "kpis": kpis,
        "por_uf": por_uf,
        "por_renda": por_renda,
        "por_idade": por_idade,
        "por_trabalho": por_trabalho,
        "por_regiao": por_regiao,
        "histogramas": histogramas,
        "ordem_renda": ordem_renda,
        "ordem_trabalho": ordem_trabalho,
        "ordem_etaria": ordem_etaria,
    }


# -----------------------------------------------------------------------------
# 5. PIPELINE PRINCIPAL
# -----------------------------------------------------------------------------

def executar_treino() -> Pipeline:
    """Orquestra busca → treino → avaliação → classificador → serialização."""
    print("[treino] Preparando conjuntos de treino/teste...")
    conjuntos = prep.preparar_conjuntos()

    print("\n[treino] Buscando melhor configuração (validação cruzada)...")
    melhor, historico = buscar_melhor_configuracao(conjuntos["X_treino"],
                                                   conjuntos["y_treino"])

    print("\n[treino] Treinando modelo final e avaliando no teste...")
    pipeline, metricas = treinar_e_avaliar(melhor, conjuntos)

    print("\n[treino] Treinando classificador auxiliar de aprovação...")
    clf, metricas_clf = treinar_classificador_aprovacao(conjuntos, melhor)

    # ---------------- Serialização ----------------
    config.MODEL_DIR.mkdir(exist_ok=True, parents=True)
    config.EXPORT_DIR.mkdir(exist_ok=True, parents=True)

    # Conjunto de TREINO na mesma ordem usada no fit — INDISPENSÁVEL para as
    # interfaces: os índices retornados por kneighbors() são POSIÇÕES (0..n-1)
    # na matriz de treino, e esta tabela mapeia cada posição de volta ao
    # candidato real (perfil, notas, aprovações).
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
        "mae_global": metricas["mae_global"],
        "rmse_global": metricas["rmse_global"],
        "df_treino": df_treino,
    }, config.ARQ_MODELO)
    print(f"\n[treino] Modelo serializado: {config.ARQ_MODELO}")

    metadados = {
        **metricas, **metricas_clf,
        "melhor_config": melhor,
        "config_final": {**melhor, "peso": config.PESO_FINAL},
        "historico_busca": sorted(historico, key=lambda h: h["rmse_cv"]),
        "n_treino": int(len(conjuntos["X_treino"])),
        "n_teste": int(len(conjuntos["X_teste"])),
    }
    with open(config.ARQ_METADADOS, "w", encoding="utf-8") as f:
        json.dump(metadados, f, ensure_ascii=False, indent=2)
    print(f"[treino] Metadados salvos: {config.ARQ_METADADOS}")

    exportar_dashboard(pipeline, conjuntos, melhor, metricas)
    return pipeline


if __name__ == "__main__":
    executar_treino()
