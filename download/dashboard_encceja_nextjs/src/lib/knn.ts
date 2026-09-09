/**
 * ============================================================================
 * K-NN EM TYPESCRIPT — réplica fiel do pipeline Python para o navegador
 * ============================================================================
 * A amostra (2.937 candidatos do conjunto de treino) e os parâmetros do
 * StandardScaler são exportados por treino_knn.py (dados_dashboard.json).
 * A codificação segue EXATAMENTE a ordem de features do ColumnTransformer:
 *   [0] renda_familiar (ordinal 0-6)
 *   [1] escolaridade_anterior (ordinal 0-5)
 *   [2] situacao_trabalho (ordinal 0-4)
 *   [3-4] TP_SEXO one-hot (F, M)
 *   [5-31] SG_UF one-hot (27 UFs em ordem alfabética)
 *   [32-33] certificacao one-hot
 *   [34] TP_FAIXA_ETARIA (numérico 1-19)
 * Distância: manhattan (métrica do modelo final) sobre features padronizadas.
 * Previsão: média ponderada pela inversa da distância (weights='distance').
 * ============================================================================
 */

import dados from "@/data/dados_dashboard.json";

export type Registro = {
  id: string;
  sexo: string;
  faixa: number;
  uf: string;
  cert: number;
  trabalho: string;
  renda: string;
  escolaridade: string;
  notas: Record<string, number>;
  aprov: Record<string, number>;
  vec: number[];
};

export type PerfilCandidato = {
  sexo: "F" | "M";
  faixa: number; // código 1-19
  uf: string;
  cert: 1 | 2;
  trabalho: string;
  renda: string;
  escolaridade: string;
  k: number;
};

// ---------------------------------------------------------------------------
// Mapeamentos (idênticos a src/config.py)
// ---------------------------------------------------------------------------

export const MAP_TRABALHO = {
  A: "Não trabalha",
  B: "Trabalha eventualmente",
  C: "Trabalha até 25h semanais",
  D: "Trabalha de 26 a 39h semanais",
  E: "Trabalha 40h ou mais semanais",
} as const;

export const MAP_RENDA = {
  A: "Nenhuma renda",
  B: "Até 1 salário mínimo",
  C: "De 1 a 2 salários mínimos",
  D: "De 2 a 3 salários mínimos",
  E: "De 3 a 5 salários mínimos",
  F: "De 5 a 10 salários mínimos",
  G: "Mais de 10 salários mínimos",
} as const;

export const MAP_ESCOLARIDADE = {
  A: "Sem escolaridade/Analfabeto",
  B: "Fundamental incompleto",
  C: "Fundamental completo",
  D: "Médio incompleto",
  E: "Médio completo",
  F: "Superior completo",
} as const;

export const MAP_FAIXA_ETARIA: Record<number, string> = {
  1: "Menor de 18 anos",
  2: "18 anos",
  3: "19 anos",
  4: "20 anos",
  5: "21 anos",
  6: "22 anos",
  7: "23 anos",
  8: "24 anos",
  9: "25 anos",
  10: "26 a 30 anos",
  11: "31 a 35 anos",
  12: "36 a 40 anos",
  13: "41 a 45 anos",
  14: "46 a 50 anos",
  15: "51 a 55 anos",
  16: "56 a 60 anos",
  17: "61 a 65 anos",
  18: "66 a 70 anos",
  19: "Maior de 70 anos",
};

export const MAP_CERTIFICACAO: Record<number, string> = {
  1: "Ensino Fundamental",
  2: "Ensino Médio",
};

export const ROTULOS_AREAS: Record<string, string> = {
  NU_NOTA_LC: "Linguagens",
  NU_NOTA_MT: "Matemática",
  NU_NOTA_CN: "C. da Natureza",
  NU_NOTA_CH: "C. Humanas",
  NU_NOTA_REDACAO: "Redação",
};

export const CORTE = { objetiva: 100, redacao: 5 };

export const UFS = [
  "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS",
  "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC",
  "SE", "SP", "TO",
];

