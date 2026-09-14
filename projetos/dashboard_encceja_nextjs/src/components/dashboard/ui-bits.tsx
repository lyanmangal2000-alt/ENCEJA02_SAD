"use client";

/**
 * Elementos visuais compartilhados do dashboard (dark premium)
 */

import { ReactNode } from "react";

// Paleta dark premium — esmeralda + âmbar sobre slate profundo
export const CORES = {
  esmeralda: "#10b981",
  esmeraldaClaro: "#34d399",
  ambar: "#f59e0b",
  ambarClaro: "#fbbf24",
  rosa: "#f43f5e",
  vermelho: "#ef4444",
  teal: "#14b8a6",
  violeta: "#8b5cf6",
  cinza: "#64748b",
  cinzaClaro: "#94a3b8",
  grid: "#1e293b",
};

export const CORES_AREAS: Record<string, string> = {
  NU_NOTA_LC: CORES.esmeralda,
  NU_NOTA_MT: CORES.ambar,
  NU_NOTA_CN: CORES.teal,
  NU_NOTA_CH: CORES.violeta,
  NU_NOTA_REDACAO: CORES.rosa,
};

// Estilo padrão dos tooltips do Recharts (dark)
export const tooltipStyle = {
  backgroundColor: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "10px",
  color: "#e2e8f0",
  fontSize: "12px",
} as const;

export const tooltipItemStyle = { color: "#e2e8f0" } as const;
export const tooltipLabelStyle = { color: "#94a3b8" } as const;

// Eixos padrão
export const eixoTick = { fill: "#94a3b8", fontSize: 11 } as const;

export function KpiCard({
  rotulo,
  valor,
  sub,
  icone,
  destaque,
}: {
  rotulo: string;
  valor: string;
  sub?: string;
  icone?: ReactNode;
  destaque?: "esmeralda" | "ambar" | "rosa" | "neutro";
}) {
  const cor =
    destaque === "esmeralda"
      ? "text-emerald-400"
      : destaque === "ambar"
        ? "text-amber-400"
        : destaque === "rosa"
          ? "text-rose-400"
          : "text-slate-100";
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-wider text-slate-400">
          {rotulo}
        </p>
        {icone ? <span className="text-slate-500">{icone}</span> : null}
      </div>
      <p className={`mt-1 text-2xl font-bold tabular-nums ${cor}`}>{valor}</p>
      {sub ? <p className="mt-0.5 text-xs text-slate-500">{sub}</p> : null}
    </div>
  );
}

export function Painel({
  titulo,
  descricao,
  children,
  acao,
}: {
  titulo: string;
  descricao?: string;
  children: ReactNode;
  acao?: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">{titulo}</h3>
          {descricao ? (
            <p className="mt-0.5 text-xs text-slate-400">{descricao}</p>
          ) : null}
        </div>
        {acao}
      </div>
      {children}
    </section>
  );
}

export function BadgeNivel({ nivel }: { nivel: "ALTO" | "MODERADO" | "BAIXO" }) {
  const estilos = {
    ALTO: "bg-rose-500/15 text-rose-400 border-rose-500/40",
    MODERADO: "bg-amber-500/15 text-amber-400 border-amber-500/40",
    BAIXO: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  } as const;
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${estilos[nivel]}`}
    >
      RISCO {nivel}
    </span>
  );
}
