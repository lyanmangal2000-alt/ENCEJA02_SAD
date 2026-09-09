# -*- coding: utf-8 -*-
"""
=============================================================================
MOTOR DE RECOMENDAÇÕES GERENCIAIS (Etapa 5 — regra de negócio sobre o KNN)
=============================================================================
Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão

PRINCÍPIO DE DESIGN DO SAD:
    "Toda saída do sistema deve terminar em uma recomendação acionável para
    o gestor." A previsão numérica do K-NN NÃO é o produto final — é insumo.
    Este módulo converte números em DECISÃO PEDAGÓGICA em linguagem gerencial.

REGRAS DE NEGÓCIO (dois sinais ortogonais, combinados):

    SINAL 1 — PRONTIDÃO (absoluto): em quantas das 5 áreas a nota PREVISTA
    fica acima do corte oficial de aprovação (100 nas objetivas, 5 na
    redação)? Isso responde "o candidato tende a passar?".

    SINAL 2 — CONTEXTO DOS VIZINHOS (relativo): que fração dos k candidatos
    historicamente semelhantes conquistou aprovação em pelo menos 3 das 4
    áreas objetivas (certificação provável)? Isso responde "o que costuma
    acontecer com quem tem esse perfil?".

    MAPEAMENTO PARA AS REGRAS DO ENUNCIADO:
    1. ALTO RISCO (enunciado: "previsto inferior ao desempenho do grupo E
       maioria dos vizinhos não aprovada"):
       prontidão insuficiente (maioria das 5 áreas abaixo do corte) E taxa de
       aprovação dos vizinhos < 50% → reforço intensivo + acompanhamento
       individual, apontando as disciplinas mais críticas;
    2. ACOMPANHAMENTO PADRÃO (enunciado: "previsto no nível ou acima do grupo
       E maioria aprovada"):
       prontidão suficiente E taxa de aprovação dos vizinhos >= 50% →
       manutenção do ritmo;
    3. ATENÇÃO MODERADA: caso intermediário/misto → acompanhamento moderado
       com monitoramento periódico.

    NOTA DE IMPLEMENTAÇÃO (transparência): com pesos 'uniform', a previsão
    K-NN coincide exatamente com a média simples dos vizinhos — a comparação
    "previsto × média dos vizinhos" satura. Por isso o modelo final usa pesos
    'distance' (ver config.PESO_FINAL) e as regras combinam o sinal relativo
    (vizinhos) com o sinal absoluto (corte oficial), preservando a intenção
    gerencial da regra em toda a extensão da distribuição. A média dos
    vizinhos por área segue exibida como contexto comparativo na interface.

    Em todos os casos a justificativa cita os NÚMEROS que sustentam o parecer
    (requisito do enunciado) e as disciplinas críticas são identificadas
    comparando a previsão com o corte oficial e com a média dos vizinhos.
=============================================================================
"""

import config

# Tolerância (em pontos) para considerar a previsão "abaixo da média dos
# vizinhos" na identificação de disciplinas críticas — diferenças menores que
# isso são indistinguíveis do ruído do modelo (≈ 1/10 do desvio padrão).
TOLERANCIA_GAP_VIZINHOS = 2.0


# -----------------------------------------------------------------------------
# Helpers de comparação
# -----------------------------------------------------------------------------

def _media_vizinhos(notas_vizinhos: list[dict], alvo: str) -> float:
    valores = [v["notas"][alvo] for v in notas_vizinhos]
    return sum(valores) / len(valores)


def _taxa_aprovacao_vizinhos(notas_vizinhos: list[dict]) -> float:
    """
    Proporção de vizinhos com certificação provável (aprovado em >=3 das 4
    áreas objetivas). Alinha-se ao classificador auxiliar treinado no modelo.
    """
    aprovados = sum(
        1 for v in notas_vizinhos
        if sum(v["aprov"].values()) >= 3
    )
    return aprovados / len(notas_vizinhos)


