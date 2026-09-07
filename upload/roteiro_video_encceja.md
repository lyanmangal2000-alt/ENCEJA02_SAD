# ROTEIRO DE VÍDEO — Trabalho AV1: Sistema de Apoio à Decisão ENCCEJA (K-NN)

> Duração sugerida total: **6 a 8 minutos**. O enunciado pede um vídeo "descrevendo o processo de implementação, mostrando a interface de entrada e o resultado da execução do algoritmo" — por isso o roteiro cobre exatamente essas três frentes: **processo → interface → resultado**. Fale de forma natural, como se estivesse explicando para o gestor do cursinho (o cliente do sistema), não apenas para o professor.

---

## BLOCO 1 — Abertura e contexto do negócio (≈ 45 segundos)

**O que mostrar na tela:** seu rosto (webcam) ou um slide de título com nome, curso, disciplina e título do trabalho.

**O que falar:**
> "Olá, meu nome é [SEU NOME], sou aluno do curso de Sistemas de Informação, na disciplina de Sistemas de Apoio à Tomada de Decisão. Neste vídeo vou apresentar o trabalho AV1: um sistema de apoio à decisão para gestores de cursinhos preparatórios para o ENCCEJA, usando o algoritmo K-Nearest Neighbors, o K-NN.
>
> O problema de negócio é o seguinte: quando um novo aluno se matricula no cursinho, o gestor não sabe, na prática, qual vai ser o desempenho dele na prova. Mas ele tem o perfil socioeconômico do aluno logo na matrícula — e pode comparar esse perfil com o histórico de milhares de candidatos reais que já fizeram o ENCCEJA. É exatamente isso que o sistema faz."

---

## BLOCO 2 — Os dados utilizados (≈ 60 a 90 segundos)

**O que mostrar na tela:** o(s) arquivo(s) CSV abertos (Excel, VS Code ou print), destacando colunas-chave.

**O que falar:**
> "Os dados usados são os microdados reais do ENCCEJA 2024, disponibilizados pelo INEP em dados abertos. Utilizei principalmente o arquivo de candidatos regulares, o REG_NAC, que tem mais de 800 mil registros.
>
> Cada linha representa um candidato, com informações como sexo, faixa etária, unidade da federação, tipo de certificação pretendida — se é Ensino Fundamental ou Ensino Médio —, além das respostas do questionário socioeconômico, que trazem renda familiar, escolaridade e situação de trabalho. E, claro, as notas reais que esse candidato tirou em Linguagens, Matemática, Ciências da Natureza, Ciências Humanas e Redação, além do indicador de aprovação.
>
> Ou seja: eu tenho o perfil e o resultado de centenas de milhares de pessoas reais — é essa base histórica que o K-NN usa para encontrar os 'vizinhos' de um novo candidato."

---

## BLOCO 3 — Preparação e limpeza dos dados (≈ 60 segundos)

**O que mostrar na tela:** trecho do script Python (Jupyter/VS Code) com o código de leitura e limpeza.

**O que falar:**
> "Antes de aplicar o algoritmo, foi necessário tratar os dados. Os arquivos vêm com codificação latin-1 e separados por ponto e vírgula, então ajustei a leitura para não corromper os acentos. Depois, filtrei apenas os candidatos que realmente estiveram presentes na prova, porque quem faltou não tem nota real para comparar.
>
> Também tratei os campos em branco, que representam respostas ausentes, e decodifiquei as respostas do questionário socioeconômico — que vêm como letras, A, B, C — para categorias legíveis, como faixas de renda em salários mínimos, usando o dicionário de dados oficial do INEP.
>
> Por fim, transformei as variáveis categóricas em números e normalizei todas as escalas, porque o K-NN calcula distância entre os pontos, e sem normalização uma variável com números maiores dominaria o cálculo indevidamente."

---

## BLOCO 4 — Implementação do algoritmo K-NN (≈ 90 segundos)

**O que mostrar na tela:** trecho do código do modelo (treino, escolha de k, métricas).

**O que falar:**
> "Com os dados prontos, dividi em conjunto de treino e teste e implementei o K-Nearest Neighbors usando a biblioteca scikit-learn. A lógica do K-NN é simples e poderosa: para prever a nota de um novo candidato, o algoritmo calcula a distância entre o perfil dele e todos os perfis históricos, e seleciona os 'k' candidatos mais parecidos — os vizinhos mais próximos. A nota prevista é a média das notas reais desses vizinhos.
>
> Testei diferentes valores de k — por exemplo, 5, 7 e 11 — e avaliei o erro do modelo usando métricas como o erro absoluto médio. Optei pelo k que apresentou o melhor equilíbrio entre precisão e estabilidade, evitando tanto overfitting com k muito baixo quanto a perda de sensibilidade com k muito alto.
>
> O resultado desse modelo foi salvo e é isso que alimenta a interface que vou mostrar agora."

