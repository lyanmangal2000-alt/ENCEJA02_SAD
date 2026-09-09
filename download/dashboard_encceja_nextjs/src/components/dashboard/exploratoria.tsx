"use client";

/**
 * MÓDULO 4 — ANÁLISE EXPLORATÓRIA
 * Padrões da base histórica que justificam o perfil socioeconômico como
 * variável explicativa: renda, faixa etária, trabalho e UF.
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Info } from "lucide-react";

import { AGREGADOS } from "@/lib/knn";
import {
  CORES,
  Painel,
  eixoTick,
  tooltipItemStyle,
  tooltipLabelStyle,
  tooltipStyle,
} from "./ui-bits";

export function Exploratoria() {
  const agg = AGREGADOS;

  // Renda × nota média (por área) — gradiente socioeconômico
  const dadosRenda = agg.por_renda.map((r) => ({
    renda: r.renda_familiar
      .replace(" salários mínimos", " SM")
      .replace("De ", "")
      .replace("Até 1", "≤ 1"),
    Linguagens: r.media_NU_NOTA_LC,
    Matemática: r.media_NU_NOTA_MT,
    "C. Natureza": r.media_NU_NOTA_CN,
    "C. Humanas": r.media_NU_NOTA_CH,
    Redação: Math.round(r.media_redacao * 10) / 10,
    n: r.n,
  }));

  // Idade × aprovação (barra) + nota média (linha)
  const dadosIdade = agg.por_idade.map((g) => ({
    faixa: g.grupo_etario,
    "Taxa de aprovação": Math.round(g.taxa_aprovacao * 1000) / 10,
    "Nota média": Math.round(g.media_geral * 10) / 10,
    n: g.n,
  }));

  // Trabalho × nota média
  const dadosTrabalho = agg.por_trabalho.map((t) => ({
    trabalho: t.situacao_trabalho
      .replace("Trabalha ", "")
      .replace(" semanais", "")
      .replace("Não trabalha", "Não trabalha"),
    "Nota média (objetivas)": Math.round(t.media_geral * 10) / 10,
    "Taxa de aprovação": Math.round(t.taxa_aprovacao * 1000) / 10,
    n: t.n,
  }));

  // UF — top 8 e bottom 8 por nota média geral
  const ufsOrdenadas = [...agg.por_uf].sort(
    (a, b) =>
      (b.media_NU_NOTA_LC + b.media_NU_NOTA_MT + b.media_NU_NOTA_CN + b.media_NU_NOTA_CH) -
      (a.media_NU_NOTA_LC + a.media_NU_NOTA_MT + a.media_NU_NOTA_CN + a.media_NU_NOTA_CH),
  );
  const top8 = ufsOrdenadas.slice(0, 8);
  const bottom8 = ufsOrdenadas.slice(-8).reverse();
  const formataUF = (u: (typeof agg.por_uf)[number]) => ({
    uf: u.SG_UF_PROVA,
    "Nota média": Math.round(
      (u.media_NU_NOTA_LC + u.media_NU_NOTA_MT + u.media_NU_NOTA_CN + u.media_NU_NOTA_CH) / 4 * 10,
    ) / 10,
  });
  const dadosTop = top8.map(formataUF);
  const dadosBottom = bottom8.map(formataUF);

  // Heatmap região × área (grid colorido)
  const areasHeat = ["NU_NOTA_LC", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_CH", "media_redacao"];
  const rotulosHeat: Record<string, string> = {
    NU_NOTA_LC: "Linguagens",
    NU_NOTA_MT: "Matemática",
    NU_NOTA_CN: "C. Natureza",
    NU_NOTA_CH: "C. Humanas",
    media_redacao: "Redação (×10)",
  };
  const minMedia = 60;
  const maxMedia = 105;
  const corHeat = (v: number) => {
    // escala vermelho→ambar→esmeralda
    const t = Math.max(0, Math.min(1, (v - minMedia) / (maxMedia - minMedia)));
    const r = Math.round(254 * (1 - t) + 16 * t);
    const g = Math.round(120 * (1 - t) + 185 * t);
    const b = Math.round(90 * (1 - t) + 129 * t);
    return `rgba(${r}, ${g}, ${b}, ${0.18 + 0.72 * t})`;
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
        <Info size={16} className="mt-0.5 shrink-0 text-emerald-400" />
        <p className="text-xs leading-relaxed text-slate-400">
          Estes são os <b className="text-slate-300">padrões da base histórica</b>{" "}
          que justificam o modelo: notas crescem com a renda e com a
          escolaridade, decaem com a jornada de trabalho e variam por região e
          idade. O K-NN usa exatamente essas dimensões para encontrar vizinhos.
        </p>
      </div>

      <Painel
        titulo="Renda familiar × nota média"
        descricao="Média das notas por faixa de renda — o gradiente socioeconômico central do problema"
      >
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dadosRenda} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
              <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="renda"
                tick={eixoTick}
                axisLine={{ stroke: CORES.grid }}
                tickLine={false}
                angle={-18}
                textAnchor="end"
                height={48}
              />
              <YAxis tick={eixoTick} axisLine={false} tickLine={false} domain={[0, 130]} />
              <Tooltip
                cursor={{ fill: "rgba(148,163,184,0.08)" }}
                contentStyle={tooltipStyle}
                itemStyle={tooltipItemStyle}
                labelStyle={tooltipLabelStyle}
              />
              <Bar dataKey="Linguagens" fill={CORES.esmeralda} radius={[3, 3, 0, 0]} maxBarSize={22} />
              <Bar dataKey="Matemática" fill={CORES.ambar} radius={[3, 3, 0, 0]} maxBarSize={22} />
              <Bar dataKey="C. Natureza" fill={CORES.teal} radius={[3, 3, 0, 0]} maxBarSize={22} />
              <Bar dataKey="C. Humanas" fill={CORES.violeta} radius={[3, 3, 0, 0]} maxBarSize={22} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Painel>

      <div className="grid gap-5 lg:grid-cols-2">
        <Painel
          titulo="Faixa etária × aprovação e desempenho"
          descricao="Taxa de aprovação (barras, ≥3 áreas) e nota média (linha)"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={dadosIdade} margin={{ top: 8, right: 8, left: -18, bottom: 8 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="faixa"
                  tick={{ ...eixoTick, fontSize: 9 }}
                  axisLine={{ stroke: CORES.grid }}
                  tickLine={false}
                  angle={-20}
                  textAnchor="end"
                  height={44}
                />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} unit="%" domain={[0, 80]} />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.08)" }}
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                />
                <Bar dataKey="Taxa de aprovação" fill={CORES.teal} radius={[5, 5, 0, 0]} maxBarSize={40} />
                <Line
                  type="monotone"
                  dataKey="Nota média"
                  stroke={CORES.ambarClaro ?? "#fbbf24"}
                  strokeWidth={2}
                  dot={{ fill: "#fbbf24", r: 3 }}
                  yAxisId={0}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Painel>

        <Painel
          titulo="Situação de trabalho × desempenho"
          descricao="Quanto mais horas trabalhadas, menos tempo de estudo — padrão capturado pela variável"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosTrabalho} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} domain={[0, 110]} />
                <YAxis
                  type="category"
                  dataKey="trabalho"
                  tick={{ ...eixoTick, fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  width={110}
                />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.08)" }}
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                />
                <Bar dataKey="Nota média (objetivas)" radius={[0, 6, 6, 0]} maxBarSize={22}>
                  {dadosTrabalho.map((d, i) => (
                    <Cell
                      key={i}
                      fill={i === 0 ? CORES.esmeralda : i === dadosTrabalho.length - 1 ? CORES.rosa : CORES.teal}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Painel>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Painel titulo="Top 8 UFs por nota média" descricao="Média das 4 áreas objetivas">
          <GraficoUF dados={dadosTop} cor={CORES.esmeralda} />
        </Painel>
        <Painel titulo="8 UFs com menor nota média" descricao="Média das 4 áreas objetivas">
          <GraficoUF dados={dadosBottom} cor={CORES.rosa} />
        </Painel>
      </div>

      <Painel
        titulo="Mapa de calor — região × área"
        descricao="Média das notas por região (verde = acima, vermelho = abaixo)"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-1 text-center text-xs">
            <thead>
              <tr>
                <th className="px-2 py-1.5 text-left text-[10px] uppercase tracking-wider text-slate-500">
                  Região
                </th>
                {areasHeat.map((a) => (
                  <th key={a} className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-slate-500">
                    {rotulosHeat[a]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {agg.por_regiao.map((r) => (
                <tr key={r.regiao}>
                  <td className="px-2 py-1.5 text-left text-[11px] font-medium text-slate-300">
                    {r.regiao}
                  </td>
                  {areasHeat.map((a) => {
                    const valor = a === "media_redacao" ? r.media_redacao : r[a];
                    return (
                      <td
                        key={a}
                        className="rounded-md px-2 py-2.5 tabular-nums font-semibold text-slate-100"
                        style={{ background: corHeat(a === "media_redacao" ? valor * 10 : valor) }}
                      >
                        {a === "media_redacao" ? valor.toFixed(1) : valor.toFixed(0)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Painel>
    </div>
  );
}

function GraficoUF({ dados, cor }: { dados: { uf: string; "Nota média": number }[]; cor: string }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dados} layout="vertical" margin={{ top: 4, right: 24, left: -6, bottom: 0 }}>
          <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} domain={[0, 110]} />
          <YAxis type="category" dataKey="uf" tick={eixoTick} axisLine={false} tickLine={false} width={34} />
          <Tooltip
            cursor={{ fill: "rgba(148,163,184,0.08)" }}
            contentStyle={tooltipStyle}
            itemStyle={tooltipItemStyle}
            labelStyle={tooltipLabelStyle}
          />
          <Bar dataKey="Nota média" fill={cor} radius={[0, 6, 6, 0]} maxBarSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