def _contagem_cortes(notas_previstas: dict) -> tuple[int, int]:
    """
    Conta quantas áreas ficam abaixo do corte oficial.
    Retorna (n_abaixo, n_total) — n_total = 5 (4 objetivas + redação).
    """
    n_abaixo = 0
    for alvo in config.ROTULOS_AREAS:
        corte = (config.NOTA_CORTE_REDACAO if alvo == "NU_NOTA_REDACAO"
                 else config.NOTA_CORTE_OBJETIVA)
        if notas_previstas[alvo] < corte:
            n_abaixo += 1
    return n_abaixo, len(config.ROTULOS_AREAS)


def _disciplinas_criticas(notas_previstas: dict, media_areas: dict) -> list[dict]:
    """
    Identifica as disciplinas mais críticas do candidato, por dois critérios
    combinados (qualquer um marca a disciplina):
      a) previsão abaixo do corte oficial de aprovação (100 objetivas / 5 red.);
      b) previsão muito abaixo da média dos vizinhos semelhantes
         (gap <= -TOLERANCIA_GAP_VIZINHOS), indicando desempenho inferior
         até ao grupo comparável.
    """
    criticas = []
    for alvo, rotulo in config.ROTULOS_AREAS.items():
        nota = notas_previstas[alvo]
        media = media_areas[alvo]
        corte = (config.NOTA_CORTE_REDACAO if alvo == "NU_NOTA_REDACAO"
                 else config.NOTA_CORTE_OBJETIVA)
        abaixo_corte = nota < corte
        gap = nota - media
        if abaixo_corte or gap <= -TOLERANCIA_GAP_VIZINHOS:
            criticas.append({
                "area": alvo,
                "rotulo": rotulo,
                "nota_prevista": round(nota, 1),
                "media_vizinhos": round(media, 1),
                "gap_vizinhos": round(gap, 1),
                "abaixo_corte": abaixo_corte,
            })
    # Ordena pelas mais urgentes: primeiro abaixo do corte, depois maior gap
    criticas.sort(key=lambda c: (not c["abaixo_corte"], c["gap_vizinhos"]))
    return criticas


# -----------------------------------------------------------------------------
# Motor principal
# -----------------------------------------------------------------------------

