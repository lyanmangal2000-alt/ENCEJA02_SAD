# 🎓 SAD ENCCEJA — Sistema de Apoio à Decisão com K-Nearest Neighbors

> **Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão**
> Sistema que apoia gestores de cursinhos preparatórios para o ENCCEJA na
> decisão pedagógica de matrícula, prevendo o desempenho esperado de novos
> candidatos a partir do perfil socioeconômico e do histórico real de
> candidatos semelhantes (microdados INEP — ENCCEJA 2024).

---

## 1. Problema de negócio

Gestores de cursinhos preparatórios para o **ENCCEJA** (Exame Nacional para
Certificação de Competências de Jovens e Adultos) recebem alunos com
históricos de vida, escolaridade e condições socioeconômicas muito
diferentes. No ato da matrícula, precisam decidir **sem conhecer o
desempenho futuro do aluno**:

- qual nível de acompanhamento pedagógico oferecer;
- se o aluno precisa de reforço intensivo desde o início;
- como alocar professores, turmas e materiais de forma eficiente;
- como aumentar as chances reais de aprovação do candidato.

A pergunta central que o sistema responde é: **com base no perfil
socioeconômico de um novo candidato, como usar o desempenho de candidatos
historicamente semelhantes para apoiar decisões pedagógicas?**

A resposta materializa-se em um princípio de design do sistema: **toda
saída termina em uma recomendação acionável ao gestor**, em linguagem
gerencial, com os números que a justificam — não apenas uma previsão
numérica.

---

## 2. Solução proposta

```
Perfil do candidato (matrícula)                     ┌─────────────────────┐
  sexo · faixa etária · UF · certificação    K-NN   │ Microdados INEP     │
  trabalho · renda · escolaridade  ───────────►      │ ENCCEJA 2024 (reg.) │
                                                     └─────────────────────┘
                          ┌──────────────────────────────────┐
                          │ 1. Notas previstas (5 áreas)     │
                          │ 2. k vizinhos mais próximos      │
                          │ 3. RECOMENDAÇÃO GERENCIAL        │
                          │    (alto/moderado/padrão + plano)│
                          └──────────────────────────────────┘
```

O **K-Nearest Neighbors (K-NN)** foi escolhido por ser a materialização
algorítmica exata da pergunta de negócio — "quem é parecido com este aluno
e como essa gente se saiu?" — e por ser **inerentemente explicável**: a
interface mostra quais candidatos reais embasaram a previsão, dando
transparência à decisão gerencial (requisito essencial de um SAD).

---

## 3. Dados: origem e estrutura

**Fonte oficial:** INEP — Microdados do ENCCEJA 2024
https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/encceja

| Arquivo | Conteúdo | Uso no projeto |
|---|---|---|
| `MICRODADOS_ENCCEJA_2024_REG_NAC.csv` | Candidatos regulares: perfil, notas, aprovação e questionário socioeconômico (Q01–Q75) — 834.648 linhas | **Base principal do K-NN** |
| `MICRODADOS_ENCCEJA_2024_PPL_NAC.csv` | Candidatos privados de liberdade — 169.371 linhas | Opcional (fora do escopo) |
| `MICRODADOS_ENCCEJA_2024_PPL_NAC_QSE.csv` | Questionário socioeconômico PPL | Opcional (fora do escopo) |
| `MICRODADOS_ENCCEJA_2024_ITENS_PROVA.csv` | Parâmetros TRI dos itens | Não usado |

**Particularidades técnicas tratadas no ETL:**

| Particularidade | Tratamento |
|---|---|
| Codificação `ISO-8859-1` (latin-1) | `pd.read_csv(..., encoding='latin-1')` |
| Separador `;` | `sep=';'` |
| Ausência = **campo vazio** (não `NA`) | `na_values=['']` na leitura |
| `TP_PRESENCA_*` (0 ausente / 1 presente / 2 eliminado) | Filtro: apenas presentes com nota preenchida |
| `TP_CERTIFICACAO` (1 Fundamental / 2 Médio) | Variável explicativa + estratificação do split |
| Q01–Q75 (questionário socioeconômico) | Decodificação via `src/config.py` — ⚠️ **validar contra o dicionário oficial da edição** |

**Variáveis do modelo:**

