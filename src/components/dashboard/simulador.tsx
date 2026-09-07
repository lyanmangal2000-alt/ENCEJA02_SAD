"use client";

/**
 * MÓDULO 2 — SIMULADOR K-NN
 * Formulário do perfil do candidato → notas previstas → k vizinhos mais
 * próximos → comparação visual. O K-NN roda no navegador (src/lib/knn.ts),
 * replicando a codificação, padronização e pesos do pipeline Python.
 */

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Search, Wand2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

import {
  MAP_CERTIFICACAO,
  MAP_ESCOLARIDADE,
  MAP_FAIXA_ETARIA,
  MAP_RENDA,
  MAP_TRABALHO,
  ROTULOS_AREAS,
  UFS,
  CORTE,
  executarKNN,
  gerarRecomendacao,
  type PerfilCandidato,
  type ResultadoKNN,
  type Parecer,
} from "@/lib/knn";
import {
  BadgeNivel,
  CORES,
  CORES_AREAS,
  eixoTick,
  tooltipItemStyle,
  tooltipLabelStyle,
  tooltipStyle,
} from "./ui-bits";

const FAIXAS = Object.entries(MAP_FAIXA_ETARIA);
const TRABALHOS = Object.values(MAP_TRABALHO);
const RENDAS = Object.values(MAP_RENDA);
const ESCOLARIDADES = Object.values(MAP_ESCOLARIDADE);

export type ResultadoSimulacao = {
  perfil: PerfilCandidato;
  knn: ResultadoKNN;
  parecer: Parecer;
};

// Presets para demonstração (roteiro do vídeo: 2 perfis em contraste)
const PRESET_ALTO_RISCO: PerfilCandidato = {
  sexo: "F",
  faixa: 10,
  uf: "PA",
  cert: 1,
  trabalho: "Trabalha 40h ou mais semanais",
  renda: "Até 1 salário mínimo",
  escolaridade: "Fundamental incompleto",
  k: 21,
};

const PRESET_FAVORAVEL: PerfilCandidato = {
  sexo: "M",
  faixa: 11,
  uf: "SP",
  cert: 2,
  trabalho: "Não trabalha",
  renda: "Mais de 10 salários mínimos",
  escolaridade: "Superior completo",
  k: 21,
};

