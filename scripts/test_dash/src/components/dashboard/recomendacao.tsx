"use client";

/**
 * MÓDULO 3 — RECOMENDAÇÃO GERENCIAL
 * Parecer completo do último candidato simulado + explicação das regras de
 * negócio que transformam a saída do K-NN em decisão pedagógica.
 */

import { useEffect, useState } from "react";
import { AlertTriangle, ClipboardList, Scale, ShieldCheck, UserRound } from "lucide-react";

import { ROTULOS_AREAS } from "@/lib/knn";
import { BadgeNivel, Painel } from "./ui-bits";
import type { ResultadoSimulacao } from "./simulador";

export function RecomendacaoGerencial({
  resultado,
}: {
  resultado: ResultadoSimulacao | null;
}) {
  // Navegação interna: o simulador dispara este evento para vir até aqui
  const [destaque, setDestaque] = useState(false);
  useEffect(() => {
    const handler = () => setDestaque(true);
    window.addEventListener("ir-para-recomendacao", handler);
    return () => window.removeEventListener("ir-para-recomendacao", handler);
  }, []);

  return (
    <div className="space-y-5">
      {resultado ? (
        <ParecerCompleto resultado={resultado} destaque={destaque} />
      ) : (
        <section className="flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
          <div className="max-w-md">
            <UserRound size={36} className="mx-auto text-slate-600" />
            <h3 className="mt-3 text-base font-semibold text-slate-300">
              Nenhum candidato simulado ainda
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Rode o <b>Simulador K-NN</b> com o perfil de um novo aluno — o
              parecer gerencial completo aparece aqui, pronto para orientar a
              decisão de matrícula.
            </p>
          </div>
        </section>
      )}

      <RegrasNegocio />
    </div>
  );
}

