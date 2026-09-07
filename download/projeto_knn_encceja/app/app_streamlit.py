# -*- coding: utf-8 -*-
"""
=============================================================================
INTERFACE STREAMLIT — SISTEMA DE APOIO À DECISÃO ENCCEJA (Etapa 4)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

COMO RODAR (na raiz do projeto):
    streamlit run app/app_streamlit.py

O QUE A INTERFACE OFERECE (requisitos do enunciado):
    1. Formulário de entrada com o perfil do candidato (sexo, faixa etária,
       UF, certificação, situação de trabalho, renda, escolaridade) + seletor
       de k;
    2. Notas previstas nas 4 áreas objetivas + redação;
    3. Tabela dos k vizinhos mais próximos (perfil resumido + notas reais +
       status de aprovação);
    4. Gráfico de barras comparando previsto × média dos vizinhos × corte de
       aprovação, e radar comparativo;
    5. RECOMENDAÇÃO GERENCIAL automática (motor de regras em src/recomendacoes.py)
       em linguagem de gestão, com os números que a justificam;
    6. Aba de exploração da base histórica (gráficos que enriquecem a
       análise: notas por UF, renda × nota, aprovação por faixa etária).

ARQUITETURA: o modelo (Pipeline sklearn com pré-processamento embutido) é
carregado uma única vez via st.cache_resource — codificação e normalização
são reaplicadas automaticamente pelo pipeline a cada novo perfil.
=============================================================================
"""

import json

import numpy as np
import pandas as pd
import joblib
import streamlit as st
import plotly.graph_objects as go
import plotly.express as px

import sys
from pathlib import Path

# Permite importar config/módulos do diretório src/ a partir de app/
sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))
import config  # noqa: E402
from recomendacoes import gerar_recomendacao  # noqa: E402

# -----------------------------------------------------------------------------
# Configuração da página
# -----------------------------------------------------------------------------
st.set_page_config(
    page_title="SAD ENCCEJA — Apoio à Decisão com K-NN",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="expanded",
)

ROTULOS = config.ROTULOS_AREAS
CORES_AREAS = {
    "NU_NOTA_LC": "#10b981", "NU_NOTA_MT": "#f59e0b",
    "NU_NOTA_CN": "#14b8a6", "NU_NOTA_CH": "#8b5cf6",
    "NU_NOTA_REDACAO": "#f43f5e",
}


# -----------------------------------------------------------------------------
# Carregamento de artefatos (com cache — roda uma única vez por sessão)
# -----------------------------------------------------------------------------

@st.cache_resource(show_spinner="Carregando modelo treinado...")
def carregar_modelo():
    return joblib.load(config.ARQ_MODELO)


@st.cache_resource(show_spinner="Carregando base histórica...")
def carregar_base() -> pd.DataFrame:
    df = pd.read_csv(config.ARQ_BASE_PROCESSADA, sep=";", encoding="utf-8",
                     low_memory=False)
    return df


@st.cache_data(show_spinner="Carregando métricas do modelo...")
def carregar_metricas() -> dict:
    with open(config.ARQ_METADADOS, encoding="utf-8") as f:
        return json.load(f)


# -----------------------------------------------------------------------------
# Cabeçalho
# -----------------------------------------------------------------------------

st.markdown(
    """
    <div style="padding:1.2rem 1.5rem; border-radius:12px;
                background:linear-gradient(135deg,#064e3b 0%,#0f766e 100%);">
      <h1 style="color:#ffffff; margin:0; font-size:1.7rem;">🎓 SAD ENCCEJA</h1>
      <p style="color:#d1fae5; margin:0.3rem 0 0 0;">
        Sistema de Apoio à Decisão para cursinhos preparatórios —
        previsão de desempenho com <b>K-Nearest Neighbors</b> sobre microdados INEP 2024
      </p>
    </div>
    """,
    unsafe_allow_html=True,
)

st.markdown("")

aba_simulador, aba_explorar, aba_modelo = st.tabs(
    ["🧭 Simulador de Matrícula", "📊 Base Histórica", "🤖 Modelo & Métricas"]
)