export function Simulador({
  kPadrao,
  aoSimular,
  resultadoExterno,
}: {
  kPadrao: number;
  aoSimular: (r: ResultadoSimulacao) => void;
  resultadoExterno: ResultadoSimulacao | null;
}) {
  const [perfil, setPerfil] = useState<PerfilCandidato>({
    sexo: "F",
    faixa: 10,
    uf: "SP",
    cert: 2,
    trabalho: "Trabalha de 26 a 39h semanais",
    renda: "De 1 a 2 salários mínimos",
    escolaridade: "Médio incompleto",
    k: kPadrao,
  });
  const [resultado, setResultado] = useState<ResultadoSimulacao | null>(
    resultadoExterno,
  );

  const atualizar = <K extends keyof PerfilCandidato>(
    campo: K,
    valor: PerfilCandidato[K],
  ) => setPerfil((p) => ({ ...p, [campo]: valor }));

  const simular = () => {
    const knn = executarKNN(perfil);
    const parecer = gerarRecomendacao(knn);
    const r = { perfil, knn, parecer };
    setResultado(r);
    aoSimular(r);
  };

  const aplicarPreset = (p: PerfilCandidato) => {
    setPerfil(p);
    const knn = executarKNN(p);
    const parecer = gerarRecomendacao(knn);
    const r = { perfil: p, knn, parecer };
    setResultado(r);
    aoSimular(r);
  };

  const areas = Object.keys(ROTULOS_AREAS);

  return (
    <div className="grid gap-5 lg:grid-cols-[380px_1fr]">
      {/* ------------------------------------------------ FORMULÁRIO */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="mb-1 flex items-center gap-2">
          <Wand2 size={16} className="text-emerald-400" />
          <h3 className="text-sm font-semibold text-slate-100">
            Perfil do novo candidato
          </h3>
        </div>
        <p className="mb-4 text-xs text-slate-400">
          Dados coletados na matrícula. O sistema busca no histórico os
          candidatos mais semelhantes e estima o desempenho esperado.
        </p>

        <div className="space-y-4">
          {/* Presets de demonstração */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => aplicarPreset(PRESET_ALTO_RISCO)}
              className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300 transition hover:bg-rose-500/20"
            >
              Exemplo: alto risco
            </button>
            <button
              onClick={() => aplicarPreset(PRESET_FAVORAVEL)}
              className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20"
            >
              Exemplo: favorável
            </button>
          </div>

          <Campo rotulo="Sexo">
            <div className="grid grid-cols-2 gap-2">
              {(["F", "M"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => atualizar("sexo", s)}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    perfil.sexo === s
                      ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-300"
                      : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {s === "F" ? "Feminino" : "Masculino"}
                </button>
              ))}
            </div>
          </Campo>

          <Campo rotulo="Faixa etária">
            <select
              value={perfil.faixa}
              onChange={(e) => atualizar("faixa", Number(e.target.value))}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60"
            >
              {FAIXAS.map(([cod, rot]) => (
                <option key={cod} value={cod}>
                  {rot}
                </option>
              ))}
            </select>
          </Campo>

          <Campo rotulo="Unidade da Federação da prova">
            <select
              value={perfil.uf}
              onChange={(e) => atualizar("uf", e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60"
            >
              {UFS.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </Campo>

          <Campo rotulo="Certificação pretendida">
            <div className="grid grid-cols-2 gap-2">
              {([1, 2] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => atualizar("cert", c)}
                  className={`rounded-lg border px-3 py-2 text-xs transition ${
                    perfil.cert === c
                      ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-300"
                      : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {MAP_CERTIFICACAO[c]}
                </button>
              ))}
            </div>
          </Campo>

          <Campo rotulo="Situação de trabalho">
            <select
              value={perfil.trabalho}
              onChange={(e) => atualizar("trabalho", e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60"
            >
              {TRABALHOS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Campo>

          <Campo rotulo="Renda familiar">
            <select
              value={perfil.renda}
              onChange={(e) => atualizar("renda", e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60"
            >
              {RENDAS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Campo>

          <Campo rotulo="Escolaridade anterior">
            <select
              value={perfil.escolaridade}
              onChange={(e) => atualizar("escolaridade", e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60"
            >
              {ESCOLARIDADES.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </Campo>

          <Campo rotulo={`k — vizinhos consultados: ${perfil.k}`}>
            <input
              type="range"
              min={3}
              max={41}
              step={2}
              value={perfil.k}
              onChange={(e) => atualizar("k", Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
          </Campo>

          <button
            onClick={simular}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <Search size={16} />
            Prever desempenho
          </button>
        </div>
      </section>

      {/* ------------------------------------------------ RESULTADO */}
      {!resultado ? (
        <section className="flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-8">
          <div className="max-w-sm text-center">
            <Search size={36} className="mx-auto text-slate-600" />
            <h3 className="mt-3 text-base font-semibold text-slate-300">
              Aguardando um perfil
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Preencha o formulário e clique em <b>Prever desempenho</b> — ou use
              um dos exemplos rápidos para comparar um perfil de alto risco com
              um favorável.
            </p>
          </div>
        </section>
      ) : (
        <ResultadoSimulador resultado={resultado} />
      )}
    </div>
  );
}

function Campo({ rotulo, children }: { rotulo: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-300">
        {rotulo}
      </span>
      {children}
    </label>
  );
}

function ResultadoSimulador({ resultado }: { resultado: ResultadoSimulacao }) {
  const { perfil, knn, parecer } = resultado;
  const areas = Object.keys(ROTULOS_AREAS);

  const dadosBarras = areas.map((a) => ({
    area: ROTULOS_AREAS[a],
    Previsto: Math.round(knn.notasPrevistas[a] * 10) / 10,
    "Média dos vizinhos": Math.round(knn.mediaVizinhos[a] * 10) / 10,
  }));

  const dadosRadar = areas.map((a) => ({
    area: ROTULOS_AREAS[a],
    Previsto: knn.notasPrevistas[a],
    "Média dos vizinhos": knn.mediaVizinhos[a],
  }));

  return (
    <div className="space-y-5">
      {/* Notas previstas */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {areas.map((a) => {
          const corte = a === "NU_NOTA_REDACAO" ? CORTE.redacao : CORTE.objetiva;
          const nota = knn.notasPrevistas[a];
          const acima = nota >= corte;
          return (
            <div
              key={a}
              className={`rounded-xl border p-3 text-center ${
                acima
                  ? "border-emerald-500/40 bg-emerald-500/5"
                  : "border-amber-500/40 bg-amber-500/5"
              }`}
            >
              <p className="text-[11px] text-slate-400">{ROTULOS_AREAS[a]}</p>
              <p
                className={`mt-0.5 text-2xl font-bold tabular-nums ${
                  acima ? "text-emerald-400" : "text-amber-400"
                }`}
              >
                {nota.toFixed(0)}
              </p>
              <p className="mt-0.5 flex items-center justify-center gap-1 text-[10px] text-slate-500">
                {acima ? (
                  <CheckCircle2 size={10} className="text-emerald-500" />
                ) : (
                  <XCircle size={10} className="text-amber-500" />
                )}
                corte {corte.toFixed(0)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Comparação + radar */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Previsto × média dos vizinhos × corte
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            {perfil.k} vizinhos mais próximos · pesos por proximidade
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosBarras} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="area" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} domain={[0, 180]} />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.08)" }}
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                />
                <ReferenceLine y={100} stroke={CORES.vermelho} strokeDasharray="5 4" />
                <Bar dataKey="Previsto" fill={CORES.esmeralda} radius={[5, 5, 0, 0]} maxBarSize={28} />
                <Bar dataKey="Média dos vizinhos" fill={CORES.cinza} radius={[5, 5, 0, 0]} maxBarSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-emerald-500" /> Previsto
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-slate-500" /> Média dos vizinhos
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-0.5 bg-red-500" /> Corte 100
            </span>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-slate-100">
            Radar comparativo
          </h3>
          <p className="mb-3 text-xs text-slate-400">
            Perfil previsto × perfil médio do grupo semelhante
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={dadosRadar} outerRadius="78%">
                <PolarGrid stroke={CORES.grid} />
                <PolarAngleAxis dataKey="area" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                <PolarRadiusAxis angle={90} domain={[0, 180]} tick={{ fill: "#475569", fontSize: 9 }} />
                <Radar
                  name="Previsto"
                  dataKey="Previsto"
                  stroke={CORES.esmeralda}
                  fill={CORES.esmeralda}
                  fillOpacity={0.35}
                />
                <Radar
                  name="Média dos vizinhos"
                  dataKey="Média dos vizinhos"
                  stroke={CORES.cinzaClaro}
                  fill={CORES.cinzaClaro}
                  fillOpacity={0.12}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Previsto
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-400" /> Média dos vizinhos
            </span>
          </div>
        </section>
      </div>

      {/* Resumo do parecer — versão compacta (completo na aba Recomendação) */}
      <section
        className={`rounded-xl border p-5 ${
          parecer.nivel === "ALTO"
            ? "border-rose-500/40 bg-rose-500/5"
            : parecer.nivel === "MODERADO"
              ? "border-amber-500/40 bg-amber-500/5"
              : "border-emerald-500/40 bg-emerald-500/5"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <BadgeNivel nivel={parecer.nivel} />
          <button
            onClick={() => {
              const evento = new CustomEvent("ir-para-recomendacao");
              window.dispatchEvent(evento);
            }}
            className="flex items-center gap-1 text-xs font-medium text-slate-300 underline-offset-2 hover:underline"
          >
            Ver parecer completo <ArrowRight size={12} />
          </button>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-100">{parecer.titulo}</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{parecer.resumo}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
          <b className="text-slate-400">Justificativa:</b> {parecer.justificativa}
        </p>
      </section>

      {/* Tabela de vizinhos */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-slate-100">
          👥 {perfil.k} vizinhos mais próximos do perfil
        </h3>
        <p className="mb-3 text-xs text-slate-400">
          Candidatos reais da base histórica (conjunto de treino) com perfil
          socioeconômico mais semelhante — notas reais e aprovação efetiva.
        </p>
        <div className="max-h-96 overflow-y-auto rounded-lg border border-slate-800">
          <table className="w-full min-w-[860px] text-left text-xs">
            <thead className="sticky top-0 bg-slate-900 text-[10px] uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-3 py-2.5">Sexo</th>
                <th className="px-3 py-2.5">Idade</th>
                <th className="px-3 py-2.5">UF</th>
                <th className="px-3 py-2.5">Renda</th>
                <th className="px-3 py-2.5">Trabalho</th>
                {areas.map((a) => (
                  <th key={a} className="px-3 py-2.5 text-right">
                    {ROTULOS_AREAS[a]}
                  </th>
                ))}
                <th className="px-3 py-2.5 text-center">Certif.</th>
                <th className="px-3 py-2.5 text-right">Dist.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {knn.vizinhos.map((v, i) => (
                <tr key={`${v.registro.id}-${i}`} className="text-slate-300 transition hover:bg-slate-800/40">
                  <td className="px-3 py-2">{v.registro.sexo === "F" ? "Fem." : "Masc."}</td>
                  <td className="px-3 py-2">{MAP_FAIXA_ETARIA[v.registro.faixa]}</td>
                  <td className="px-3 py-2">{v.registro.uf}</td>
                  <td className="px-3 py-2">{v.registro.renda}</td>
                  <td className="px-3 py-2">{v.registro.trabalho}</td>
                  {areas.map((a) => (
                    <td key={a} className="px-3 py-2 text-right tabular-nums">
                      {v.registro.notas[a].toFixed(1)}
                    </td>
                  ))}
                  <td className="px-3 py-2 text-center">
                    {v.certificacaoProvavel ? (
                      <CheckCircle2 size={14} className="mx-auto text-emerald-400" />
                    ) : (
                      <XCircle size={14} className="mx-auto text-rose-400" />
                    )}
                  </td>
                  <td className="px-3 py-2 text-right tabular-nums text-slate-500">
                    {v.distancia.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-slate-500">
          A coluna &quot;Certif.&quot; marca vizinhos aprovados em ≥ 3 das 4 áreas
          objetivas (certificação provável). {Math.round(knn.taxaAprovacaoVizinhos * 100)}%
          destes vizinhos conquistaram a certificação.
        </p>
      </section>
    </div>
  );
}