| Papel | Variável | Coluna(s) real(is) | Codificação |
|---|---|---|---|
| Entrada | Sexo | `TP_SEXO` | One-hot |
| Entrada | Faixa etária | `TP_FAIXA_ETARIA` (códigos 1–19) | Ordinal (preserva a idade) |
| Entrada | UF da prova | `SG_UF_PROVA` (27 UFs) | One-hot |
| Entrada | Certificação pretendida | `TP_CERTIFICACAO` | One-hot |
| Entrada | Situação de trabalho | questão do Q0x (ex.: `Q025`) | Ordinal (por horas) |
| Entrada | Renda familiar | questão do Q0x (ex.: `Q047`) | Ordinal (por faixa) |
| Entrada | Escolaridade anterior | questão do Q0x (ex.: `Q020`) | Ordinal (por nível) |
| Saída | Notas das 5 áreas | `NU_NOTA_LC/MT/CN/CH` + `NU_NOTA_REDACAO` | — |
| Saída | Aprovação | `IN_APROVADO_LC/CH/MT/CN` | — |

> ⚠️ **Ponto de manutenção crítico:** a numeração das questões
> socioeconômicas (`Q025`, `Q047`, `Q020` no código) é um **palpite
> calibrado para a base sintética**. Antes de rodar com os CSVs oficiais,
> confirme as questões e os códigos de resposta no Dicionário de Dados
> oficial do INEP — basta ajustar `src/config.py`, e todo o pipeline se
> adapta.

---

## 4. Pipeline de dados (ETL) — etapas e justificativas

Implementado em `src/etl_preparacao.py` e `src/preparacao_features.py`:

1. **Leitura controlada** — `latin-1`, `;`, `dtype=str` + conversão explícita
   de tipos (evita inferência de tipos mistos em colunas com vazios).
2. **Filtro de presença** — mantém candidatos presentes (`=1`) em pelo menos
   uma prova **com nota preenchida**. *Justificativa:* ausente/eliminado não
   tem desempenho real; imputar nota de quem faltou fabricaria dados
   inexistentes e enviesaria o K-NN.
3. **Decodificação do questionário** — códigos A/B/C → categorias legíveis
   ("De 1 a 2 salários mínimos" etc.). *Justificativa:* auditabilidade e
   manutenção; códigos originais preservados para rastreabilidade.
4. **Variáveis derivadas** — `IN_EXAME_COMPLETO`, `nota_media_objetivas`,
   `n_aprovacoes`, `grupo_etario`, `regiao`.
5. **Tratamento de ausentes nas explicativas** — **remoção**, não imputação.
   *Justificativa:* são categóricas (não há "média" sensata) e o volume
   removido é pequeno; imputar a modalidade criaria perfis artificiais que
   poluem a vizinhança.
6. **Codificação** — Ordinal para variáveis com hierarquia natural (renda,
   escolaridade, trabalho: um candidato de "5 a 10 SM" deve ser mais
   "próximo" de "3 a 5 SM" que de "Nenhuma renda"); One-Hot para nominais
   (sexo, UF, certificação — inventar ordem aqui distorceria distâncias).
7. **Normalização Z-score (StandardScaler)** — *etapa crítica em K-NN*: o
   algoritmo soma quadrados de diferenças; sem padronização, variáveis com
   amplitudes grandes dominariam a distância e binárias teriam peso ~nulo.
   O scaler é ajustado **apenas no treino** (dentro do `Pipeline`), sem
   vazamento de dados (data leakage).
8. **Split 80/20 estratificado** por `TP_CERTIFICACAO` — *justificativa:* é
   a maior quebra de distribuição do público; estratificar garante métricas
   estáveis e comparáveis.

---

## 5. O algoritmo K-NN e as decisões de modelagem

### 5.1 Como funciona

Para prever o desempenho de um novo candidato, o K-NN: (1) codifica e
padroniza o perfil dele; (2) calcula a distância a **todos** os perfis
históricos; (3) seleciona os **k** mais próximos (vizinhos); (4) estima
cada nota como a média — aqui, **ponderada pela proximidade** — das notas
reais dos vizinhos. Nenhuma hipótese paramétrica sobre "como o mundo
funciona" é imposta: a evidência são os casos reais.

### 5.2 Por que K-NN (e não um modelo caixa-preta)?

O negócio pede explicitamente *candidatos semelhantes*. O K-NN responde
isso literalmente — e permite à interface **mostrar os vizinhos** usados na
previsão, com notas e aprovação reais. Modelos como redes neurais ou
gradient boosting teriam talvez menor erro, mas não responderiam "quem são
os casos parecidos?", que é o produto pedido ao SAD.

### 5.3 Distância euclidiana (e a contraprova manhattan)

Após o Z-score, todas as dimensões têm escala comparável e a euclidiana
mede a proximidade "retilínea" natural entre perfis. A **manhattan** foi
testada como contraprova (mais robusta em alta dimensionalidade — 35
dimensões após one-hot) e **venceu na validação cruzada**, sendo adotada.