---

## BLOCO 5 — Demonstração da interface (≈ 2 a 3 minutos — o coração do vídeo)

**O que mostrar na tela:** a interface (Streamlit/Gradio) rodando ao vivo, tela cheia.

**O que falar (roteiro de demonstração passo a passo):**
> "Agora vou mostrar a interface na prática, simulando a matrícula de um novo aluno no cursinho.
>
> [Preencha o formulário narrando cada campo] Vou selecionar: sexo feminino, faixa etária de 25 a 29 anos, estado de São Paulo, certificação pretendida para o Ensino Médio, situação de trabalho 'trabalha', renda familiar de até 2 salários mínimos, e escolaridade anterior incompleta.
>
> [Clique em 'Prever' / 'Calcular'] Ao clicar em calcular, o sistema busca no histórico os candidatos com perfil mais parecido com esse — os vizinhos mais próximos — e apresenta o resultado.
>
> [Aponte para a tela de resultado] Aqui vemos as notas esperadas para esse candidato em cada área, e logo abaixo, a lista dos vizinhos mais próximos identificados, com o perfil e a nota real de cada um, além do status de aprovação.
>
> [Aponte para o gráfico comparativo, se houver] Neste gráfico dá para visualizar como a nota prevista do candidato se compara à média dos vizinhos — está acima, abaixo ou na média.
>
> Vou repetir o teste agora com outro perfil, de um candidato com renda familiar mais alta e ensino médio completo, só para mostrar como o sistema se adapta e o resultado muda de acordo com o perfil socioeconômico." *(demonstre um segundo cenário em contraste, se possível)*

---

## BLOCO 6 — Resultado e recomendação ao gestor (≈ 60 a 90 segundos)

**O que mostrar na tela:** a área de "recomendação" da interface, em destaque.

**O que falar:**
> "O ponto central do sistema não é só prever a nota — é transformar isso em uma recomendação de gestão. No primeiro exemplo que mostrei, as notas previstas ficaram abaixo da média dos vizinhos, e a maioria desses vizinhos não foi aprovada no exame. Isso significa que esse perfil tem alto risco de reprovação, e o sistema recomenda ao gestor investir em reforço intensivo e acompanhamento individual, priorizando as disciplinas em que a diferença para os vizinhos foi maior.
>
> Já no segundo exemplo, com perfil socioeconômico mais favorável, as notas previstas ficaram próximas ou acima da média dos vizinhos aprovados, então a recomendação foi de acompanhamento padrão.
>
> É exatamente esse tipo de informação que ajuda o gestor a alocar professores, montar turmas de reforço e direcionar o material didático de forma mais assertiva, em vez de tratar todos os alunos da mesma forma."

---

## BLOCO 7 — Encerramento (≈ 30 segundos)

**O que mostrar na tela:** link do repositório GitHub e da interface publicada, em tela ou na descrição.

**O que falar:**
> "Todo o código está documentado no repositório do GitHub, com explicações sobre a implementação do K-NN, o tratamento e normalização dos dados, e as justificativas das escolhas feitas. O link do repositório e o link da interface estão disponíveis na descrição e também foram enviados por e-mail conforme solicitado.
>
> Obrigado(a) pela atenção!"

---

## Checklist final antes de gravar

- [ ] Tela do código visível e legível (aumentar fonte do editor).
- [ ] Interface testada com pelo menos **2 perfis diferentes de candidato** (um de alto risco, um de baixo risco) para mostrar contraste.
- [ ] Falar o **porquê** de cada escolha técnica (encoding, normalização, valor de k) — o enunciado pede justificativa, não só execução.
- [ ] Terminar sempre com a **recomendação gerencial em linguagem simples**, não apenas o número da nota prevista.
- [ ] Duração final entre 6 e 8 minutos — nem tão curto que pareça incompleto, nem tão longo que perca o foco do avaliador.
- [ ] Exportar em MP4 e subir para YouTube (não listado) ou Google Drive com link de visualização liberado, antes de enviar por e-mail.
