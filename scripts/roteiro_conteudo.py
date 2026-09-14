# -*- coding: utf-8 -*-
"""Conteúdo do roteiro de vídeo melhorado — SAD ENCCEJA K-NN (AV1).

Todos os números foram verificados nos artefatos reais do pipeline:
- modelos/metadados_modelo.json  (MAE, acurácia, configs, treino/teste)
- export/metricas_modelo.json    (RMSE CV, métricas por área)
- export/dados_dashboard.json    (KPIs da base: 46.171 / 36.059 / ~38%)
- src/app/page.tsx               (nomes reais das 5 abas e presets)
"""

# ---------------------------------------------------------------- section 1
TITULO_DOC = "Roteiro de Vídeo — SAD ENCCEJA com K-NN"

COMO_USAR = (
    "Este roteiro é um instrumento de gravação, não um texto para leitura mecânica: "
    "treine o suficiente para soar natural. O texto em fonte normal é a <b>fala literal</b>, "
    "para ser dita exatamente como está escrito. Os trechos entre colchetes, como "
    "<i>[pausa 2 s]</i>, marcam silêncios que devem ser respeitados — eles dão tempo de o "
    "público ler a tela. Os parágrafos em itálico entre chaves são <b>direções de câmera e "
    "de navegação</b>, que nunca são falados. Se errar uma frase, não reinicie a cena: faça "
    "uma pausa de dois segundos, retome a frase do início e remova o erro na edição. Todos "
    "os números citados na narração estão consolidados na seção 2 — confira um a um antes "
    "de gravar."
)

FICHA = [
    ("Disciplina / Atividade", "Sistemas de Apoio à Tomada de Decisão · Atividade AV1"),
    ("Tema", "SAD ENCCEJA — previsão de desempenho e recomendação de estudo com K-NN (base no formato INEP 2024)"),
    ("Objetivo do vídeo", "Demonstrar o SAD completo e o raciocínio de modelagem em linguagem gerencial, sem jargão desnecessário"),
    ("Duração-alvo", "6 min 30 s (aceitável entre 5 e 7 minutos)"),
    ("Formato", "Gravação de tela 1080p, 30 fps, narrada em português"),
    ("O que será demonstrado", "Dashboard Next.js com 5 abas — Visão Geral, Simulador K-NN, Recomendação, Análise Exploratória e Modelo & Métricas. A interface Streamlit fica fora do vídeo"),
    ("Roteiro", "Fala completa (verbatim), 6 cenas cronometradas, com pausas e direções"),
    ("Arquivo de entrega", "AV1_SAD_ENCCEJA_NomeSobrenome.mp4 (MP4 H.264)"),
]

CHECKLIST = [
    "Suba o dashboard: <b>npm run dev</b> na pasta do projeto e confirme http://localhost:3000 antes de qualquer coisa.",
    "Percorra as 5 abas e teste os dois presets do Simulador — nada pode falhar durante a gravação.",
    "Navegador em tela cheia (F11), zoom 100%, sem abas extras, sem favoritos e sem barra de downloads visível.",
    'Ative o modo "não perturbe": notificações do sistema, e-mail e mensagens desligadas.',
    "Teste o microfone com uma gravação de 10 segundos; fale a cerca de 15 cm e verifique ruído de fundo.",
    "Configure a captura (OBS ou equivalente): 1080p, 30 fps, áudio do microfone ativado.",
    "Faça um ensaio completo com cronômetro; se passar de 7 minutos, corte trechos da cena 2, nunca da cena 4.",
    "Deixe este roteiro impresso ou em um segundo monitor, com a seção 2 (números) à vista.",
]

# ---------------------------------------------------------------- section 2
LEAD_NUMEROS = (
    "Os números abaixo são os únicos que precisam ser citados no vídeo, e todos vêm dos "
    "artefatos oficiais do pipeline — nada foi estimado de memória. Citar valores exatos é "
    "o que separa uma demonstração acadêmica de uma apresentação casual: o avaliador pode "
    "conferir cada valor no repositório do trabalho. Antes de gravar, leia a tabela em voz "
    "alta uma vez para treinar a pronúncia dos números."
)

FONTE_NUMEROS = (
    "<i>Fonte: artefatos gerados pelo pipeline — modelos/metadados_modelo.json, "
    "export/metricas_modelo.json e export/dados_dashboard.json.</i>"
)

STATS = [
    ("16,72", "MAE global — erro médio em pontos (escala 0–200)"),
    ("71,45%", "Acurácia na classificação de aprovação"),
    ("19,33", "RMSE na validação cruzada com k = 21"),
]