// ---------------------------------------------------------------------------
// Índices das features (derivados dos nomes exportados — à prova de mudança
// de ordem no pipeline Python)
// ---------------------------------------------------------------------------

const FEATURE_NAMES = dados.scaler.feature_names as string[];
const MEAN = dados.scaler.mean as number[];
const SCALE = dados.scaler.scale as number[];

const IDX = {
  renda: FEATURE_NAMES.indexOf("renda_familiar"),
  escolaridade: FEATURE_NAMES.indexOf("escolaridade_anterior"),
  trabalho: FEATURE_NAMES.indexOf("situacao_trabalho"),
  faixa: FEATURE_NAMES.indexOf("TP_FAIXA_ETARIA"),
  sexoF: FEATURE_NAMES.indexOf("TP_SEXO_F"),
  sexoM: FEATURE_NAMES.indexOf("TP_SEXO_M"),
  certF: FEATURE_NAMES.indexOf("certificacao_Ensino Fundamental"),
  certM: FEATURE_NAMES.indexOf("certificacao_Ensino Médio"),
  ufs: Object.fromEntries(
    UFS.map((uf) => [uf, FEATURE_NAMES.indexOf(`SG_UF_PROVA_${uf}`)]),
  ) as Record<string, number>,
};

const TRABALHO_ORDENADO = Object.values(MAP_TRABALHO);
const RENDA_ORDENADA = Object.values(MAP_RENDA);
const ESC_ORDENADA = Object.values(MAP_ESCOLARIDADE);

// ---------------------------------------------------------------------------
// Codificação + normalização do perfil (idêntica ao pipeline)
// ---------------------------------------------------------------------------

export function codificarPerfil(p: PerfilCandidato): number[] {
  const raw = new Array(FEATURE_NAMES.length).fill(0);

  raw[IDX.renda] = RENDA_ORDENADA.indexOf(p.renda);
  raw[IDX.escolaridade] = ESC_ORDENADA.indexOf(p.escolaridade);
  raw[IDX.trabalho] = TRABALHO_ORDENADO.indexOf(p.trabalho);
  raw[IDX.faixa] = p.faixa;
  raw[p.sexo === "F" ? IDX.sexoF : IDX.sexoM] = 1;
  raw[IDX.ufs[p.uf]] = 1;
  raw[p.cert === 1 ? IDX.certF : IDX.certM] = 1;

  return raw.map((v, i) => (v - MEAN[i]) / SCALE[i]);
}

// ---------------------------------------------------------------------------
// K-NN (distância manhattan, pesos 1/distância — como o modelo final)
// ---------------------------------------------------------------------------

export type Vizinho = {
  registro: Registro;
  distancia: number;
  peso: number;
  certificacaoProvavel: boolean;
};

export type ResultadoKNN = {
  notasPrevistas: Record<string, number>;
  mediaVizinhos: Record<string, number>;
  vizinhos: Vizinho[];
  taxaAprovacaoVizinhos: number;
};

export function executarKNN(perfil: PerfilCandidato): ResultadoKNN {
  const vetor = codificarPerfil(perfil);
  const registros = dados.registros as Registro[];

  const scores = registros.map((r) => {
    let d = 0;
    for (let i = 0; i < vetor.length; i++) {
      d += Math.abs(vetor[i] - r.vec[i]);
    }
    return { registro: r, distancia: d };
  });

  scores.sort((a, b) => a.distancia - b.distancia);
  const top = scores.slice(0, perfil.k);

  const vizinhos: Vizinho[] = top.map((s) => ({
    registro: s.registro,
    distancia: s.distancia,
    // weights='distance' do sklearn: 1/d (d≈0 → peso máximo, correspondência exata)
    peso: 1 / Math.max(s.distancia, 1e-9),
    certificacaoProvavel:
      Object.values(s.registro.aprov).reduce((a, b) => a + b, 0) >= 3,
  }));

  const somaPesos = vizinhos.reduce((acc, v) => acc + v.peso, 0);

  const notasPrevistas: Record<string, number> = {};
  const mediaVizinhos: Record<string, number> = {};
  for (const area of Object.keys(ROTULOS_AREAS)) {
    notasPrevistas[area] =
      vizinhos.reduce((acc, v) => acc + v.registro.notas[area] * v.peso, 0) /
      somaPesos;
    mediaVizinhos[area] =
      vizinhos.reduce((acc, v) => acc + v.registro.notas[area], 0) /
      vizinhos.length;
  }

  const taxaAprovacaoVizinhos =
    vizinhos.filter((v) => v.certificacaoProvavel).length / vizinhos.length;

  return { notasPrevistas, mediaVizinhos, vizinhos, taxaAprovacaoVizinhos };
}

