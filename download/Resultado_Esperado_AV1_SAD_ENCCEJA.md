# RESULTADO ESPERADO — AV1 de Sistemas de Apoio à Tomada de Decisão
## SAD ENCCEJA com K-NN (microdados INEP 2024)

> **Finalidade deste documento:** descrever, de forma verificável, o resultado esperado
> em cada etapa do projeto — critérios de pontuação da disciplina, execução do pipeline
> Python, métricas do modelo, interfaces e recomendações ao gestor. Todos os números
> abaixo foram extraídos dos artefatos reais entregues
> (`export/metricas_modelo.json`, `modelos/metadados_modelo.json`,
> `export/dados_dashboard.json`), e não de valores simulados.

---

## 1. Critérios de pontuação da AV1 → status da entrega

| Entregável (enunciado) | Pontos | Onde está no projeto | Status |
|---|---|---|---|
| Script documentado (dados, ETL, algoritmo, justificativas) — GitHub | 2,0 | `projeto_knn_encceja/` com 10 módulos em `src/` + `README.md` acadêmico (12 seções) com justificativas de negócio | ✅ Atendido |
| Interface funcional com recomendações ao gestor | 2,0 | Dashboard Next.js (5 abas) + Streamlit (3 abas), motor de recomendações em 3 níveis de risco | ✅ Atendido |
| Vídeo demonstrando implementação, interface e execução | 1,0 | Roteiro completo pronto para gravação (`Roteiro_Video_AV1_SAD_ENCCEJA.pdf` / `.docx`, ~6:30, 6 cenas) | ✅ Roteiro pronto — gravar e enviar |
| **Total** | **5,0** | Enviar (GitHub + interface + vídeo) para **lina@ls4business.com.br** | — |

---

## 2. Resultado esperado: base de dados sintética

O projeto gera uma base sintética com o **mesmo schema** dos microdados do INEP
(separador `;`, encoding `latin-1`), para tornar o trabalho reproduzível sem depender
do download oficial. Ao executar `src/gerar_dados_sinteticos.py`, o resultado esperado é:

| Indicador | Valor esperado |
|---|---|
| Candidatos gerados | **60.000** |
| Presentes no exame | **46.171** (ausência modelada como "tudo ou quase tudo") |
| Exames completos (5 áreas) | **36.059** — **78,1%** dos presentes |
| Taxa de aprovação por área | LC **37,7%** · CH **38,3%** · MT **38,2%** · CN **38,1%** |
| Média das notas (0–200) | LC 92,1 · CH 92,4 · CN 92,2 · MT 92,4 · Redação 5,2 (0–10) |

**Interpretação esperada:** aprovação em torno de **38%** e notas médias próximas de
**92/200**, coerentes com um exame de conclusão de ensino médio para jovens e adultos —
a maioria dos candidatos fica abaixo da média de corte de **100 pontos**.

Variáveis utilizadas (mapeadas do dicionário INEP): renda familiar (`Q005`),
escolaridade anterior (`Q006`/`Q007`), situação de trabalho (`Q004`/`Q008`/`Q009`),
sexo (`TP_SEXO`), faixa etária (`NU_IDADE`), UF (`SG_UF`) e região derivada.

---

## 3. Resultado esperado: execução do pipeline Python

Ordem de execução e o que cada etapa deve produzir:

| # | Comando | Resultado esperado |
|---|---|---|
| 1 | `python src/gerar_dados_sinteticos.py` | `data/MICRODADOS_ENCCEJA_2024_REG_NAC_SINTETICO.csv` (60.000 linhas, formato INEP) |
| 2 | `python src/etl_preparacao.py` | Filtragem de presença, decodificação Q0x, variáveis derivadas → `data/base_processada.csv` |
| 3 | `python src/preparacao_features.py` | ColumnTransformer (ordinal + one-hot + faixa numérica), split 80/20 estratificado |
| 4 | `python src/treino_knn.py` | Busca de hiperparâmetros + modelo final → `modelos/modelo_knn.joblib` + JSONs em `export/` |
| 5 | `streamlit run app/app_streamlit.py` | Interface na porta 8501 (3 abas) |

