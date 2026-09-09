// Roteiro de Video — SAD ENCCEJA com K-NN (AV1)
// Docx skill — cena copywriting (script de fala), Profile B (Visual)
// Estrutura: Secao 1 retrato (ficha + preparacao + numeros) | Secao 2 paisagem (tabela de cenas + pos-gravacao)
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Footer, PageNumber, AlignmentType, HeadingLevel, WidthType, BorderStyle,
  ShadingType, PageOrientation, LevelFormat,
} = require("docx");
const fs = require("fs");

// ---------- Paleta (scenes/copywriting.md, tons academicos) ----------
const P = {
  primary: "1A1A1A",
  body: "333333",
  secondary: "666666",
  accent: "D85435",      // bordas e destaques (warm, versionado do E85D3A p/ contraste)
  accentLight: "F6E9E3", // fundo do cabecalho das tabelas
  innerLine: "D9D9D9",
};
const FONT = { ascii: "Calibri", eastAsia: "Microsoft YaHei" };

// ---------- Helpers ----------
const t = (text, o = {}) =>
  new TextRun({
    text,
    font: FONT,
    size: o.size ?? 22,
    color: o.color ?? P.body,
    bold: o.bold ?? false,
    italics: o.italics ?? false,
  });

const para = (children, o = {}) =>
  new Paragraph({
    alignment: o.align ?? AlignmentType.LEFT,
    spacing: { before: o.before ?? 0, after: o.after ?? 160, line: o.line ?? 400 },
    keepNext: o.keepNext ?? false,
    children: Array.isArray(children) ? children : [children],
  });

const h1 = (text, keepNext = false) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 300, after: 160, line: 400 },
    keepNext,
    children: [new TextRun({ text, bold: true, size: 28, color: P.primary, font: FONT })],
  });

const caption = (text) =>
  para(t(text, { bold: true, size: 20, color: P.secondary }), { keepNext: true, after: 100 });

const makeFooter = () =>
  new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { line: 240 },
        children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: P.secondary, font: FONT })],
      }),
    ],
  });

const cell = (children, o = {}) =>
  new TableCell({
    width: { size: o.w, type: WidthType.PERCENTAGE },
    margins: { top: 60, bottom: 60, left: 120, right: 120 },
    ...(o.fill ? { shading: { type: ShadingType.CLEAR, fill: o.fill } } : {}),
    children,
  });

const cellP = (runs, o = {}) =>
  new Paragraph({
    alignment: o.align ?? AlignmentType.LEFT,
    spacing: { after: o.after ?? 60, line: o.line ?? 280 },
    children: Array.isArray(runs) ? runs : [runs],
  });

const tableBorders = {
  top: { style: BorderStyle.SINGLE, size: 6, color: P.accent },
  bottom: { style: BorderStyle.SINGLE, size: 6, color: P.accent },
  left: { style: BorderStyle.NONE },
  right: { style: BorderStyle.NONE },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: P.innerLine },
  insideVertical: { style: BorderStyle.NONE },
};

// Celula de narracao: segmentos string = fala normal | {p:"2 s"} = pausa | {dir:"..."} = direcao de acao
function narrCell(segments) {
  const paras = [];
  let cur = [];
  const flush = () => {
    if (cur.length) {
      paras.push(new Paragraph({ spacing: { after: 100, line: 280 }, children: cur }));
      cur = [];
    }
  };
  for (const s of segments) {
    if (typeof s === "string") {
      cur.push(new TextRun({ text: s, size: 21, color: P.body, font: FONT }));
    } else if (s.dir) {
      flush();
      paras.push(
        new Paragraph({
          spacing: { after: 100, line: 280 },
          children: [new TextRun({ text: s.dir, size: 19, color: P.secondary, italics: true, font: FONT })],
        })
      );
    } else if (s.p) {
      cur.push(new TextRun({ text: " [pausa " + s.p + "] ", size: 19, color: P.secondary, italics: true, font: FONT }));
    }
  }
  flush();
  return paras;
}