NUMEROS = [
    ("Base sintética gerada", "60.000 candidatos", "Cena 2"),
    ("Participantes presentes no exame", "46.171", "Cena 2"),
    ("Exames completos (base de modelagem)", "36.059 · 78,1% dos presentes", "Cena 2"),
    ("Amostra carregada no dashboard", "2.937 registros", "Cena 2"),
    ("Taxa de aprovação na base", "≈ 38% (37,7 a 38,3% por área)", "Cena 2"),
    ("Média das notas", "≈ 92 / 200 · Redação ≈ 5,2 / 10", "Cena 2"),
    ("Divisão treino × teste", "28.847 × 7.212 (80/20 estratificado)", "Cena 3"),
    ("Busca de hiperparâmetros", "28 configurações × validação cruzada de 5 partes", "Cena 3"),
    ("Melhor configuração da busca", "k = 21 · distância Manhattan · peso uniform", "Cena 3"),
    ("Modelo final (decisão de negócio documentada)", "k = 21 · distância Manhattan · peso distance", "Cena 3"),
    ("MAE global / RMSE global", "16,72 / 21,09 (escala 0–200)", "Cena 3"),
    ("MAE da Redação", "1,84 (escala 0–10)", "Cena 3"),
    ("Acurácia da classificação de aprovação", "71,45%", "Cena 3"),
    ("Cortes de certificação", "média ≥ 100 / 200 · Redação ≥ 5 / 10", "Cenas 4 e 5"),
    ("Níveis de risco do parecer", "ALTO · MODERADO · BAIXO", "Cena 5"),
]

# ---------------------------------------------------------------- section 3
LEAD_MAPA = (
    "O mapa abaixo é a visão de alto nível da demonstração: cada cena tem um objetivo "
    "comunicacional claro, um trecho de tela e um tempo-alvo. Use-o para navegar rápido "
    "durante a gravação, sem precisar reler a fala completa. Se uma cena estourar o tempo, "
    "consulte a dica de gravação dela antes de cortar conteúdo — na dúvida, a cena 4 "
    "(Simulador) é a mais importante do vídeo."
)

MAPA = [
    ("C1 · Abertura", "0:00 – 0:45", "Tela inicial do dashboard", "Apresentar-se e situar o avaliador"),
    ("C2 · Base e visão geral", "0:45 – 1:45", "Aba Visão Geral", "Contextualizar a base e os KPIs"),
    ("C3 · Modelo K-NN", "1:45 – 3:00", "Aba Modelo & Métricas", "Explicar algoritmo, busca de hiperparâmetros e métricas"),
    ("C4 · Simulador", "3:00 – 4:45", "Aba Simulador K-NN · dois presets", "Demonstrar dois cenários reais de uso"),
    ("C5 · Recomendação", "4:45 – 5:45", "Aba Recomendação", "Mostrar o parecer gerencial completo"),
    ("C6 · Conclusão", "5:45 – 6:30", "Aba Visão Geral (final)", "Recapitular, reconhecer limitações e encerrar"),
]

# ---------------------------------------------------------------- section 4
LEAD_CENAS = (
    "As seis cenas abaixo somam cerca de 875 palavras de fala — aproximadamente 6 minutos "
    "e 30 segundos em ritmo confortável de 135 palavras por minuto. O cronômetro de cada "
    "cena é uma meta de ensaio, não um limite rígido: ajuste o ritmo naturalmente, desde "
    "que o total não exceda 7 minutos. Durante a gravação, mantenha apenas a cena atual "
    "à vista para não se perder."
)