> **Observação importante:** o modelo **já vem treinado** no pacote
> (`modelos/modelo_knn.joblib`, ~20 MB). As etapas 1–4 são opcionais para reprodução;
> basta instalar as dependências (`pip install -r requirements.txt`) e executar a etapa 5.

---

## 4. Resultado esperado: busca de hiperparâmetros e modelo final

Configuração da busca: **7 valores de k** (3, 5, 7, 9, 11, 15, 21) × **2 pesos**
(uniform, distance) × **2 métricas** (Manhattan, Euclidean) = **28 configurações**,
validadas por **validação cruzada 5-fold** (RMSE médio).

| Item | Resultado esperado |
|---|---|
| Melhor configuração na busca (CV) | **k=21 · uniform · Manhattan** → RMSE CV **19,3254** |
| Configuração final adotada | **k=21 · distance · Manhattan** |
| Justificativa da mudança de peso | `distance` pondera vizinhos próximos — decisão de negócio para recomendações individuais (doc. no README) |
| Split final | treino **28.847** · teste **7.212** (80/20 estratificado) |

### Métricas finais no conjunto de teste (valores exatos)

| Métrica | Valor |
|---|---|
| **MAE global** (regressão de notas) | **16,72 pontos** |
| **RMSE global** | **21,09 pontos** |
| **Acurácia da classificação de aprovação** | **71,45%** |

MAE por área (pontos, escala 0–200): CN 20,30 · CH 20,26 · LC 20,62 · MT 20,59 ·
Redação 1,84 (escala 0–10). O MAE global (16,72) fica abaixo do MAE por área porque
inclui a Redação, que tem escala menor e erro absoluto pequeno.

**Leitura esperada:** errar a nota prevista por ±16,7 pontos numa escala de 0–200
(≈ ±8%) é um resultado sólido para um modelo simples e interpretável como o K-NN —
o objetivo do SAD é **ranquear risco e orientar política pública**, não prever notas
com precisão individual.

---

## 5. Resultado esperado: dashboard Next.js (interface principal)

Ao executar `npm install` + `npm run dev` e abrir `http://localhost:3000`,
o resultado esperado é:

**5 abas funcionais** (o K-NN roda no próprio navegador, sem precisar do modelo Python):

1. **Visão Geral** — KPIs (46.171 presentes · 36.059 completos · 78,1% · aprovação ~38%),
   aprovação por área, histograma de notas e comparativo por região.
2. **Simulador K-NN** — formulário com 7 campos + slider de k (padrão **21**) e dois
   botões de exemplo pré-configurados:
   - **"Exemplo: alto risco"** → notas previstas na faixa **76–81** (vermelho),
     parecer **"Alto risco de reprovação"** (verificado em navegador).
   - **"Exemplo: favorável"** → notas previstas na faixa **104–111** (verde), nível BAIXO.
   - Tabela dos **21 vizinhos** retornados com perfil, notas e distância Manhattan.
3. **Recomendação** — parecer gerencial completo para o perfil simulado.
4. **Análise Exploratória** — renda × nota, idade, trabalho, top/bottom UFs, heatmap regional.
5. **Modelo & Métricas** — curva de k, comparação de pesos, métricas por área,
   explicação do algoritmo e limitações.

**Comportamento esperado do motor de recomendação** (nota de corte 100/200):

| Nível | Critério esperado | Sinal |
|---|---|---|
| 🔴 **ALTO** | Média prevista bem abaixo de 100 e poucos vizinhos aprovados | Taxa de aprovação dos vizinhos ~0% |
| 🟡 **MODERADO** | Próximo do corte, cenário incerto | Taxa intermediária (~33%) |
| 🟢 **BAIXO** | Média prevista acima de 100 com maioria de vizinhos aprovados | Taxa alta (~76%) |

---

## 6. Resultado esperado: interface Streamlit (validação pelo modelo Python)

Ao executar `streamlit run app/app_streamlit.py` (porta 8501), o resultado esperado é:

- **Aba Simulador** — mesmo perfil de entrada, agora com o modelo `joblib` real:
  os vizinhos são buscados por `kneighbors` no conjunto de **treino** (28.847 registros),
  com pré-transformação idêntica à do treino.
- **Aba Base Histórica** — distribuições da base sintética.
- **Aba Modelo** — métricas idênticas às da Seção 4 (MAE 16,72 · RMSE 21,09 · 71,45%).
- Perfis de teste validados durante o desenvolvimento: ALTO (taxa de vizinhos aprovados
  ~0%), MODERADO (~33%) e BAIXO (~76%) — coerentes com o dashboard Next.js.

**Consistência esperada:** dashboard (TypeScript) e Streamlit (Python) devem produzir
recomendações do mesmo nível de risco para o mesmo perfil, pois replicam a mesma
codificação de features, padronização e distância Manhattan.

---

## 7. Resultado esperado: recomendações ao gestor (tom de decisão pública)

O SAD deve transformar a previsão em **ação de política educacional**:

- **ALTO risco** → priorizar convocation para turmas de reforço intensivo e reforço de
  Redação (maior poder discriminante do exame) antes da próxima edição.
- **MODERADO risco** → acompanhamento tutorado e simulados direcionados ao(s) ponto(s)
  fraco(s) identificado(s) pelos vizinhos mais próximos.
- **BAIXO risco** → manter trilha regular e focar na conclusão da inscrição/comparecimento
  (a ausência no dia do exame é o principal risco residual — modelada na base).

A justificativa técnica de cada recomendação aparece na aba **Recomendação**,
com os números do perfil (taxa de vizinhos aprovados, distância ao corte de 100 pontos).

---

## 8. Checklist final de conferência (antes de enviar ao professor)

- [ ] Projeto abre no VSCode e `streamlit run app/app_streamlit.py` sobe na porta 8501
- [ ] Dashboard Next.js: `npm install && npm run dev` → 5 abas sem erros no console
- [ ] Preset "Exemplo: alto risco" → notas 76–81 e parecer vermelho (ALTO)
- [ ] Preset "Exemplo: favorável" → notas 104–111 e parecer verde (BAIXO)
- [ ] Métricas na aba Modelo batem com este documento (MAE 16,72 · 71,45%)
- [ ] README.md revisado (justificativas de negócio + limitações)
- [ ] Vídeo gravado seguindo `Roteiro_Video_AV1_SAD_ENCCEJA.pdf` (~6:30, 6 cenas)
- [ ] Publicar no GitHub e enviar: link do repo + interface + vídeo → **lina@ls4business.com.br**

---

## 9. Inventário dos arquivos entregues

| Arquivo | Conteúdo |
|---|---|
| `projeto_knn_encceja.zip` (3,7 MB) | Projeto Python completo: 10 módulos `src/`, Streamlit, modelo treinado (20 MB), bases CSV, README acadêmico |
| `dashboard_encceja_nextjs.zip` (152 KB) | Dashboard Next.js standalone (5 abas), KNN em TypeScript no navegador |
| `AV1_SAD_ENCCEJA_PACOTE_COMPLETO.zip` (4,2 MB) | Tudo o que está acima + roteiro + guia, em um único download |
| `Roteiro_Video_AV1_SAD_ENCCEJA.pdf` (132 KB) | Roteiro melhorado do vídeo: 10 págs, capa, sumário, 6 cenas com fala completa, Q&A do avaliador |
| `Roteiro_Video_AV1_SAD_ENCCEJA.docx` (20 KB) | Versão editável do roteiro em tabela |
| `Guia_Execucao_VSCODE_SAD_ENCCEJA.pdf` (176 KB) | Guia visual de execução no VSCode (8 págs) |
| `LEIA-ME_PRIMEIRO.txt` | Instruções rápidas de execução dos dois projetos |

*Fontes dos números: `export/metricas_modelo.json` (métricas e histórico da busca),
`modelos/metadados_modelo.json` (split treino/teste), `export/dados_dashboard.json`
(KPIs da base, gerado em 2026-09-09). Documento gerado em 2026-09-27.*