// ---------- Secao 1: conteudo (retrato) ----------
const fichaRows = [
  ["Duracao alvo", "6 minutos e 30 segundos (janela de entrega: 5 a 7 minutos)"],
  ["Numero de cenas", "6 cenas — roteiro completo na Secao 4 deste documento"],
  ["O que gravar", "Tela do dashboard SAD ENCCEJA (Next.js em http://localhost:3000) com narracao do proprio estudante"],
  ["Roteiro de fala", "Texto pronto na coluna Narracao (fala completa); pode ser lido, desde que com naturalidade"],
  ["Ferramentas sugeridas", "OBS Studio (gratuito) ou Xbox Game Bar / Loom para captura; headset ou microfone de celular"],
  ["Formato de entrega", "MP4 1080p — nome de arquivo sugerido: AV1_SAD_ENCCEJA_NomeSobrenome.mp4"],
];

const numerosRows = [
  ["Registros da base gerada", "60.000 participantes (dados sinteticos, layout oficial INEP ENCCEJA 2024)"],
  ["Participantes na modelagem", "36.059 — treino 28.847 e teste 7.212"],
  ["Algoritmo final", "K-NN com K = 21 vizinhos, distancia de Manhattan e peso por proximidade (distance)"],
  ["Busca de hiperparametros", "28 configuracoes avaliadas por validacao cruzada em 5 partes (CV)"],
  ["Erro medio absoluto global (MAE)", "16,7 pontos (RMSE global 21,1)"],
  ["Acuracia da classificacao de aprovacao", "71,5% (71,45%)"],
  ["Nota de corte por area", "100 em escala de 0 a 200"],
  ["Amostra carregada no dashboard", "2.937 registros"],
  ["Taxa de aprovacao media na base", "cerca de 38% por area de certificacao"],
  ["Niveis de recomendacao", "3 — risco ALTO, MODERADO e BAIXO"],
];

const infoTable = (rows, w1, grid) =>
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: grid,
    borders: tableBorders,
    rows: [
      ...rows.map(
        (r, idx) =>
          new TableRow({
            ...(idx === 0 ? { tableHeader: true } : {}),
            cantSplit: true,
            children: [
              cell([cellP(t(r[0], { bold: true, size: 21, color: P.primary }), { line: 280 })], { w: w1 }),
              cell([cellP(t(r[1], { size: 21 }), { line: 280 })], { w: 100 - w1 }),
            ],
          })
      ),
    ],
  });