def gerar_recomendacao(notas_previstas: dict, notas_vizinhos: list[dict]) -> dict:
    """
    Aplica as regras de negócio e monta o parecer gerencial completo.

    Parâmetros
    ----------
    notas_previstas : dict {coluna_nota: valor previsto}
    notas_vizinhos  : list de dicts [{"notas": {...}, "aprov": {...}, ...}]

    Retorno
    -------
    dict com: nivel, titulo, resumo, justificativa, disciplinas_criticas,
    acoes, indicadores (para exibição na interface).
    """
    media_areas = {a: _media_vizinhos(notas_vizinhos, a) for a in config.ROTULOS_AREAS}
    taxa_aprov = _taxa_aprovacao_vizinhos(notas_vizinhos)
    criticas = _disciplinas_criticas(notas_previstas, media_areas)
    n_abaixo_corte, n_total = _contagem_cortes(notas_previstas)

    # --- Sinais ---
    prontidao_insuficiente = n_abaixo_corte >= 3          # maioria das 5 áreas
    maioria_aprovada = taxa_aprov >= 0.5                  # 50%+ dos vizinhos

    # Áreas abaixo da média dos vizinhos (com tolerância) — sinal comparativo
    abaixo_media = [a for a in config.ROTULOS_AREAS
                    if notas_previstas[a] < media_areas[a] - TOLERANCIA_GAP_VIZINHOS]
    n_abaixo_media = len(abaixo_media)

    # =====================================================================
    # REGRA 1 — ALTO RISCO
    # =====================================================================
    if prontidao_insuficiente and not maioria_aprovada:
        nivel = "ALTO"
        titulo = "Alto risco de reprovação — reforço intensivo recomendado"
        resumo = (
            f"A nota prevista fica abaixo do corte de aprovação em "
            f"{n_abaixo_corte} das {n_total} áreas, e apenas {taxa_aprov:.0%} dos "
            f"vizinhos historicamente semelhantes conquistaram a certificação. "
            f"Sem intervenção, a probabilidade de reprovação é alta."
        )
        acoes = [
            "Matricular em turma de REFORÇO INTENSIVO desde o início do curso",
            "Designar tutor individual com acompanhamento semanal de desempenho",
            "Priorizar simulados diagnósticos quinzenais nas disciplinas críticas",
            "Reavaliar o plano de estudos após 4 semanas de reforço",
        ]

    # =====================================================================
    # REGRA 2 — ACOMPANHAMENTO PADRÃO
    # =====================================================================
    elif not prontidao_insuficiente and maioria_aprovada:
        nivel = "BAIXO"
        titulo = "Perfil favorável — acompanhamento padrão"
        resumo = (
            f"A nota prevista fica acima do corte de aprovação na maioria das áreas "
            f"(abaixo em apenas {n_abaixo_corte} de {n_total}), e {taxa_aprov:.0%} dos "
            f"vizinhos comparáveis obtiveram aprovação suficiente para certificação. "
            f"O histórico indica bom prognóstico."
        )
        acoes = [
            "Incluir em turma regular com acompanhamento padrão",
            "Manter ritmo de simulados e monitoria coletiva do cursinho",
            "Monitorar evolução nas avaliações internas mensais",
        ]

    # =====================================================================
    # REGRA 3 — CASO INTERMEDIÁRIO/MISTO
    # =====================================================================
    else:
        nivel = "MODERADO"
        titulo = "Caso intermediário — acompanhamento moderado com monitoramento"
        resumo = (
            f"O quadro é misto: a nota prevista fica abaixo do corte em "
            f"{n_abaixo_corte} de {n_total} áreas, enquanto {taxa_aprov:.0%} dos "
            f"vizinhos semelhantes foram aprovados. O perfil tem potencial de "
            f"aprovação com apoio pontual — não exige reforço intensivo, mas "
            f"não deve ficar sem atenção."
        )
        acoes = [
            "Incluir em turma regular com MONITORIA DEDICADA nas disciplinas críticas",
            "Agendar acompanhamento pedagógico quinzenal",
            "Aplicar simulado diagnóstico no primeiro mês para reclassificar o risco",
        ]

    # --- Justificativa com números (requisito do enunciado) ---
    corte_linguagem = "; ".join(
        (
            f"{c['rotulo']} prevista {c['nota_prevista']:.0f} "
            f"(corte 100; média dos vizinhos {c['media_vizinhos']:.0f})"
            if c["area"] != "NU_NOTA_REDACAO" else
            f"Redação prevista {c['nota_prevista']:.1f} (corte 5)"
        )
        for c in criticas
    ) if criticas else "nenhuma disciplina abaixo do corte de aprovação"

    comparativo_viz = (
        f"em {n_abaixo_media} de {n_total} áreas a previsão fica "
        f"visivelmente abaixo da média dos vizinhos"
        if n_abaixo_media else
        f"em nenhuma área a previsão fica muito abaixo da média dos vizinhos"
    )

    justificativa = (
        f"Prontidão: aprovado(a) em {n_total - n_abaixo_corte} das {n_total} áreas "
        f"pela previsão. Comparação com vizinhos: {comparativo_viz}. "
        f"Disciplinas que exigem atenção: {corte_linguagem}. "
        f"Aproximadamente {taxa_aprov:.0%} dos {len(notas_vizinhos)} vizinhos "
        f"mais próximos conquistaram aprovação em pelo menos 3 das 4 áreas objetivas."
    )

    # Ação específica extra quando existem disciplinas críticas
    if criticas:
        criticas_txt = ", ".join(c["rotulo"] for c in criticas[:3])
        acoes.insert(0, f"Priorizar reforço direcionado em: {criticas_txt}")

    return {
        "nivel": nivel,
        "titulo": titulo,
        "resumo": resumo,
        "justificativa": justificativa,
        "disciplinas_criticas": criticas,
        "acoes": acoes,
        "indicadores": {
            "media_vizinhos_por_area": {a: round(m, 1) for a, m in media_areas.items()},
            "taxa_aprovacao_vizinhos": round(taxa_aprov, 3),
            "n_areas_abaixo_corte": n_abaixo_corte,
            "n_areas_abaixo_media": n_abaixo_media,
        },
    }
