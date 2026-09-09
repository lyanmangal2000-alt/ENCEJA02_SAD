"use client";

/**
 * SAD ENCCEJA — Sistema de Apoio à Decisão com K-Nearest Neighbors
 * Dashboard completo (dark premium) — 5 módulos:
 *   1. Visão Geral        — KPIs da base histórica
 *   2. Simulador K-NN     — perfil do candidato → notas previstas + vizinhos
 *   3. Recomendação       — parecer gerencial completo + regras
 *   4. Análise Exploratória — padrões que justificam o modelo
 *   5. Modelo & Métricas  — k, RMSE/MAE, explicação, limitações
 *
 * Os dados vêm do pipeline Python (treino_knn.py): amostra de vizinhos +
 * agregados + métricas. O K-NN roda no navegador replicando o pipeline.
 */

import { useState } from "react";
import {
  BarChart3,
  GraduationCap,
  LineChart,
  ClipboardCheck,
  Cpu,
  ExternalLink,
  Database,
} from "lucide-react";

import { ORIGEM_DADOS, N_AMOSTRA } from "@/lib/knn";
import { VisaoGeral } from "@/components/dashboard/visao-geral";
import {
  Simulador,
  type ResultadoSimulacao,
} from "@/components/dashboard/simulador";
import { RecomendacaoGerencial } from "@/components/dashboard/recomendacao";
import { Exploratoria } from "@/components/dashboard/exploratoria";
import { ModeloPanel } from "@/components/dashboard/modelo";

type Aba = "visao" | "simulador" | "recomendacao" | "exploratoria" | "modelo";

const ABAS: { id: Aba; rotulo: string; icone: React.ReactNode }[] = [
  { id: "visao", rotulo: "Visão Geral", icone: <BarChart3 size={15} /> },
  { id: "simulador", rotulo: "Simulador K-NN", icone: <GraduationCap size={15} /> },
  { id: "recomendacao", rotulo: "Recomendação", icone: <ClipboardCheck size={15} /> },
  { id: "exploratoria", rotulo: "Análise Exploratória", icone: <LineChart size={15} /> },
  { id: "modelo", rotulo: "Modelo & Métricas", icone: <Cpu size={15} /> },
];

export default function Home() {
  const [aba, setAba] = useState<Aba>("visao");
  const [resultado, setResultado] = useState<ResultadoSimulacao | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* ------------------------------------------------ HEADER */}
      <header className="border-b border-slate-800 bg-gradient-to-r from-emerald-950/80 via-slate-950 to-slate-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">
                SAD ENCCEJA{" "}
                <span className="text-emerald-400">· Apoio à Decisão com K-NN</span>
              </h1>
              <p className="text-xs text-slate-400">
                Previsão de desempenho e recomendações gerenciais para cursinhos
                preparatórios — microdados INEP ENCCEJA 2024
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-slate-300">
              <Database size={12} className="text-emerald-400" />
              Base: {ORIGEM_DADOS} · {N_AMOSTRA.toLocaleString("pt-BR")} vizinhos em amostra
            </span>
          </div>
        </div>

        {/* ------------------------------------------------ NAV */}
        <nav className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto pb-0.5">
            {ABAS.map((a) => (
              <button
                key={a.id}
                onClick={() => setAba(a.id)}
                className={`flex shrink-0 items-center gap-2 rounded-t-lg border-b-2 px-4 py-2.5 text-xs font-medium transition ${
                  aba === a.id
                    ? "border-emerald-400 text-emerald-300"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {a.icone}
                {a.rotulo}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* ------------------------------------------------ CONTEÚDO */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
        {aba === "visao" && <VisaoGeral />}
        {aba === "simulador" && (
          <Simulador
            kPadrao={21}
            aoSimular={setResultado}
            resultadoExterno={resultado}
          />
        )}
        {aba === "recomendacao" && <RecomendacaoGerencial resultado={resultado} />}
        {aba === "exploratoria" && <Exploratoria />}
        {aba === "modelo" && <ModeloPanel />}
      </main>

      {/* ------------------------------------------------ FOOTER */}
      <footer className="mt-auto border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:px-6">
          <p>
            Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão · K-NN
            (scikit-learn no pipeline Python; réplica em TypeScript no
            navegador) · Dados: INEP Microdados ENCCEJA 2024
          </p>
          <p className="flex items-center gap-1.5">
            App Streamlit completo no repositório
            <ExternalLink size={11} className="text-emerald-500" />
          </p>
        </div>
      </footer>
    </div>
  );
}