const secao1 = [
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60, line: 420, lineRule: "atLeast" },
    children: [new TextRun({ text: "ROTEIRO DE VÍDEO — AV1", bold: true, size: 36, color: P.primary, font: FONT })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80, line: 320 },
    children: [
      t("Sistema de Apoio à Decisão baseado em K-NN · Microdados ENCCEJA 2024 (INEP)", { size: 24, color: P.body, bold: true }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200, line: 300 },
    children: [
      t("Disciplina: Sistemas de Apoio à Decisão · Estudante: 【Nome do estudante】 · Curso: 【Curso】 · Data: 【__/__/____】", {
        size: 20,
        color: P.secondary,
      }),
    ],
  }),
  para(
    t(
      "Este documento é o roteiro de produção do vídeo de apresentação da AV1. Ele está organizado em três partes: a ficha do vídeo, com duração e formato de entrega; a preparação do ambiente, com o checklist do que deve estar pronto antes de iniciar a captura; e o roteiro cena a cena, com o texto completo da fala, as ações na tela e dicas de gravação. Os números citados ao longo da fala foram extraídos dos artefatos oficiais do projeto e estão consolidados na Seção 3 para consulta rápida.",
      { size: 21 }
    ),
    { after: 160, line: 360 }
  ),
  h1("1. Ficha do vídeo", true),
  caption("Tabela 1 — Ficha técnica do vídeo"),
  // Retrato A4: largura util = 11906 - 1701 - 1417 = 8788 twips -> 30% / 70%
  infoTable(fichaRows, 30, [2636, 6152]),
  h1("2. Preparação antes de gravar"),
  para(
    t(
      "Siga o checklist abaixo na ordem apresentada. Cada item elimina uma causa comum de retrabalho em gravações de tela: servidor desligado, notificações inesperadas, áudio baixo e falhas de tempo. Reserve cerca de dez minutos para a preparação completa e apenas inicie a gravação definitiva depois de marcar todos os itens.",
      { size: 21 }
    ),
    { after: 180, line: 360 }
  ),
  ...[
    "Rode o dashboard: na pasta dashboard_encceja_nextjs, execute npm install (apenas na primeira vez) e depois npm run dev; abra http://localhost:3000 no Chrome ou no Edge.",
    "Deixe as cinco abas prontas — Visão Geral, Simulador K-NN, Recomendação, Análise Exploratória e Modelo & Métricas — e teste os dois botões de exemplo do simulador antes de gravar.",
    "Configure o navegador: zoom entre 100% e 125%, barra de favoritos oculta, janela do navegador em tela cheia (F11).",
    "Elimine interrupções: feche aplicativos de mensagens, ative o modo Não Perturbe e silencie o celular.",
    "Teste o microfone: grave dez segundos, ouça o resultado e ajuste a distância (quinze a vinte centímetros da boca).",
    "Configure a captura: OBS Studio, Xbox Game Bar ou Loom, em 1920×1080 e 30 quadros por segundo, capturando a tela do navegador e o microfone.",
    "Faça um ensaio cronometrado com a Seção 4 e ajuste as frases que travarem antes da gravação final.",
  ].map(
    (item) =>
      new Paragraph({
        numbering: { reference: "prep-list", level: 0 },
        alignment: AlignmentType.LEFT,
        spacing: { after: 60, line: 360 },
        children: [t(item, { size: 21 })],
      })
  ),
  h1("3. Números oficiais do modelo (cite sem errar)"),
  para(
    t("Fonte: modelos/metadados_modelo.json e export/metricas_modelo.json, gerados pelo pipeline entregue. Se o modelo for retreinado, confirme os valores nestes arquivos antes de gravar.", {
      size: 19,
      color: P.secondary,
      italics: true,
    }),
    { after: 100, line: 280 }
  ),
  caption("Tabela 2 — Valores exatos para citar durante a fala"),
  infoTable(numerosRows, 42, [3691, 5097]),
];

// ---------- Secao 2: roteiro de cenas (paisagem) ----------
const sceneHeader = new TableRow({
  tableHeader: true,
  cantSplit: true,
  children: [
    ["Cena", 12], ["Tempo", 8], ["Na tela (o que mostrar)", 18], ["Narração (o que falar)", 44], ["Dica de gravação", 18],
  ].map(([txt, w]) =>
    cell([cellP(t(txt, { bold: true, size: 20, color: P.primary }), { line: 260, after: 0 })], { w, fill: P.accentLight })
  ),
});