# =============================================================================
# ABA 1 — SIMULADOR
# =============================================================================
with aba_simulador:

    col_form, col_result = st.columns([0.38, 0.62], gap="large")

    # ------------------------------------------------------------------
    # FORMULÁRIO
    # ------------------------------------------------------------------
    with col_form:
        st.subheader("Perfil do novo candidato")
        st.caption("Preencha o perfil socioeconômico coletado na matrícula. "
                   "O sistema encontra os candidatos mais semelhantes da base "
                   "INEP e estima o desempenho esperado.")

        with st.form("form_candidato", border=True):
            sexo = st.radio("Sexo", ["F", "M"],
                            format_func=lambda s: "Feminino" if s == "F" else "Masculino",
                            horizontal=True)

            faixas_ordenadas = list(config.MAP_FAIXA_ETARIA.values())
            faixa_sel = st.selectbox("Faixa etária", faixas_ordenadas,
                                     index=9)  # 26 a 30 anos (núcleo do público)

            uf_sel = st.selectbox("Unidade da Federação da prova", config.UFS,
                                  index=config.UFS.index("SP"))

            cert_sel = st.radio("Certificação pretendida",
                                list(config.MAP_CERTIFICACAO.values()),
                                horizontal=True)

            trabalho_sel = st.selectbox("Situação de trabalho",
                                        list(config.MAP_TRABALHO.values()),
                                        index=4)  # 40h+ (perfil mais comum)

            renda_sel = st.selectbox("Renda familiar",
                                     list(config.MAP_RENDA.values()),
                                     index=2)  # 1 a 2 SM

            esc_sel = st.selectbox("Escolaridade anterior",
                                   list(config.MAP_ESCOLARIDADE.values()),
                                   index=1)  # Fundamental incompleto

            k_sel = st.slider("k — número de vizinhos consultados", 3, 21,
                              int(carregar_modelo()["melhor_config"]["k"]),
                              step=2)

            enviar = st.form_submit_button("🔎 Prever desempenho", use_container_width=True,
                                           type="primary")

    # ------------------------------------------------------------------
    # RESULTADO
    # ------------------------------------------------------------------
    with col_result:
        if not enviar:
            st.info("👈 Preencha o formulário e clique em **Prever desempenho** "
                    "para simular a matrícula de um candidato.")
        else:
            modelo = carregar_modelo()
            pipeline = modelo["pipeline_regressor"]

            # Traduz seleções de volta para os códigos/valores esperados
            faixa_codigo = {v: k for k, v in config.MAP_FAIXA_ETARIA.items()}[faixa_sel]
            cert_codigo = {v: k for k, v in config.MAP_CERTIFICACAO.items()}[cert_sel]

            candidato = pd.DataFrame([{
                "renda_familiar": renda_sel,
                "escolaridade_anterior": esc_sel,
                "situacao_trabalho": trabalho_sel,
                "TP_SEXO": sexo,
                "SG_UF_PROVA": uf_sel,
                "certificacao": cert_sel,
                "TP_FAIXA_ETARIA": float(faixa_codigo),
            }])

            # --- Previsão (pipeline aplica encoding + scaler automaticamente) ---
            k_modelo = pipeline.named_steps["modelo"]
            k_original = k_modelo.n_neighbors
            k_modelo.n_neighbors = k_sel          # ajusta k consultado
            notas_prev = pipeline.predict(candidato)[0]
            # ATENÇÃO: kneighbors espera o vetor JÁ transformado — aplicamos
            # manualmente o passo de pré-processamento do pipeline.
            X_candidato = pipeline.named_steps["pre"].transform(candidato)
            dist, idx = k_modelo.kneighbors(X_candidato, n_neighbors=k_sel)
            k_modelo.n_neighbors = k_original     # restaura

            # --- Vizinhos reais correspondentes ---
            # IMPORTANTE: kneighbors retorna POSIÇÕES na matriz de treino;
            # o df_treino serializado mapeia cada posição ao candidato real.
            df_treino = modelo["df_treino"]
            vizinhos_df = df_treino.iloc[idx[0]][
                modelo["colunas_x"] + config.ALVOS + config.COLUNAS_APROVACAO
            ].copy()
            vizinhos_df["distancia"] = dist[0]

            notas_previstas = {a: float(n) for a, n in zip(config.ALVOS, notas_prev)}
            notas_vizinhos = [
                {
                    "notas": {a: float(vizinho[a]) for a in config.ALVOS},
                    "aprov": {a: int(vizinho[a]) for a in config.COLUNAS_APROVACAO},
                }
                for _, vizinho in vizinhos_df.iterrows()
            ]

            # ==================================================================
            # NOTAS PREVISTAS (cards)
            # ==================================================================
            st.subheader("Desempenho previsto")
            cols = st.columns(5)
            for i, (alvo, rotulo) in enumerate(ROTULOS.items()):
                nota = notas_previstas[alvo]
                corte = (config.NOTA_CORTE_REDACAO if alvo == "NU_NOTA_REDACAO"
                         else config.NOTA_CORTE_OBJETIVA)
                aprovado = nota >= corte
                with cols[i]:
                    st.markdown(
                        f"""
                        <div style="border:1px solid {'#10b981' if aprovado else '#f59e0b'};
                                    border-radius:10px; padding:0.8rem 0.6rem; text-align:center;">
                          <div style="font-size:0.72rem; color:#64748b;">{rotulo}</div>
                          <div style="font-size:1.45rem; font-weight:700;
                                      color:{'#059669' if aprovado else '#b45309'};">
                            {nota:.0f}
                          </div>
                          <div style="font-size:0.66rem; color:#94a3b8;">
                            corte {corte:.0f} {'✅ acima' if aprovado else '⚠ abaixo'}
                          </div>
                        </div>
                        """,
                        unsafe_allow_html=True,
                    )

            # ==================================================================
            # GRÁFICO COMPARATIVO (barras: previsto × média vizinhos × corte)
            # ==================================================================
            media_viz = {a: float(np.mean([nv["notas"][a] for nv in notas_vizinhos]))
                         for a in ROTULOS}

            fig = go.Figure()
            fig.add_trace(go.Bar(
                x=list(ROTULOS.values()), y=[notas_previstas[a] for a in ROTULOS],
                name="Previsto (candidato)", marker_color="#10b981"))
            fig.add_trace(go.Bar(
                x=list(ROTULOS.values()), y=[media_viz[a] for a in ROTULOS],
                name="Média dos vizinhos", marker_color="#94a3b8"))
            fig.add_hline(y=config.NOTA_CORTE_OBJETIVA, line_dash="dash",
                          line_color="#ef4444",
                          annotation_text="Corte de aprovação (100)",
                          annotation_position="top right")
            fig.update_layout(
                barmode="group", height=340,
                title="Previsto × média dos vizinhos × corte de aprovação",
                yaxis_title="Nota (0–180)", legend=dict(orientation="h",
                                                        y=-0.25),
                margin=dict(t=50, b=10),
            )
            st.plotly_chart(fig, use_container_width=True)

            # ==================================================================
            # RECOMENDAÇÃO GERENCIAL
            # ==================================================================
            parecer = gerar_recomendacao(notas_previstas, notas_vizinhos)

            st.markdown("#### 🧑‍💼 Recomendação ao gestor")
            cor_parecer = {"ALTO": "#fef2f2", "MODERADO": "#fffbeb",
                           "BAIXO": "#f0fdf4"}[parecer["nivel"]]
            borda_parecer = {"ALTO": "#dc2626", "MODERADO": "#d97706",
                             "BAIXO": "#16a34a"}[parecer["nivel"]]
            st.markdown(
                f"""
                <div style="background:{cor_parecer}; border-left:6px solid {borda_parecer};
                            border-radius:8px; padding:1rem 1.2rem;">
                  <div style="font-weight:700; color:{borda_parecer}; font-size:1.02rem;">
                    RISCO {parecer["nivel"]} — {parecer["titulo"]}
                  </div>
                  <p style="margin:0.5rem 0 0.3rem 0; color:#334155;">{parecer["resumo"]}</p>
                  <p style="margin:0.2rem 0; color:#475569; font-size:0.86rem;">
                    <b>Justificativa:</b> {parecer["justificativa"]}
                  </p>
                </div>
                """,
                unsafe_allow_html=True,
            )
            st.markdown("**Plano de ação sugerido:**")
            for acao in parecer["acoes"]:
                st.markdown(f"- {acao}")

            # ==================================================================
            # VIZINHOS MAIS PRÓXIMOS (tabela)
            # ==================================================================
            st.markdown(f"#### 👥 {k_sel} vizinhos mais próximos do perfil")
            st.caption("Candidatos reais da base histórica com perfil socioeconômico "
                       "mais semelhante — notas reais e aprovação efetiva.")
            tab_viz = vizinhos_df.copy()
            tab_viz["Sexo"] = tab_viz["TP_SEXO"].map({"F": "Fem.", "M": "Masc."})
            tab_viz["UF"] = tab_viz["SG_UF_PROVA"]
            tab_viz["Idade"] = tab_viz["TP_FAIXA_ETARIA"].map(config.MAP_FAIXA_ETARIA)
            tab_viz["Renda"] = tab_viz["renda_familiar"]
            tab_viz["Trabalho"] = tab_viz["situacao_trabalho"]
            for alvo, rotulo in ROTULOS.items():
                tab_viz[rotulo] = tab_viz[alvo].round(1)
            tab_viz["Aprovações (4 áreas)"] = (
                tab_viz[config.COLUNAS_APROVACAO].fillna(0).sum(axis=1).astype(int)
            )
            tab_viz["Certif. provável"] = np.where(
                tab_viz["Aprovações (4 áreas)"] >= 3, "✅ Sim", "❌ Não")
            tab_viz["Distância"] = tab_viz["distancia"].round(3)

            colunas_exibir = (["Sexo", "Idade", "UF", "Renda", "Trabalho"]
                              + list(ROTULOS.values())
                              + ["Aprovações (4 áreas)", "Certif. provável", "Distância"])
            st.dataframe(tab_viz[colunas_exibir], use_container_width=True,
                         height=320, hide_index=True)

            with st.expander("🔬 Radar comparativo — candidato × média dos vizinhos"):
                fig_radar = go.Figure()
                fig_radar.add_trace(go.Scatterpolar(
                    r=[notas_previstas[a] for a in ROTULOS] + [notas_previstas["NU_NOTA_LC"]],
                    theta=list(ROTULOS.values()) + [ROTULOS["NU_NOTA_LC"]],
                    fill="toself", name="Previsto", line_color="#10b981"))
                fig_radar.add_trace(go.Scatterpolar(
                    r=[media_viz[a] for a in ROTULOS] + [media_viz["NU_NOTA_LC"]],
                    theta=list(ROTULOS.values()) + [ROTULOS["NU_NOTA_LC"]],
                    fill="toself", name="Média vizinhos", line_color="#64748b",
                    fillcolor="rgba(100,116,139,0.15)"))
                fig_radar.update_layout(height=380, showlegend=True,
                                        polar=dict(radialaxis=dict(range=[0, 180])))
                st.plotly_chart(fig_radar, use_container_width=True)

