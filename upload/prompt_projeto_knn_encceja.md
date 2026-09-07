# PROMPT MESTRE — Sistema de Apoio à Decisão ENCCEJA com K-NN

> Use este prompt (na íntegra ou por seções) para pedir a uma IA generativa (Claude, ChatGPT etc.) ou para guiar você mesmo no desenvolvimento do Trabalho AV1 de Sistemas de Apoio à Tomada de Decisão. Ele já está calibrado com os **arquivos reais de dados** fornecidos pelo INEP (Microdados ENCCEJA 2024).

---

## 1. Papel (persona) que a IA deve assumir

Você é um(a) **cientista de dados sênior especializado(a) em sistemas de apoio à decisão (SAD/DSS)**, com domínio de Python, aprendizado de máquina supervisionado (K-Nearest Neighbors) e desenvolvimento de interfaces simples (Streamlit, Gradio ou Flask). Você vai me ajudar a construir, do início ao fim, um sistema completo — dados, algoritmo e interface — documentado para ser mantido por outro profissional.

---

## 2. Contexto de negócio

Sou gestor(a) de um cursinho preparatório para o **ENCCEJA** (Exame Nacional para Certificação de Competências de Jovens e Adultos). Recebo alunos com histórico de vida, escolaridade e condição socioeconômica muito diferentes. Ao matricular um novo aluno, preciso decidir:

- qual nível de acompanhamento pedagógico oferecer;
- se o aluno precisa de reforço intensivo;
- como alocar professores, turmas e materiais;
- como aumentar as chances reais de aprovação do candidato.

Não conheço o desempenho futuro do aluno, mas tenho o **perfil socioeconômico dele no ato da matrícula** e tenho acesso aos **microdados históricos reais do ENCCEJA 2024**, que mostram como candidatos com perfil semelhante se saíram no exame.

**Pergunta central:** com base no perfil socioeconômico de um novo candidato, como usar o desempenho de candidatos semelhantes (vizinhos mais próximos) para apoiar decisões pedagógicas do cursinho?

---

## 3. Objetivo técnico

Implementar um algoritmo **K-Nearest Neighbors (K-NN)** que, a partir das características socioeconômicas de um novo candidato, **preveja as notas esperadas** (Linguagens, Matemática, Ciências da Natureza, Ciências Humanas e Redação) com base nas notas de candidatos historicamente semelhantes, e que **traduza essa previsão em recomendações gerenciais** para o cursinho.

O foco é o **apoio à decisão gerencial**, não apenas o algoritmo em si — toda saída do sistema deve terminar em uma recomendação acionável para o gestor.

---

## 4. Dados reais disponíveis (já em mãos — não é necessário baixar nada)

Fonte oficial: INEP — Microdados do ENCCEJA 2024
(https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/encceja)

| Arquivo | Conteúdo | Linhas (sem header) | Observação |
|---|---|---|---|
| `MICRODADOS_ENCCEJA_2024_REG_NAC.csv` | Candidatos **regulares** (não privados de liberdade): dados cadastrais, notas por área, indicadores de aprovação e **questionário socioeconômico completo (Q01 a Q75)** já embutido no mesmo arquivo | 834.648 | **Base principal recomendada para o KNN** |
| `MICRODADOS_ENCCEJA_2024_PPL_NAC.csv` | Candidatos em regime de privação de liberdade (PPL): dados cadastrais e notas, **sem** o questionário embutido | 169.371 | Uso opcional/complementar |
| `MICRODADOS_ENCCEJA_2024_PPL_NAC_QSE.csv` | Questionário socioeconômico dos candidatos PPL (arquivo separado, sem chave explícita `NU_INSCRICAO` — vinculação por ordem/posição conforme Leia-me do INEP) | 168.400 | Uso opcional/complementar |
| `MICRODADOS_ENCCEJA_2024_ITENS_PROVA.csv` | Parâmetros psicométricos (TRI) de cada item da prova | 1.440 | Não é necessário para o KNN de apoio à decisão; fica como material de apoio/curiosidade |