const cenas = [
  {
    n: "1",
    nome: "Abertura",
    tempo: "0:00 – 0:45",
    dur: "45 s",
    tela: [
      "Slide simples de abertura (título, nome, disciplina) ou a aba Visão Geral parada no dashboard.",
      "Falar olhando para a câmera ou para o slide.",
    ],
    narr: [
      "Olá! Meu nome é 【Nome do estudante】, sou estudante de 【Curso】 e esta é a minha apresentação da AV1 da disciplina de Sistemas de Apoio à Decisão.",
      { p: "1 s" },
      "Neste vídeo, apresento um sistema de apoio à decisão construído com o algoritmo K-NN, os K Vizinhos Mais Próximos, aplicado aos microdados do ENCCEJA 2024, publicados pelo INEP.",
      { p: "1 s" },
      "O problema é o seguinte: como estimar, antes da prova, o desempenho esperado de um novo candidato à certificação, e como transformar essa estimativa em recomendações práticas para a gestão de um cursinho preparatório.",
    ],
    dica: "O áudio é o elemento mais importante: grave em ambiente silencioso e faça um teste de dez segundos antes. Sorria na abertura — isso aparece na voz.",
  },
  {
    n: "2",
    nome: "Base e Visão Geral",
    tempo: "0:45 – 1:45",
    dur: "60 s",
    tela: [
      "Aba Visão Geral.",
      "Passe o cursor devagar pelos indicadores; destaque o gráfico Taxa de aprovação por área e a Distribuição das notas.",
    ],
    narr: [
      "A base do sistema segue o layout oficial dos microdados do ENCCEJA 2024 e contém sessenta mil registros sintéticos de participantes — uma escolha metodológica que preserva o realismo estatístico e evita a exposição de dados pessoais reais. Cada registro traz as notas das quatro provas e da redação, a frequência e o perfil socioeconômico completo.",
      { p: "1 s" },
      "Nesta aba de Visão Geral, o gestor acompanha os indicadores-chave. Reparem na taxa de aprovação: ela gira em torno de trinta e oito por cento — ou seja, a maioria dos candidatos não conquista a certificação.",
      { p: "1 s" },
      "É justamente esse público que o sistema ajuda a identificar antes da prova, para que a intervenção pedagógica chegue a tempo.",
    ],
    dica: "Mova o mouse devagar e pare o cursor um segundo em cada gráfico que citar. Se o texto ficar pequeno, ajuste o zoom do navegador para 110%.",
  },
  {
    n: "3",
    nome: "Modelo K-NN",
    tempo: "1:45 – 3:00",
    dur: "75 s",
    tela: [
      "Aba Modelo & Métricas.",
      "Destaque os cartões de MAE e de acurácia e a explicação do algoritmo; se houver gráfico da busca de K, mostre-o rapidamente.",
    ],
    narr: [
      "O coração do sistema é o algoritmo K-NN. A ideia é direta: para estimar o desempenho de um novo candidato, o modelo busca na base histórica os participantes mais semelhantes a ele — os vizinhos — e usa o desempenho desses vizinhos como estimativa.",
      { p: "1 s" },
      "A seleção de hiperparâmetros testou vinte e oito configurações com validação cruzada em cinco partes, e a melhor combinação foi K igual a vinte e um vizinhos com distância de Manhattan. Na versão final adotamos, ainda, o peso por proximidade — uma decisão de negócio documentada — para que vizinhos mais parecidos tenham maior influência na previsão.",
      { p: "1 s" },
      "E o modelo é confiável? O erro médio absoluto global é de dezesseis vírgula sete pontos em uma escala de zero a duzentos, e o classificador de aprovação acerta setenta e um vírgula cinco por cento dos casos — um resultado sólido para um problema educacional de difícil previsão.",
    ],
    dica: "Esta é a cena mais técnica: fale um pouco mais devagar que o normal. Deixe a aba já aberta antes de iniciar a gravação.",
  },
  {
    n: "4",
    nome: "Simulador",
    tempo: "3:00 – 4:45",
    dur: "105 s",
    tela: [
      "Aba Simulador K-NN.",
      "Apresente o formulário; clique em Exemplo: alto risco e comente notas, gráfico previsto × vizinhos × corte e tabela de vizinhos; depois clique em Exemplo: favorável.",
    ],
    narr: [
      { dir: "Ação: clicar em Exemplo: alto risco e aguardar 2 segundos." },
      "Vamos à parte interativa: o simulador. Aqui o gestor descreve o perfil de um novo aluno — dados demográficos, certificação pretendida, escolaridade dos pais, renda, trabalho e frequência no cursinho. Começo por um perfil de risco: candidata de vinte e seis a trinta anos, com baixa renda, trabalhando em tempo integral e com frequência comprometida.",
      { p: "1 s" },
      "As notas previstas ficaram entre setenta e seis e oitenta e um pontos — bem abaixo do corte de cem em todas as áreas. Olhem o painel dos vinte e um vizinhos: perfis parecidos e apenas catorze por cento deles conquistaram a certificação. O veredito do sistema: alto risco de reprovação.",
      { dir: "Ação: clicar em Exemplo: favorável e aguardar 2 segundos." },
      "Agora mudo apenas o perfil: frequência alta, sem jornada integral e escolaridade dos pais maior.",
      { p: "2 s" },
      "As previsões sobem para a faixa de cento e quatro a cento e onze pontos, acima do corte. Mesma base, mesmo modelo — mudou o candidato, mudou a decisão.",
    ],
    dica: "Grave esta cena em duas tomadas separadas (uma por clique) e junte na edição. Nunca clique e fale ao mesmo tempo: primeiro clique, espere dois segundos, depois narre.",
  },
  {
    n: "5",
    nome: "Recomendação",
    tempo: "4:45 – 5:45",
    dur: "60 s",
    tela: [
      "Aba Recomendação (parecer e níveis de risco) e, em seguida, Análise Exploratória (renda × nota, trabalho, regiões).",
    ],
    narr: [
      "Prever a nota, por si só, não apoia a decisão — por isso o sistema converte a previsão em recomendações com três níveis de risco. Para o risco alto, a conduta sugerida é reforço intensivo nas áreas mais fracas e monitoramento semanal da frequência; no risco moderado, monitoramento dirigido; no risco baixo, manutenção do plano de estudos.",
      { p: "1 s" },
      "Na Análise Exploratória, o gestor investiga padrões da base — como renda, trabalho e região se relacionam com o desempenho — e ganha embasamento para decisões de política pedagógica: a quem destinar bolsas, onde alocar monitores e como priorizar a retenção de alunos em risco.",
    ],
    dica: "Role a página devagar. Se errar uma frase, pause três segundos e repita desde o início da frase — assim o corte fica fácil.",
  },
  {
    n: "6",
    nome: "Conclusão",
    tempo: "5:45 – 6:30",
    dur: "45 s",
    tela: ["Volte à aba Visão Geral ou ao slide inicial.", "Falar para a câmera."],
    narr: [
      "Concluindo: este trabalho entregou um Sistema de Apoio à Decisão completo, do dado bruto à recomendação gerencial. Percorremos o ciclo do dado — extração, transformação e preparação; treinamos e validamos o modelo K-NN; e traduzimos as previsões em três níveis de risco com ações práticas.",
      { p: "1 s" },
      "Os resultados — dezesseis vírgula sete de erro médio e setenta e um vírgula cinco por cento de acurácia — mostram que a semelhança entre candidatos é um sinal útil para antecipar o risco e direcionar recursos a quem mais precisa.",
      { p: "1 s" },
      "O código, a base e a documentação acompanham esta entrega. Obrigado!",
    ],
    dica: "Encerre com calma: depois da última palavra, conte dois segundos em silêncio antes de parar a gravação — isso facilita o corte final.",
  },
];