# =============================================================================
# ABA 2 — BASE HISTÓRICA (exploração)
# =============================================================================
with aba_explorar:
    st.subheader("Base histórica — Microdados ENCCEJA 2024")
    df = carregar_base()
    metricas_modelo = carregar_metricas()

    k1, k2, k3, k4 = st.columns(4)
    k1.metric("Candidatos presentes", f"{len(df):,}")
    k2.metric("Exames completos", f"{int(df['IN_EXAME_COMPLETO'].sum()):,}")
    k3.metric("Aprovação média (4 áreas)",
              f"{np.mean([df[a].mean() for a in config.COLUNAS_APROVACAO]):.1%}")
    k4.metric("MAE global do modelo", f"{metricas_modelo['mae_global']:.1f} pts")

    g1, g2 = st.columns(2)

    with g1:
        st.markdown("**Aprovação por faixa etária** (≥3 áreas)")
        por_idade = (df.groupby("grupo_etario")["n_aprovacoes"]
                       .apply(lambda s: (s >= 3).mean()).reset_index())
        fig_idade = px.bar(por_idade, x="grupo_etario", y="n_aprovacoes",
                           labels={"grupo_etario": "Faixa etária",
                                   "n_aprovacoes": "Taxa de aprovação"},
                           color="n_aprovacoes", color_continuous_scale="Teal")
        fig_idade.update_layout(height=330, showlegend=False,
                                coloraxis_showscale=False)
        st.plotly_chart(fig_idade, use_container_width=True)

    with g2:
        st.markdown("**Nota média por renda familiar**")
        ordem_renda = list(config.MAP_RENDA.values())
        por_renda = (df.groupby("renda_familiar")["nota_media_objetivas"]
                       .mean().reindex(ordem_renda).dropna().reset_index())
        fig_renda = px.bar(por_renda, x="renda_familiar", y="nota_media_objetivas",
                           labels={"renda_familiar": "Renda familiar",
                                   "nota_media_objetivas": "Nota média (objetivas)"},
                           color="nota_media_objetivas", color_continuous_scale="Viridis")
        fig_renda.update_layout(height=330, showlegend=False,
                                coloraxis_showscale=False)
        fig_renda.update_xaxes(tickangle=20)
        st.plotly_chart(fig_renda, use_container_width=True)

    g3, g4 = st.columns(2)

    with g3:
        st.markdown("**Distribuição das notas — Linguagens**")
        fig_hist = px.histogram(df.dropna(subset=["NU_NOTA_LC"]), x="NU_NOTA_LC",
                                nbins=36, color_discrete_sequence=["#14b8a6"])
        fig_hist.add_vline(x=config.NOTA_CORTE_OBJETIVA, line_dash="dash",
                           line_color="#ef4444")
        fig_hist.update_layout(height=330,
                               xaxis_title="Nota", yaxis_title="Candidatos",
                               showlegend=False)
        st.plotly_chart(fig_hist, use_container_width=True)

    with g4:
        st.markdown("**Top 10 UFs por nota média (objetivas)**")
        por_uf = (df.groupby("SG_UF_PROVA")["nota_media_objetivas"].mean()
                    .sort_values(ascending=False).head(10).reset_index())
        fig_uf = px.bar(por_uf, x="SG_UF_PROVA", y="nota_media_objetivas",
                        color="nota_media_objetivas", color_continuous_scale="Teal",
                        labels={"SG_UF_PROVA": "UF",
                                "nota_media_objetivas": "Nota média"})
        fig_uf.update_layout(height=330, showlegend=False, coloraxis_showscale=False)
        st.plotly_chart(fig_uf, use_container_width=True)

    st.caption("💡 Estes padrões (efeito de renda, gradiente regional e etário) "
               "justificam o uso do perfil socioeconômico como variável "
               "explicativa do K-NN.")