CENAS = [
    {
        "titulo": "CENA 1 · ABERTURA",
        "tempo": "0:00 – 0:45 · ~100 palavras",
        "na_tela": "Tela inicial do dashboard — cabeçalho do projeto e as cinco abas do menu.",
        "direcao": "{direção: inicie a gravação em silêncio, aguarde 1 segundo e comece a falar.}",
        "narracao": [
            "Olá! Eu sou [Nome do Estudante], do curso de [Curso]. <i>[pausa 1 s]</i> "
            "Este vídeo apresenta a Atividade AV1 da disciplina Sistemas de Apoio à Tomada "
            "de Decisão: um SAD construído para o ENCCEJA, o Exame Nacional para "
            "Certificação de Competências de Jovens e Adultos. O sistema prevê o desempenho "
            "do participante nas cinco provas e recomenda prioridades de estudo com o "
            "algoritmo K-NN, os K vizinhos mais próximos. <i>[pausa 1 s]</i> Nos próximos "
            "seis minutos, vou mostrar a base de dados, o modelo, o simulador de riscos e o "
            "parecer de recomendação. Vamos começar.",
        ],
        "dica": "Respire antes de iniciar e comece sempre em silêncio — o corte inicial é "
                "muito mais fácil do que remover ruído no meio da fala.",
    },
    {
        "titulo": "CENA 2 · BASE E VISÃO GERAL",
        "tempo": "0:45 – 1:45 · ~135 palavras",
        "na_tela": "Aba Visão Geral — cartões de KPI, aprovação por área, histograma de notas e painéis por região.",
        "direcao": "{direção: clique na aba Visão Geral antes de começar a falar; aponte o mouse para cada indicador citado.}",
        "narracao": [
            "Primeiro, a base de dados. Para este trabalho foi gerada uma base sintética de "
            "sessenta mil candidatos, no mesmo esquema do microdado oficial do INEP. "
            "<i>[pausa 1 s]</i> Desses, quarenta e seis mil cento e setenta e um estiveram "
            "presentes no exame, e trinta e seis mil e cinquenta e nove completaram todas as "
            "provas — setenta e oito vírgula um por cento — formando a base de modelagem. O "
            "painel explora uma amostra de dois mil novecentos e trinta e sete registros. "
            "<i>[pausa 1 s]</i> Reparem nos indicadores: a taxa de aprovação gira em torno de "
            "trinta e oito por cento, e a média das notas fica em noventa e dois pontos, numa "
            "escala de zero a duzentos. Ou seja: mais da metade dos participantes não alcança "
            "a certificação — é exatamente esse público que o nosso SAD quer apoiar.",
        ],
        "dica": "Os números da tela batem com a tabela da seção 2; se quiser poupar tempo, "
                "cite apenas 60.000, 36.059 e a aprovação de 38%.",
    },
    {
        "titulo": "CENA 3 · MODELO K-NN",
        "tempo": "1:45 – 3:00 · ~175 palavras",
        "na_tela": "Aba Modelo & Métricas — curva do RMSE por k, comparação de pesos e distâncias, métricas por área.",
        "direcao": "{direção: percorra a curva do k com o mouse enquanto narra; pause o cursor no k = 21.}",
        "narracao": [
            "Agora, o coração do sistema: o modelo. Escolhemos o K-NN, que estima a nota de "
            "um participante a partir dos casos mais parecidos da base — a nota prevista é "
            "uma média ponderada das notas dos vizinhos mais próximos. <i>[pausa 1 s]</i> "
            "Para definir os hiperparâmetros, testamos vinte e oito combinações — sete "
            "valores de k, dois pesos e duas métricas de distância — com validação cruzada "
            "de cinco partes. O melhor ponto foi k igual a vinte e um, com distância de "
            "Manhattan e RMSE de dezenove vírgula trinta e três. <i>[pausa 1 s]</i> Como "
            "decisão de negócio, documentada no código, o modelo final adota peso "
            "proporcional à distância: vizinhos mais próximos influenciam mais a previsão. "
            "<i>[pausa 1 s]</i> Resultado final: erro médio absoluto de dezesseis vírgula "
            "setenta e dois pontos — cerca de oito por cento da escala — e acurácia de "
            "setenta e um vírgula quatro por cento na classificação de aprovação, treinando "
            "com vinte e oito mil oitocentos e quarenta e sete casos e testando com sete mil "
            "duzentos e doze.",
        ],
        "dica": "Esta é a cena com mais números: fale devagar. Um número dito com clareza "
                "vale mais do que três ditos rápido.",
    },
    {
        "titulo": "CENA 4 · SIMULADOR",
        "tempo": "3:00 – 4:45 · ~235 palavras",
        "na_tela": "Aba Simulador K-NN — formulário do perfil, botões de exemplo, barras de previsão, radar e tabela de vizinhos.",
        "direcao": "{direção: use o botão 'Exemplo: alto risco' e depois 'Exemplo: favorável'; após cada clique, mantenha 2 s de silêncio para a tela reagir.}",
        "narracao": [
            "Chegou a hora de usar o sistema de verdade. O simulador recebe o perfil do "
            "participante — faixa etária, renda, escolaridade dos pais, situação de trabalho "
            "e região — e as notas que a pessoa já tem em cada prova. <i>[pausa 1 s]</i> "
            "Para agilizar a demonstração, uso os cenários prontos. <i>[pausa 1 s]</i> "
            "Primeiro, o exemplo de alto risco: um perfil com notas entre setenta e seis e "
            "oitenta e um pontos, abaixo do corte de cem. <i>[pausa 2 s]</i> Clico em "
            "estimar... e o sistema busca os vinte e um vizinhos mais próximos, mostra a "
            "distância de cada um e calcula a nota prevista em cada prova. O parecer "
            "classifica este participante como <b>alto risco de reprovação</b>. "
            "<i>[pausa 1 s]</i> Agora, o cenário favorável: notas entre cento e quatro e "
            "cento e onze. <i>[pausa 2 s]</i> Estimo de novo... e o quadro muda: previsão "
            "acima do corte e risco baixo. <i>[pausa 1 s]</i> Reparem como a previsão "
            "acompanha os vizinhos: perfis parecidos produzem resultados parecidos. Essa é a "
            "essência do K-NN — e a maior garantia de interpretabilidade do modelo.",
        ],
        "dica": "Se um preset falhar, refaça o clique sem comentar o erro — a edição remove "
                "a tentativa. Nunca diga 'vou tentar de novo'.",
    },
    {
        "titulo": "CENA 5 · RECOMENDAÇÃO",
        "tempo": "4:45 – 5:45 · ~130 palavras",
        "na_tela": "Aba Recomendação — parecer gerencial do último perfil simulado, com nível de risco, metas e ações.",
        "direcao": "{direção: percorra o parecer de cima para baixo com o mouse; destaque duas recomendações específicas.}",
        "narracao": [
            "Com a previsão em mãos, o SAD gera o parecer de recomendação. Os participantes "
            "são classificados em três níveis de risco — alto, moderado e baixo — combinando "
            "a proximidade da nota prevista em relação ao corte de cem pontos com a taxa de "
            "aprovação dos vizinhos. <i>[pausa 1 s]</i> Para o perfil de alto risco, o "
            "parecer prioriza as provas com maior defasagem e traduz a distância em metas "
            "numéricas: quantos pontos faltam para alcançar o corte em cada área. No risco "
            "moderado, o foco é consolidar as áreas que estão no limite; no risco baixo, "
            "manter o ritmo e revisar os pontos fracos. <i>[pausa 1 s]</i> O objetivo é "
            "transformar a previsão estatística em orientação prática, algo que o "
            "participante e o educador consigam usar já na semana seguinte.",
        ],
        "dica": "Não leia o parecer inteiro: escolha duas recomendações e leia só elas. O "
                "avaliador lê o resto na tela.",
    },
    {
        "titulo": "CENA 6 · CONCLUSÃO",
        "tempo": "5:45 – 6:30 · ~100 palavras",
        "na_tela": "Aba Visão Geral novamente, tela final estática.",
        "direcao": "{direção: volte à aba Visão Geral, posicione o mouse no cabeçalho e finalize olhando para a câmera.}",
        "narracao": [
            "Encerrando: construímos um SAD completo — da base no formato do INEP ao modelo "
            "K-NN validado por validação cruzada, até o dashboard com simulação e "
            "recomendações. O ponto forte está na interpretabilidade: cada previsão pode ser "
            "explicada pelos vizinhos que a geraram. A limitação também está clara: os dados "
            "são sintéticos, e o pipeline está pronto para rodar com o microdado real, na "
            "mesma formatação, sem alteração de código. <i>[pausa 1 s]</i> Como próximos "
            "passos, proponho comparar o K-NN com métodos de ensemble e calibrar as "
            "recomendações com dados longitudinais. O código, os artefatos do modelo e a "
            "documentação acompanham esta entrega. Muito obrigado!",
        ],
        "dica": "Segure 2 segundos de silêncio antes de parar a gravação — evita cortes "
                "bruscos no áudio no final.",
    },
]