// Paisagem A4: largura util = 16838 - 1134*2 = 14570 twips -> [12%, 8%, 18%, 44%, 18%]
const SCENE_GRID = [1748, 1166, 2623, 6410, 2623];
const sceneTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  columnWidths: SCENE_GRID,
  borders: tableBorders,
  rows: [
    sceneHeader,
    ...cenas.map(
      (c) =>
        new TableRow({
          cantSplit: true,
          children: [
            cell(
              [
                cellP(t(c.n, { bold: true, size: 30, color: P.accent }), { align: AlignmentType.CENTER, after: 20, line: 300 }),
                cellP(t(c.nome, { bold: true, size: 18, color: P.primary }), { align: AlignmentType.CENTER, after: 0, line: 220 }),
              ],
              { w: 12 }
            ),
            cell(
              [
                cellP(t(c.tempo, { bold: true, size: 20, color: P.primary }), { after: 20, line: 260 }),
                cellP(t(c.dur, { size: 18, color: P.secondary }), { after: 0, line: 220 }),
              ],
              { w: 8 }
            ),
            cell(c.tela.map((x, i) => cellP(t(x, { size: 20 }), { after: i === c.tela.length - 1 ? 0 : 80, line: 260 })), { w: 18 }),
            cell(narrCell(c.narr), { w: 44 }),
            cell([cellP(t(c.dica, { size: 19, color: P.secondary }), { after: 0, line: 260 })], { w: 18 }),
          ],
        })
    ),
  ],
});

