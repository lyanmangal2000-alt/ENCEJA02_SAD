"use client";

/**
 * MÓDULO 1 — VISÃO GERAL
 * KPIs da base histórica + gráficos de contexto (aprovação por área,
 * distribuição de notas, médias por região).
 */

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Users, GraduationCap, Award, Target, BookOpenCheck } from "lucide-react";

import { AGREGADOS, ROTULOS_AREAS } from "@/lib/knn";
import metricasJson from "@/data/metricas_modelo.json";
import {
  CORES,
  CORES_AREAS,
  KpiCard,
  Painel,
  eixoTick,
  tooltipItemStyle,
  tooltipLabelStyle,
  tooltipStyle,
} from "./ui-bits";

const METRICAS = metricasJson as unknown as {
  mae_global: number;
  melhor_config: { k: number; peso: string; metrica: string };
};

export function VisaoGeral() {
  const kpis = AGREGADOS.kpis;

  // Aprovação por área (objetivas)
  const aprovPorArea = [
    { area: "Linguagens", taxa: kpis.taxa_aprovacao.IN_APROVADO_LC, cor: CORES_AREAS.NU_NOTA_LC },
    { area: "Matemática", taxa: kpis.taxa_aprovacao.IN_APROVADO_MT, cor: CORES_AREAS.NU_NOTA_MT },
    { area: "C. da Natureza", taxa: kpis.taxa_aprovacao.IN_APROVADO_CN, cor: CORES_AREAS.NU_NOTA_CN },
    { area: "C. Humanas", taxa: kpis.taxa_aprovacao.IN_APROVADO_CH, cor: CORES_AREAS.NU_NOTA_CH },
  ];

  // Histograma das notas de Linguagens
  const histLC = AGREGADOS.histogramas.NU_NOTA_LC;
  const dadosHist = histLC.counts.map((c, i) => ({
    faixa: Math.round(histLC.edges[i]),
    candidatos: c,
  }));

  // Média por região × área
  const regioes = AGREGADOS.por_regiao.map((r) => ({
    regiao: r.regiao,
    Linguagens: r.NU_NOTA_LC,
    Matemática: r.NU_NOTA_MT,
    "C. da Natureza": r.NU_NOTA_CN,
    "C. Humanas": r.NU_NOTA_CH,
  }));

  // Média por área (cards)
  const mediasPorArea = Object.keys(ROTULOS_AREAS).map((a) => ({
    area: ROTULOS_AREAS[a],
    media: kpis.media_notas[a],
    cor: CORES_AREAS[a],
  }));

  return (
    <div className="space-y-5">
      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard
          rotulo="Candidatos presentes"
          valor={kpis.n_presentes.toLocaleString("pt-BR")}
          sub="pelo menos uma prova com nota"
          icone={<Users size={16} />}
        />
        <KpiCard
          rotulo="Exames completos"
          valor={kpis.n_exames_completos.toLocaleString("pt-BR")}
          sub={`${kpis.pct_exames_completos}% dos presentes`}
          icone={<GraduationCap size={16} />}
          destaque="esmeralda"
        />
        <KpiCard
          rotulo="Aprovação média (4 áreas)"
          valor={`${(aprovPorArea.reduce((a, b) => a + b.taxa, 0) / 4).toFixed(1)}%`}
          sub="corte oficial: 100 pts"
          icone={<Award size={16} />}
          destaque="ambar"
        />
        <KpiCard
          rotulo="MAE global do modelo"
          valor={`${METRICAS.mae_global.toFixed(1)} pts`}
          sub="erro absoluto médio no teste"
          icone={<Target size={16} />}
        />
      </div>

      {/* Notas médias por área */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {mediasPorArea.map((m) => (
          <div
            key={m.area}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-center"
          >
            <div className="flex items-center justify-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: m.cor }} />
              <p className="text-[11px] text-slate-400">{m.area}</p>
            </div>
            <p className="mt-1 text-xl font-bold tabular-nums text-slate-100">
              {m.media.toFixed(1)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Painel
          titulo="Taxa de aprovação por área"
          descricao="Percentual de candidatos presentes aprovados em cada prova (nota ≥ 100)"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aprovPorArea} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="area" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} unit="%" domain={[0, 60]} />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.08)" }}
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                  formatter={(v: number) => [`${Number(v).toFixed(1)}%`, "Aprovação"]}
                />
                <Bar dataKey="taxa" radius={[6, 6, 0, 0]} maxBarSize={52}>
                  {aprovPorArea.map((d) => (
                    <Cell key={d.area} fill={d.cor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Painel>

        <Painel
          titulo="Distribuição das notas — Linguagens e Códigos"
          descricao="Histograma da base histórica; linha vermelha = corte de aprovação (100)"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dadosHist} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradLC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CORES.esmeralda} stopOpacity={0.45} />
                    <stop offset="100%" stopColor={CORES.esmeralda} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="faixa" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                  formatter={(v: number) => [v.toLocaleString("pt-BR"), "Candidatos"]}
                  labelFormatter={(l) => `Nota ${l}`}
                />
                <Area
                  type="monotone"
                  dataKey="candidatos"
                  stroke={CORES.esmeralda}
                  strokeWidth={2}
                  fill="url(#gradLC)"
                />
                <ReferenceLine x={100} stroke={CORES.vermelho} strokeDasharray="5 4" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Painel>
      </div>

      <Painel
        titulo="Nota média por região e área"
        descricao="Gradiente regional do desempenho — um dos sinais que o K-NN captura pela UF"
      >
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regioes} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
              <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="regiao" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
              <YAxis tick={eixoTick} axisLine={false} tickLine={false} domain={[0, 110]} />
              <Tooltip
                cursor={{ fill: "rgba(148,163,184,0.08)" }}
                contentStyle={tooltipStyle}
                itemStyle={tooltipItemStyle}
                labelStyle={tooltipLabelStyle}
              />
              <ReferenceLine y={100} stroke={CORES.vermelho} strokeDasharray="5 4" />
              {Object.keys(ROTULOS_AREAS)
                .filter((a) => a !== "NU_NOTA_REDACAO")
                .map((a) => (
                  <Bar
                    key={a}
                    dataKey={ROTULOS_AREAS[a]}
                    fill={CORES_AREAS[a]}
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                  />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-400">
          <BookOpenCheck size={14} className="mt-0.5 shrink-0 text-emerald-400" />
          Estes padrões (efeito de renda, região e idade) justificam o uso do perfil
          socioeconômico como variável explicativa do K-NN — veja a Análise Exploratória.
        </p>
      </Painel>
    </div>
  );
}