// ---------------------------------------------------------------------------
// Motor de recomendações (réplica de src/recomendacoes.py)
// ---------------------------------------------------------------------------

export type Parecer = {
  nivel: "ALTO" | "MODERADO" | "BAIXO";
  titulo: string;
  resumo: string;
  justificativa: string;
  disciplinasCriticas: {
    rotulo: string;
    notaPrevista: number;
    mediaVizinhos: number;
    abaixoCorte: boolean;
  }[];
  acoes: string[];
  indicadores: {
    nAbaixoCorte: number;
    nTotal: number;
    taxaAprovacaoVizinhos: number;
    nAbaixoMedia: number;
  };
};

const TOLERANCIA_GAP = 2.0; // pts — idêntica ao Python

export function gerarRecomendacao(r: ResultadoKNN): Parecer {
  const { notasPrevistas, mediaVizinhos, vizinhos, taxaAprovacaoVizinhos } = r;
  const areas = Object.keys(ROTULOS_AREAS);

  const cortes = areas.map((a) =>
    a === "NU_NOTA_REDACAO" ? CORTE.redacao : CORTE.objetiva,
  );
  const nAbaixoCorte = areas.filter(
    (a, i) => notasPrevistas[a] < cortes[i],
  ).length;
  const nTotal = areas.length;
  const prontidaoInsuficiente = nAbaixoCorte >= 3;
  const maioriaAprovada = taxaAprovacaoVizinhos >= 0.5;

  const nAbaixoMedia = areas.filter(
    (a) => notasPrevistas[a] < mediaVizinhos[a] - TOLERANCIA_GAP,
  ).length;

  const criticas = areas
    .map((a) => {
      const corte = a === "NU_NOTA_REDACAO" ? CORTE.redacao : CORTE.objetiva;
      const abaixoCorte = notasPrevistas[a] < corte;
      const gap = notasPrevistas[a] - mediaVizinhos[a];
      return { area: a, abaixoCorte, gap };
    })
    .filter((c) => c.abaixoCorte || c.gap <= -TOLERANCIA_GAP)
    .sort((x, y) => Number(y.abaixoCorte) - Number(x.abaixoCorte) || x.gap - y.gap)
    .map((c) => ({
      rotulo: ROTULOS_AREAS[c.area],
      notaPrevista: Math.round(notasPrevistas[c.area] * 10) / 10,
      mediaVizinhos: Math.round(mediaVizinhos[c.area] * 10) / 10,
      abaixoCorte: c.abaixoCorte,
    }));

  const pctTaxa = `${Math.round(taxaAprovacaoVizinhos * 100)}%`;

  let nivel: Parecer["nivel"];
  let titulo: string;
  let resumo: string;
  let acoesBase: string[];

  if (prontidaoInsuficiente && !maioriaAprovada) {
    nivel = "ALTO";
    titulo = "Alto risco de reprovação — reforço intensivo recomendado";
    resumo =
      `A nota prevista fica abaixo do corte de aprovação em ${nAbaixoCorte} das ` +
      `${nTotal} áreas, e apenas ${pctTaxa} dos vizinhos historicamente ` +
      `semelhantes conquistaram a certificação. Sem intervenção, a probabilidade ` +
      `de reprovação é alta.`;
    acoesBase = [
      "Matricular em turma de REFORÇO INTENSIVO desde o início do curso",
      "Designar tutor individual com acompanhamento semanal de desempenho",
      "Priorizar simulados diagnósticos quinzenais nas disciplinas críticas",
      "Reavaliar o plano de estudos após 4 semanas de reforço",
    ];
  } else if (!prontidaoInsuficiente && maioriaAprovada) {
    nivel = "BAIXO";
    titulo = "Perfil favorável — acompanhamento padrão";
    resumo =
      `A nota prevista fica acima do corte de aprovação na maioria das áreas ` +
      `(abaixo em apenas ${nAbaixoCorte} de ${nTotal}), e ${pctTaxa} dos vizinhos ` +
      `comparáveis obtiveram aprovação suficiente para certificação. O histórico ` +
      `indica bom prognóstico.`;
    acoesBase = [
      "Incluir em turma regular com acompanhamento padrão",
      "Manter ritmo de simulados e monitoria coletiva do cursinho",
      "Monitorar evolução nas avaliações internas mensais",
    ];
  } else {
    nivel = "MODERADO";
    titulo = "Caso intermediário — acompanhamento moderado com monitoramento";
    resumo =
      `O quadro é misto: a nota prevista fica abaixo do corte em ` +
      `${nAbaixoCorte} de ${nTotal} áreas, enquanto ${pctTaxa} dos vizinhos ` +
      `semelhantes foram aprovados. O perfil tem potencial de aprovação com apoio ` +
      `pontual — não exige reforço intensivo, mas não deve ficar sem atenção.`;
    acoesBase = [
      "Incluir em turma regular com MONITORIA DEDICADA nas disciplinas críticas",
      "Agendar acompanhamento pedagógico quinzenal",
      "Aplicar simulado diagnóstico no primeiro mês para reclassificar o risco",
    ];
  }

  const criticasTxt =
    criticas.length > 0
      ? `Priorizar reforço direcionado em: ${criticas.slice(0, 3).map((c) => c.rotulo).join(", ")}`
      : null;
  const acoes = criticasTxt ? [criticasTxt, ...acoesBase] : acoesBase;

  const comparativoViz =
    nAbaixoMedia > 0
      ? `em ${nAbaixoMedia} de ${nTotal} áreas a previsão fica visivelmente abaixo da média dos vizinhos`
      : "em nenhuma área a previsão fica muito abaixo da média dos vizinhos";

  const detalheCriticas =
    criticas.length > 0
      ? criticas
          .map((c) => {
            const isRed = c.rotulo === "Redação";
            return isRed
              ? `Redação prevista ${c.notaPrevista.toFixed(1)} (corte 5)`
              : `${c.rotulo} prevista ${Math.round(c.notaPrevista)} (corte 100; média dos vizinhos ${Math.round(c.mediaVizinhos)})`;
          })
          .join("; ")
      : "nenhuma disciplina abaixo do corte de aprovação";

  const justificativa =
    `Prontidão: aprovado(a) em ${nTotal - nAbaixoCorte} das ${nTotal} áreas pela ` +
    `previsão. Comparação com vizinhos: ${comparativoViz}. Disciplinas que exigem ` +
    `atenção: ${detalheCriticas}. Aproximadamente ${pctTaxa} dos ${vizinhos.length} ` +
    `vizinhos mais próximos conquistaram aprovação em pelo menos 3 das 4 áreas objetivas.`;

  return {
    nivel,
    titulo,
    resumo,
    justificativa,
    disciplinasCriticas: criticas,
    acoes,
    indicadores: {
      nAbaixoCorte,
      nTotal,
      taxaAprovacaoVizinhos,
      nAbaixoMedia,
    },
  };
}

// ---------------------------------------------------------------------------
// Acesso aos agregados pré-calculados pelo Python
// ---------------------------------------------------------------------------

export const AGREGADOS = dados.agregados;
export const ORIGEM_DADOS = dados.origem;
export const N_AMOSTRA = dados.n_amostra;
export const METRICAS = dados.agregados.kpis;