const secao2 = [
  h1("4. Roteiro cena a cena", true),
  para(
    t(
      "A tabela abaixo é o coração deste documento e deve ser seguida cena por cena durante a gravação. A coluna Tempo traz o intervalo acumulado previsto, que soma cerca de seis minutos e meio; variações de alguns segundos são aceitáveis. Na coluna Narração, a fala está completa e pronta para leitura: as pausas aparecem entre colchetes e as direções de ação em itálico — direções não são faladas. A coluna de dicas concentra cuidados específicos de cada cena, como a sequência de cliques do simulador.",
      { size: 21 }
    ),
    { after: 160, line: 360 }
  ),
  caption("Tabela 3 — Roteiro completo de gravação (6 cenas)"),
  sceneTable,
  h1("5. Depois da gravação"),
  para(
    t(
      "Assista ao vídeo completo uma vez antes de editar, verificando três pontos: áudio audível do início ao fim, números citados em conformidade com a Seção 3 e ausência de notificações ou abas estranhas na captura. Em seguida, faça a edição leve: remova silêncios longos, cliques ruidosos e eventuais repetições — a cena 4 foi planejada em duas tomadas justamente para facilitar esse corte. Não é necessário inserir música ou efeitos; a avaliação valoriza clareza e objetividade.",
      { size: 21 }
    ),
    { after: 160, line: 360 }
  ),
  para(
    t(
      "Exporte em MP4 na resolução 1920×1080 com o nome de arquivo AV1_SAD_ENCCEJA_NomeSobrenome.mp4 e envie pelo ambiente da instituição: 【ambiente de entrega — ex.: Moodle, Teams ou e-mail do professor】. Guarde uma cópia do vídeo e deste roteiro até a divulgação da nota. O tempo total de fala do roteiro é de aproximadamente 830 palavras, o que corresponde a cerca de seis minutos e meio em ritmo acadêmico, dentro da janela de cinco a sete minutos.",
      { size: 21 }
    ),
    { after: 160, line: 360 }
  ),
  para(
    t("Observação: as marcações de pausa e as direções em itálico não devem ser lidas em voz alta; elas existem apenas para dar ritmo à gravação e sincronizar a fala com as ações na tela.", {
      size: 19,
      color: P.secondary,
      italics: true,
    }),
    { before: 60, after: 0, line: 280 }
  ),
];

// ---------- Montagem ----------
const doc = new Document({
  creator: "SAD ENCCEJA",
  title: "Roteiro de Vídeo — SAD ENCCEJA com K-NN (AV1)",
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 22, color: P.body },
        paragraph: { spacing: { line: 400 } },
      },
      heading1: {
        run: { font: FONT, size: 28, bold: true, color: P.primary },
        paragraph: { spacing: { before: 420, after: 180, line: 400 } },
      },
    },
  },
  numbering: {
    config: [
      {
        reference: "prep-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, bottom: 1440, left: 1701, right: 1417 },
        },
      },
      footers: { default: makeFooter() },
      children: secao1,
    },
    {
      properties: {
        page: {
          size: { width: 16838, height: 11906, orientation: PageOrientation.LANDSCAPE },
          margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 },
        },
      },
      footers: { default: makeFooter() },
      children: secao2,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("/home/z/my-project/download/Roteiro_Video_AV1_SAD_ENCCEJA.docx", buf);
  console.log("OK: Roteiro_Video_AV1_SAD_ENCCEJA.docx gerado (" + buf.length + " bytes)");
});