# =============================================================================
# ABA 3 — MODELO & MÉTRICAS
# =============================================================================
with aba_modelo:
    st.subheader("Modelo K-NN — configuração e desempenho")
    m = carregar_metricas()
    cfg = m["melhor_config"]

    m1, m2, m3, m4 = st.columns(4)
    m1.metric("k escolhido (CV)", cfg["k"])
    m2.metric("Peso do modelo final", m.get("config_final", {}).get("peso", cfg["peso"]))
    m3.metric("Distância", cfg["metrica"])
    m4.metric("MAE global (teste)", f"{m['mae_global']:.1f} pts")

    st.caption(
        "ℹ️ A busca por CV elegeu pesos 'uniform' (RMSE mínimo), mas o modelo "
        "final adota 'distance' por decisão de negócio: com 'uniform' a previsão "
        "coincide com a média simples dos vizinhos, esvaziando a comparação "
        "gerencial. A perda de RMSE é documentada no README."
    )

    st.markdown(
        f"""
        **Amostra de treino:** {m['n_treino']:,} exames completos ·
        **Teste:** {m['n_teste']:,} · Estratificação por certificação ·
        Acurácia do classificador auxiliar (aprovado ≥3/4 áreas): **{m.get('acuracia_aprovacao', 0):.1%}**
        """
    )

    st.markdown("**Métricas por área (conjunto de teste):**")
    tab_metricas = pd.DataFrame(m["metricas_area"]).T.reset_index()
    tab_metricas.columns = ["Área", "MAE", "RMSE"]
    tab_metricas["Área"] = tab_metricas["Área"].map(ROTULOS)
    st.dataframe(tab_metricas, use_container_width=True, hide_index=True)

    st.markdown("**Historórico da busca de hiperparâmetros (RMSE por k):**")
    hist = pd.DataFrame(m["historico_busca"])
    fig_k = px.line(hist.groupby("k")["rmse_cv"].mean().reset_index(),
                    x="k", y="rmse_cv", markers=True,
                    labels={"k": "k (nº de vizinhos)", "rmse_cv": "RMSE médio (CV 5 folds)"},
                    color_discrete_sequence=["#0d9488"])
    fig_k.update_layout(height=320, showlegend=False)
    st.plotly_chart(fig_k, use_container_width=True)

    st.info(
        "**Como o K-NN decide:** para o novo candidato, o modelo calcula a "
        "distância do perfil dele a todos os perfis históricos (após "
        "padronização Z-score), seleciona os k mais próximos e estima cada "
        "nota como a média (ponderada) das notas reais desses vizinhos. "
        "A recomendação gerencial é aplicada sobre essa saída pelas regras "
        "de negócio do motor de recomendações."
    )
    st.caption("Limitações: correlação ≠ causalidade; base de uma única edição "
               "do exame; possíveis vieses regionais e socioeconômicos dos "
               "microdados; previsões são estimativas probabilísticas, não "
               "garantias individuais.")

st.markdown("---")
st.caption("Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão · Dados: INEP "
           "Microdados ENCCEJA 2024 · Modelo: K-NN (scikit-learn) · "
           "Dashboard web complementar: Next.js")