# ---------------------------------------------------------------- section 5
LEAD_QA = (
    "Se o vídeo for apresentado ou discutido em aula, estas são as perguntas mais prováveis "
    "do avaliador — e as respostas curtas que você já deve ter pronto. Cada resposta cabe em "
    "trinta segundos de fala e é coerente com o que aparece na tela e no repositório. Não "
    "decore as respostas palavra por palavra: domine a ideia central de cada uma."
)

QA = [
    ("P1 — Por que o K-NN e não outro algoritmo?",
     "O K-NN é um baseline clássico de regressão: simples, não paramétrico e naturalmente "
     "interpretável — cada previsão pode ser justificada mostrando os vizinhos reais que a "
     "compõem, o que conversa com a proposta gerencial do SAD. Ele também serve de referência "
     "para comparações futuras com modelos mais complexos, como ensembles. O custo é a "
     "obrigação de padronizar as variáveis e o esforço de buscar vizinhos, tratado no "
     "dashboard com parâmetros exportados do treino."),
    ("P2 — Por que k = 21?",
     "Entre os sete valores testados (3 a 21), k = 21 apresentou o melhor RMSE na validação "
     "cruzada: 19,33. Valores maiores de k suavizam o ruído local e tornam a previsão mais "
     "estável, e um k ímpar evita empates na classificação de aprovação. k muito maior que "
     "isso faria a previsão convergir para a média global, perdendo sensibilidade ao perfil."),
    ("P3 — Por que a distância de Manhattan?",
     "A base tem muitas variáveis categóricas codificadas, via codificação ordinal e one-hot. "
     "A distância de Manhattan soma as diferenças dimensão a dimensão e é menos sensível a um "
     "único atributo muito discrepante do que a euclidiana. Na prática a diferença foi "
     "mínima — RMSE de 19,3254 contra 19,3303 — o que mostra que a escolha é robusta."),
    ("P4 — O peso uniform teve RMSE de CV melhor. Por que o modelo final usa distance?",
     "Porque foi uma decisão de negócio documentada no código e explicada no painel do "
     "modelo. Com peso uniforme e média simples, perfis cujos vizinhos empatam produzem "
     "previsões degeneradas e o parecer perde resolução. O peso proporcional à distância dá "
     "mais influência aos casos mais parecidos, o que é mais defensável na hora de "
     "recomendar. O pequeno trade-off de RMSE é assumido e registrado com transparência."),
    ("P5 — Os dados são reais?",
     "Não — são sintéticos, gerados com o mesmo esquema e a mesma formatação do microdado "
     "do INEP, incluindo codificação latin-1 e separador ponto e vírgula. O gerador reproduz "
     "efeitos de renda, escolaridade, trabalho, região e idade sobre a proficiência, além do "
     "padrão de presença no exame. O pipeline de ETL está pronto para processar o arquivo "
     "real sem alteração de código — basta apontar o caminho na configuração."),
    ("P6 — O modelo roda no navegador ou em um servidor?",
     "Nos dois sentidos, com coerência garantida. O dashboard Next.js reexecuta o K-NN em "
     "TypeScript, com a mesma codificação de variáveis e os mesmos parâmetros de "
     "padronização exportados do treino — média e escala — e a mesma distância Manhattan. A "
     "interface Streamlit carrega o modelo treinado serializado com joblib. Para o mesmo "
     "perfil, as duas interfaces retornam os mesmos vizinhos."),
]