### 5.4 Escolha de k e de pesos (validação cruzada)

Busca em grade com **validação cruzada 5-fold** apenas no conjunto de
treino (o teste fica intocado para estimar o erro de generalização):

- **k ∈ {3, 5, 7, 9, 11, 15, 21}** — cobre de modelos sensíveis (k=3,
  risco de overfitting) a suaves (k=21, risco de perder sensibilidade
  local); k ímpar evita empates.
- **pesos ∈ {uniform, distance}** e **distância ∈ {euclidean, manhattan}**.
- Critério de seleção: **RMSE médio entre as 5 áreas** (penaliza erros
  grandes, custosos para o gestor).

**Resultado com a base sintética incluída no repositório:**

| Configuração | RMSE (CV) |
|---|---|
| **k=21 · uniform · manhattan** (vencedora) | ≈ 19,3 |
| k=21 · uniform · euclidean | ≈ 20,7 |
| k=21 · distance · manhattan | ≈ 22,3 |

**Decisão de negócio documentada:** o modelo final adota
`k=21, manhattan, weights='distance'`. Com pesos *uniform*, a nota prevista
é estatisticamente idêntica à média simples dos vizinhos exibidos na
interface — o que esvaziaria a comparação gerencial "previsto × média dos
vizinhos" (barras sempre iguais). Com *distance*, a previsão é puxada para
os vizinhos mais semelhantes, a comparação ganha conteúdo informativo e a
perda de RMSE (~2 pontos) é um trade-off consciente em favor do apoio à
decisão. O desempenho no teste (modelo final): **MAE global ≈ 16,7 pontos**
(≈ 1,7 pontos na redação).

### 5.5 Variável auxiliar de classificação

Um `KNeighborsClassifier` (mesma configuração) estima a probabilidade de
"aprovado em ≥ 3 das 4 áreas objetivas" — a variável binária gerencial
"certificação provável". O motor de recomendações usa a **taxa de aprovação
real dos vizinhos** como sinal de contexto.

---

## 6. Recomendações automáticas ao gestor (regra de negócio)

Implementado em `src/recomendacoes.py` — dois sinais ortogonais:

1. **Prontidão (absoluto):** em quantas das 5 áreas a nota prevista supera
   o corte oficial (100 objetivas / 5 redação)?
2. **Contexto dos vizinhos (relativo):** que fração dos k vizinhos reais
   foi aprovada em ≥ 3 das 4 áreas (certificação provável)?

| Nível | Condição | Recomendação |
|---|---|---|
| 🔴 **ALTO** | prontidão insuficiente (maioria abaixo do corte) **e** < 50% dos vizinhos aprovados | Reforço intensivo + tutor individual, priorizando as disciplinas críticas |
| 🟢 **BAIXO** | prontidão suficiente **e** ≥ 50% dos vizinhos aprovados | Acompanhamento padrão, foco em manutenção |
| 🟡 **MODERADO** | caso intermediário/misto | Monitoria dedicada + acompanhamento quinzenal |

O parecer sempre cita os **números** que o justificam (notas previstas ×
corte × média dos vizinhos × taxa de aprovação dos vizinhos) e lista um
**plano de ação** em linguagem gerencial.

---

## 7. Como rodar o projeto localmente

### 7.1 Requisitos
- Python 3.10+ (testado no 3.12)
- ~500 MB livres (dados processados + modelo)

### 7.2 Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/sad-encceja-knn.git
cd sad-encceja-knn

# 2. Crie e ative um ambiente virtual
python -m venv .venv
source .venv/bin/activate        # Linux/Mac
# .venv\Scripts\activate         # Windows

# 3. Instale as dependências
pip install -r requirements.txt

# 4. (Opcional — recomendado) Coloque os microdados oficiais do INEP em data/
#    Consulte data/LEIA-ME.txt
#    Sem eles, o pipeline gera e usa automaticamente a base sintética.

# 5. Execute o pipeline completo (ETL → features → treino → exportações)
python src/etl_preparacao.py
python src/treino_knn.py

# 6. Inicie a interface
streamlit run app/app_streamlit.py
```

A interface abre em `http://localhost:8501` com três abas:
**Simulador de Matrícula** (formulário → notas previstas → vizinhos →
recomendação), **Base Histórica** (exploração: notas por UF, renda × nota,
aprovação por faixa etária, distribuições) e **Modelo & Métricas**
(configuração, MAE/RMSE por área, curva de k).

### 7.3 Estrutura do repositório