function ParecerCompleto({
  resultado,
  destaque,
}: {
  resultado: ResultadoSimulacao;
  destaque: boolean;
}) {
  const { perfil, knn, parecer } = resultado;
  const borda =
    parecer.nivel === "ALTO"
      ? "border-rose-500/50 bg-rose-500/5"
      : parecer.nivel === "MODERADO"
        ? "border-amber-500/50 bg-amber-500/5"
        : "border-emerald-500/50 bg-emerald-500/5";

  return (
    <section className={`rounded-xl border p-6 ${borda} ${destaque ? "ring-2 ring-emerald-400/30" : ""}`}>
      <div className="flex flex-wrap items-center gap-3">
        <BadgeNivel nivel={parecer.nivel} />
        <h2 className="text-base font-bold text-slate-100">{parecer.titulo}</h2>
      </div>

      {/* Perfil avaliado */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          perfil.sexo === "F" ? "Feminino" : "Masculino",
          FAIXA(perfil.faixa),
          perfil.uf,
          MAP_CERT(perfil.cert),
          perfil.trabalho,
          perfil.renda,
          perfil.escolaridade,
          `k=${perfil.k}`,
        ].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300"
          >
            {chip}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300">{parecer.resumo}</p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <MiniIndicador
          rotulo="Áreas abaixo do corte"
          valor={`${parecer.indicadores.nAbaixoCorte}/${parecer.indicadores.nTotal}`}
        />
        <MiniIndicador
          rotulo="Taxa de aprovação dos vizinhos"
          valor={`${Math.round(parecer.indicadores.taxaAprovacaoVizinhos * 100)}%`}
        />
        <MiniIndicador
          rotulo="Áreas muito abaixo da média dos vizinhos"
          valor={`${parecer.indicadores.nAbaixoMedia}/${parecer.indicadores.nTotal}`}
        />
      </div>

      <div className="mt-4 rounded-lg bg-slate-900/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Justificativa (números do modelo)
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
          {parecer.justificativa}
        </p>
      </div>

      {/* Disciplinas críticas */}
      {parecer.disciplinasCriticas.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-200">
            <AlertTriangle size={13} className="text-amber-400" />
            Disciplinas que exigem atenção prioritária
          </p>
          <div className="overflow-hidden rounded-lg border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-[10px] uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-3 py-2">Área</th>
                  <th className="px-3 py-2 text-right">Prevista</th>
                  <th className="px-3 py-2 text-right">Média vizinhos</th>
                  <th className="px-3 py-2 text-center">Abaixo do corte</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 bg-slate-900/40">
                {parecer.disciplinasCriticas.map((c) => (
                  <tr key={c.rotulo} className="text-slate-300">
                    <td className="px-3 py-2">{c.rotulo}</td>
                    <td className="px-3 py-2 text-right tabular-nums text-amber-300">
                      {c.notaPrevista.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-right tabular-nums text-slate-400">
                      {c.mediaVizinhos.toFixed(1)}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {c.abaixoCorte ? (
                        <span className="text-rose-400">Sim</span>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Plano de ação */}
      <div className="mt-4">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-200">
          <ClipboardList size={13} className="text-emerald-400" />
          Plano de ação sugerido ao gestor
        </p>
        <ol className="space-y-1.5">
          {parecer.acoes.map((acao, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-300">
                {i + 1}
              </span>
              {acao}
            </li>
          ))}
        </ol>
      </div>

      {/* Contexto: médias dos vizinhos */}
      <p className="mt-4 text-[11px] text-slate-500">
        Referência — média dos {perfil.k} vizinhos por área:{" "}
        {Object.keys(ROTULOS_AREAS)
          .map((a) => `${ROTULOS_AREAS[a]} ${knn.mediaVizinhos[a].toFixed(0)}`)
          .join(" · ")}
        . Previsões são estimativas probabilísticas para apoio à decisão, não
        garantias individuais.
      </p>
    </section>
  );
}

function MiniIndicador({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
      <p className="text-[10px] uppercase tracking-wider text-slate-500">{rotulo}</p>
      <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-100">{valor}</p>
    </div>
  );
}

function RegrasNegocio() {
  const regras = [
    {
      icone: <AlertTriangle size={16} className="text-rose-400" />,
      nivel: "RISCO ALTO",
      cor: "border-rose-500/40",
      condicao:
        "Nota prevista abaixo do corte em 3+ das 5 áreas E menos da metade dos vizinhos semelhantes aprovados.",
      decisao:
        "Matrícula em turma de reforço intensivo, tutor individual e simulados diagnósticos quinzenais nas disciplinas críticas.",
    },
    {
      icone: <Scale size={16} className="text-amber-400" />,
      nivel: "RISCO MODERADO",
      cor: "border-amber-500/40",
      condicao:
        "Quadro misto: prontidão parcial ou taxa de aprovação dos vizinhos limítrofe.",
      decisao:
        "Turma regular com monitoria dedicada às disciplinas críticas e acompanhamento pedagógico quinzenal.",
    },
    {
      icone: <ShieldCheck size={16} className="text-emerald-400" />,
      nivel: "RISCO BAIXO",
      cor: "border-emerald-500/40",
      condicao:
        "Nota prevista acima do corte na maioria das áreas E maioria dos vizinhos semelhantes aprovados.",
      decisao:
        "Acompanhamento padrão do cursinho, mantendo simulados e monitoria coletiva.",
    },
  ];

  return (
    <Painel
      titulo="Regras de negócio do sistema"
      descricao="Como a saída do K-NN é traduzida em decisão pedagógica (motor de recomendações)"
    >
      <div className="grid gap-3 md:grid-cols-3">
        {regras.map((r) => (
          <div key={r.nivel} className={`rounded-lg border ${r.cor} bg-slate-900/60 p-4`}>
            <div className="flex items-center gap-2">
              {r.icone}
              <p className="text-xs font-bold tracking-wide text-slate-100">{r.nivel}</p>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
              <b className="text-slate-300">Se:</b> {r.condicao}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
              <b className="text-slate-300">Então:</b> {r.decisao}
            </p>
          </div>
        ))}
      </div>
    </Painel>
  );
}

// helpers locais (evitam importar dicionários completos só p/ chips)
function FAIXA(cod: number): string {
  const mapa: Record<number, string> = {
    10: "26 a 30 anos", 11: "31 a 35 anos", 12: "36 a 40 anos",
  };
  return mapa[cod] ?? `Faixa ${cod}`;
}
function MAP_CERT(c: 1 | 2): string {
  return c === 1 ? "Ensino Fundamental" : "Ensino Médio";
}