**Particularidades técnicas confirmadas nos arquivos (trate no ETL):**
- Codificação: `ISO-8859-1` (latin-1) — não é UTF-8. Ao ler em Python, use `encoding='latin-1'` (ou converta antes com `iconv`).
- Separador de colunas: `;` (ponto e vírgula).
- Separador decimal das notas: `.` (ponto) — ex.: `118`, `0.6`.
- Valores ausentes aparecem como **campo vazio** (string vazia), não como `NA`/`NaN` explícito — trate isso na leitura.
- `TP_PRESENCA_LC/CH/MT/CN`: `0` = ausente, `1` = presente, `2` = eliminado. **Filtre apenas presentes (`1`) com nota preenchida** para treinar o modelo — candidato ausente não tem nota real.
- `TP_CERTIFICACAO`: `1` = Ensino Fundamental, `2` = Ensino Médio.
- Colunas `Q01` a `Q75` (somente no `REG_NAC`) correspondem ao **Questionário Socioeconômico do candidato**. Os códigos de resposta (A, B, C...) e o significado de cada pergunta (renda familiar, escolaridade dos pais, situação de trabalho, tipo de moradia etc.) **devem ser consultados no Dicionário de Dados / Leia-me oficial do INEP** que acompanha o pacote de microdados — não assuma o significado sem checar, pois a numeração pode mudar de edição para edição do exame.

---

## 5. Variáveis a utilizar (mapeadas para colunas reais)

**Atributos de entrada (perfil do candidato — variáveis explicativas do KNN):**
| Atributo pedido no enunciado | Coluna real no CSV |
|---|---|
| Sexo | `TP_SEXO` |
| Faixa etária | `TP_FAIXA_ETARIA` |
| Unidade da Federação | `SG_UF_PROVA` |
| Tipo de certificação pretendida | `TP_CERTIFICACAO` |
| Situação de trabalho | localizar a pergunta correspondente em `Q01`–`Q75` via Dicionário de Dados oficial |
| Faixa de renda familiar | idem — localizar em `Q01`–`Q75` |
| Escolaridade anterior | idem — localizar em `Q01`–`Q75` (ou usar `TP_CERTIFICACAO` como proxy simplificado, se optar por reduzir escopo) |

**Atributos de saída (desempenho — o que o KNN vai estimar):**
| Nota | Coluna real |
|---|---|
| Linguagens | `NU_NOTA_LC` |
| Matemática | `NU_NOTA_MT` |
| Ciências da Natureza | `NU_NOTA_CN` |
| Ciências Humanas | `NU_NOTA_CH` |
| Redação | `NU_NOTA_REDACAO` |
| Indicador de aprovação | `IN_APROVADO_LC`, `IN_APROVADO_CH`, `IN_APROVADO_MT`, `IN_APROVADO_CN` |

---

## 6. Etapas obrigatórias de desenvolvimento

Peça (ou execute) as etapas nesta ordem:

1. **Preparação e tratamento dos dados**
   - Ler o CSV com `encoding='latin-1'` e `sep=';'`.
   - Filtrar apenas registros com presença = 1 em pelo menos uma prova e nota não vazia.
   - Tratar valores ausentes (remoção ou imputação justificada).
   - Selecionar e renomear as colunas de interesse (seção 5).
   - Decodificar as respostas Q0x usando o Dicionário de Dados oficial em categorias legíveis (ex.: renda em faixas de salário mínimo).

2. **Codificação e normalização**
   - Converter variáveis categóricas (sexo, UF, faixa etária, renda, escolaridade, situação de trabalho) em variáveis numéricas (One-Hot Encoding ou Ordinal Encoding, conforme a natureza de cada variável).
   - Normalizar/padronizar as variáveis numéricas (Min-Max ou Z-score) — **etapa crítica em KNN**, pois o algoritmo é sensível à escala.
   - Separar em conjunto de treino e teste (ex.: 80/20), com amostragem estratificada se fizer sentido (por UF ou faixa etária).