```
sad-encceja-knn/
├── README.md                     ← este documento
├── requirements.txt
├── data/                         ← microdados INEP (ver LEIA-ME.txt)
├── src/
│   ├── config.py                 ← caminhos, mapeamentos Q0x, hiperparâmetros
│   ├── gerar_dados_sinteticos.py ← base sintética (mesmo schema do INEP)
│   ├── etl_preparacao.py         ← leitura, filtros, decodificação
│   ├── preparacao_features.py    ← encoding, scaler, split estratificado
│   ├── treino_knn.py             ← busca de k, treino, avaliação, serialização
│   ├── recomendacoes.py          ← regras de negócio (parecer gerencial)
│   ├── reserializar_modelo.py    ← utilitário de re-serialização
│   └── reexportar_dashboard.py   ← utilitário de re-exportação
├── app/
│   └── app_streamlit.py          ← interface gráfica (3 abas)
├── modelos/                      ← modelo + metadados (gerados)
└── export/                       ← JSONs para o dashboard web (gerados)
```

---

## 8. Dashboard web (Next.js)

Além do app Streamlit, o projeto inclui um **dashboard web completo**
(Next.js + TypeScript) que replica o K-NN no navegador sobre uma amostra
da base exportada por `treino_knn.py` (`export/dados_dashboard.json`),
com cinco módulos: Visão Geral (KPIs), Simulador K-NN (formulário + notas +
vizinhos + comparação), Recomendação Gerencial, Análise Exploratória
(notas por UF, renda × nota, aprovação por faixa etária/trabalho, heatmap
região × área) e Métricas do Modelo (curvas k × RMSE, limitações).
O código-fonte está disponível junto à entrega.

---

## 9. Visualizações implementadas (requisito de 3–5 gráficos)

1. **Barras agrupadas** — nota prevista × média dos vizinhos × corte de
   aprovação, por área (simulador);
2. **Radar** — perfil de desempenho previsto × perfil médio dos vizinhos;
3. **Tabela interativa** — k vizinhos mais próximos com perfil resumido,
   notas reais, aprovação e distância;
4. **Barras** — taxa de aprovação por faixa etária e nota média por renda
   (evidencia o gradiente socioeconômico que justifica o modelo);
5. **Histograma** — distribuição das notas com o corte oficial marcado;
6. **Barras** — top UFs por nota média (gradiente regional);
7. **Linha** — RMSE por k (curva de validação do modelo).

---

## 10. Limitações do modelo

- **Correlação não é causalidade.** O K-NN não afirma que renda baixa
  *causa* notas baixas; apenas reporta o desempenho histórico de perfis
  semelhantes. Fatores não observados (motivação, tempo de estudo,
  qualidade do cursinho anterior) não estão no vetor de distância.
- **Uma única edição do exame.** O modelo reflete o ENCCEJA 2024; mudanças
  de perfil do público, da prova ou da sociedade entre edições degradam a
  previsão (drift).
- **Vieses regionais e socioeconômicos dos dados.** Desigualdades
  estruturais presentes nos microdados são reproduzidas pela previsão — o
  sistema deve *informar* a decisão pedagógica, nunca automatizá-la ou
  rotular alunos.
- **Regressão à média inerente ao K-NN.** Perfis muito extremos recebem
  previsões puxadas para o centro da distribuição; o gestor deve ler as
  previsões como estimativas probabilísticas, não certezas individuais.
- **Escopo da base principal.** Candidatos PPL (privação de liberdade) e o
  arquivo de itens (TRI) ficam fora do escopo desta versão.
- **Questionário socioeconômico.** A correspondência Q0x ↔ significado deve
  ser validada a cada nova edição do exame contra o dicionário oficial.

---

## 11. Trilha de extensão

- Incorporar as demais questões do questionário (Q01–Q75) com seleção de
  variáveis;
- Estender o modelo aos candidatos PPL (com o questionário vinculado por
  posição, conforme Leia-me do INEP);
- Comparar K-NN com regressão logística/random forest em um painel de
  benchmark;
- Monitoramento de drift ao longo das edições do exame;
- Calibração das probabilidades do classificador (Platt scaling/isotônica).

---

## 12. Créditos

- **Dados:** INEP/MEC — Microdados ENCCEJA 2024 (dados abertos).
- **Ferramentas:** Python, pandas, NumPy, scikit-learn, Streamlit, Plotly;
  dashboard web em Next.js/TypeScript com Recharts.
- Trabalho acadêmico desenvolvido para a disciplina Sistemas de Apoio à
  Tomada de Decisão (AV1).