# ---------------------------------------------------------------- section 6
LEAD_POS = (
    "A gravação só termina quando a revisão passa nos quatro pontos abaixo. Reserve dez "
    "minutos entre o fim da gravação e a exportação: é o tempo necessário para assistir ao "
    "vídeo inteiro com atenção e conferir os números na tela. Exportar sem revisar é a causa "
    "mais comum de regravação."
)

POS_REVISAO = [
    "O áudio está audível do início ao fim, sem picos de estouro nem ruído de teclado.",
    "Os números exibidos na tela conferem com a tabela da seção 2.",
    "Não há arquivos, abas ou notificações pessoais visíveis em nenhum momento.",
    "A duração final está entre 5:45 e 7:00.",
]

POS_CORTE = (
    "Na edição, remova apenas hesitações, repetições e tentativas falhas — as pausas "
    "planejadas entre colchetes devem permanecer, porque elas dão ritmo ao vídeo. Nunca "
    "corte no meio de um número ou de um termo técnico: se necessário, corte a frase inteira "
    "e regrave apenas o trecho, mantendo o fundo da tela estático para a emenda ficar "
    "invisível. Evite trilhas sonoras e efeitos: em vídeo acadêmico, áudio limpo vale mais "
    "que produção elaborada."
)

POS_EXPORT = [
    ("Formato", "MP4 (codec H.264)"),
    ("Resolução / taxa", "1920 × 1080 · 30 fps"),
    ("Áudio", "AAC, 128 kbps ou superior"),
    ("Nome do arquivo", "AV1_SAD_ENCCEJA_NomeSobrenome.mp4"),
    ("Envio", "Plataforma da disciplina, conforme instrução do professor"),
]