3. **Implementação do K-NN**
   - Implementar com `scikit-learn` (`KNeighborsRegressor` para prever notas contínuas, e opcionalmente `KNeighborsClassifier` para o indicador de aprovação).
   - Testar diferentes valores de **k** (ex.: 3, 5, 7, 11, 15) e escolher com base em validação cruzada e métricas de erro (MAE, RMSE).
   - Justificar a métrica de distância escolhida (Euclidiana é o padrão; comentar por que serve para este caso).
   - Salvar o modelo treinado (ex.: `joblib`) para uso pela interface.

4. **Interface gráfica**
   - Construir com **Streamlit** (recomendado para publicação rápida) ou Gradio.
   - Formulário de entrada replicando o perfil do candidato: sexo, faixa etária, UF, tipo de certificação, situação de trabalho, faixa de renda, escolaridade anterior.
   - Ao submeter, exibir:
     - notas previstas nas 4 áreas + redação;
     - lista/tabela dos **k vizinhos mais próximos** (perfil resumido + notas reais + status de aprovação);
     - comparação visual (gráfico de barras ou radar) entre o candidato previsto e a média dos vizinhos.

5. **Recomendações automáticas ao gestor** (regra de negócio sobre a saída do KNN)
   - Se a nota prevista do candidato for **inferior** à média dos vizinhos e a maioria dos vizinhos **não foi aprovada** → sinalizar **alto risco de reprovação**, recomendar reforço intensivo e acompanhamento individual, indicando a(s) disciplina(s) mais crítica(s).
   - Se a nota prevista for **igual ou superior** à média dos vizinhos e a maioria foi aprovada → recomendar acompanhamento padrão, com foco de manutenção.
   - Caso intermediário/misto → recomendar acompanhamento moderado com monitoramento periódico.
   - Sempre apresentar a recomendação em linguagem gerencial (não técnica), citando os números que a justificam.

6. **Documentação (README no GitHub)**
   - Descrição do problema de negócio.
   - Estrutura dos dados e origem (INEP, ENCCEJA 2024).
   - Etapas de limpeza/normalização com justificativa.
   - Explicação do algoritmo K-NN (como funciona, por que foi escolhido, como o k foi definido).
   - Como rodar o projeto localmente (ambiente virtual, dependências, comando de execução).
   - Limitações do modelo (ex.: correlação não é causalidade; dados de um único ano/edição; possíveis vieses regionais).

---

## 7. Entregáveis finais e critérios de pontuação (conforme enunciado da disciplina)

| Entregável | Pontos |
|---|---|
| Script no GitHub, documentado (dados, ETL, algoritmo, justificativas) | 2,0 |
| Link da interface funcional com recomendações ao gestor | 2,0 |
| Vídeo demonstrando implementação, interface e execução | 1,0 |
| **Total** | **5,0** |

Enviar por e-mail (GitHub + interface + vídeo) para: **lina@ls4business.com.br**

---

## 8. Instrução final para a IA

Com base em tudo acima, gere:
1. O **script Python completo e comentado** (ETL → normalização → treino KNN → avaliação → serialização do modelo).
2. O **código da interface** (Streamlit) consumindo o modelo treinado.
3. Um **README.md** pronto para o repositório GitHub, seguindo a estrutura da seção 6.6.
4. Sugestões de **3 a 5 gráficos/visualizações** para enriquecer a interface (ex.: dispersão notas x renda, boxplot notas por UF, distribuição de aprovação por faixa etária).

Sempre que uma decisão de modelagem for tomada (ex.: escolha de k, tipo de encoding, tratamento de outlier), **explique o porquê em comentários no código**, pois o entregável exige que o script seja mantido por outro profissional no futuro.
