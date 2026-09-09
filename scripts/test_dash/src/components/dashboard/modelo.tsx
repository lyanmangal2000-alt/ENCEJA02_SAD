"use client";

/**
 * MÓDULO 5 — MODELO & MÉTRICAS
 * Configuração escolhida, curva de validação do k, métricas por área,
 * explicação do algoritmo e limitações.
 */

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BrainCircuit, Ruler, Scale, Sigma, AlertCircle, UsersRound } from "lucide-react";

import { ROTULOS_AREAS } from "@/lib/knn";
import metricasModelo from "@/data/metricas_modelo.json";
import metadadosModelo from "@/data/metadados_modelo.json";
import { CORES, KpiCard, Painel, eixoTick, tooltipItemStyle, tooltipLabelStyle, tooltipStyle } from "./ui-bits";

const METRICAS = metricasModelo as unknown as {
  melhor_config: { k: number; peso: string; metrica: string; rmse_cv: number };
  config_final: { k: number; peso: string; metrica: string };
  metricas_area: Record<string, { mae: number; rmse: number }>;
  mae_global: number;
  rmse_global: number;
  ks_testados: number[];
};

const METADADOS = metadadosModelo as unknown as {
  historico_busca: { k: number; peso: string; metrica: string; rmse_cv: number }[];
  n_treino: number;
  n_teste: number;
  acuracia_aprovacao: number;
};

export function ModeloPanel() {
  const cfg = METRICAS.melhor_config;
  const cfgFinal = METRICAS.config_final;

  // Curva de validação: RMSE médio por k (média sobre pesos/métricas)
  const porK = new Map<number, { soma: number; n: number }>();
  for (const h of METADADOS.historico_busca) {
    const atual = porK.get(h.k) ?? { soma: 0, n: 0 };
    atual.soma += h.rmse_cv;
    atual.n += 1;
    porK.set(h.k, atual);
  }
  const curvaK = [...porK.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([k, v]) => ({ k, "RMSE médio (CV)": Math.round((v.soma / v.n) * 100) / 100 }));

  // Comparação uniform × distance (manhattan, k=21) — decisão de negócio
  const compPesos = METADADOS.historico_busca
    .filter((h) => h.metrica === cfg.metrica && h.k === cfg.k)
    .map((h) => ({ peso: h.peso, "RMSE (CV)": h.rmse_cv }));

  const dadosMetricasArea = Object.keys(ROTULOS_AREAS).map((a) => ({
    area: ROTULOS_AREAS[a],
    MAE: METRICAS.metricas_area[a]?.mae,
    RMSE: METRICAS.metricas_area[a]?.rmse,
  }));

  return (
    <div className="space-y-5">
      {/* Configuração */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard rotulo="k (nº de vizinhos)" valor={String(cfgFinal.k)} sub="escolhido por CV 5-fold" />
        <KpiCard rotulo="Peso do modelo final" valor={cfgFinal.peso} sub={`busca: ${cfg.peso} (RMSE menor)`} destaque="esmeralda" />
        <KpiCard rotulo="Distância" valor={cfgFinal.metrica} sub="venceu a euclidiana na CV" />
        <KpiCard
          rotulo="MAE global (teste)"
          valor={METRICAS.mae_global.toFixed(1)}
          sub={`RMSE ${METRICAS.rmse_global.toFixed(1)} pts`}
          destaque="ambar"
        />
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-400">
        <b className="text-slate-300">Decisão de negócio documentada:</b> a busca
        por validação cruzada elegeu pesos <code className="rounded bg-slate-800 px-1 text-emerald-300">uniform</code> com RMSE
        ~10% menor. O modelo final adota <code className="rounded bg-slate-800 px-1 text-emerald-300">distance</code> porque,
        com pesos uniformes, a nota prevista é idêntica à média simples dos
        vizinhos exibidos — o que esvaziaria a comparação gerencial
        &quot;previsto × média dos vizinhos&quot;. A perda de RMSE é um trade-off
        consciente em favor da interpretabilidade da decisão. Treino:{" "}
        {METADADOS.n_treino.toLocaleString("pt-BR")} exames completos · Teste:{" "}
        {METADADOS.n_teste.toLocaleString("pt-BR")} · Classificador auxiliar de
        aprovação (≥3/4 áreas): acurácia {(METADADOS.acuracia_aprovacao * 100).toFixed(1)}%.
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Painel
          titulo="Curva de validação — RMSE por k"
          descricao="RMSE médio (CV 5 folds) para cada k testado; k=21 minimiza o erro"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={curvaK} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="k" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                  formatter={(v: number) => [`${v.toFixed(2)} pts`, "RMSE médio"]}
                  labelFormatter={(l) => `k = ${l}`}
                />
                <Line
                  type="monotone"
                  dataKey="RMSE médio (CV)"
                  stroke={CORES.esmeralda}
                  strokeWidth={2.5}
                  dot={{ fill: CORES.esmeralda, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Painel>

        <Painel
          titulo={`Pesos no k vencedor (k=${cfg.k}, ${cfg.metrica})`}
          descricao="Comparação que motivou a decisão de negócio do peso final"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={compPesos} margin={{ top: 8, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CORES.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="peso" tick={eixoTick} axisLine={{ stroke: CORES.grid }} tickLine={false} />
                <YAxis tick={eixoTick} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.08)" }}
                  contentStyle={tooltipStyle}
                  itemStyle={tooltipItemStyle}
                  labelStyle={tooltipLabelStyle}
                  formatter={(v: number) => [`${Number(v).toFixed(2)} pts`, "RMSE (CV)"]}
                />
                <Bar dataKey="RMSE (CV)" radius={[6, 6, 0, 0]} maxBarSize={90}>
                  {compPesos.map((d) => (
                    <Cell
                      key={d.peso}
                      fill={d.peso === "distance" ? CORES.esmeralda : CORES.cinza}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Painel>
      </div>

      <Painel
        titulo="Métricas por área (conjunto de teste)"
        descricao="MAE = erro absoluto médio em pontos da escala 0–180 (redação 0–10)"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-xs">
            <thead className="text-[10px] uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-3 py-2">Área</th>
                <th className="px-3 py-2 text-right">MAE</th>
                <th className="px-3 py-2 text-right">RMSE</th>
                <th className="px-3 py-2 text-right">Interpretação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {dadosMetricasArea.map((d) => (
                <tr key={d.area} className="text-slate-300">
                  <td className="px-3 py-2.5">{d.area}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums font-semibold text-emerald-300">
                    {d.MAE?.toFixed(2)}
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums">
                    {d.RMSE?.toFixed(2)}
                  </td>
                  <td className="px-3 py-2.5 text-right text-slate-500">
                    {d.area === "Redação" ? "±0,2 ponto na redação" : `±${Math.round(d.MAE ?? 0)} pontos`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Painel>

      {/* Como funciona + limitações */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Painel titulo="Como o K-NN decide" descricao="Do formulário à previsão, em 4 passos">
          <ol className="space-y-3">
            {[
              {
                icone: <Sigma size={15} className="text-emerald-400" />,
                titulo: "1. Codificação e padronização",
                texto:
                  "O perfil é codificado (ordinais preservam hierarquia; one-hot para nominais) e padronizado Z-score — sem isso, variáveis com números maiores dominariam a distância.",
              },
              {
                icone: <Ruler size={15} className="text-emerald-400" />,
                titulo: "2. Distância a todos os históricos",
                texto:
                  "Distância de Manhattan entre o vetor do candidato e cada um dos perfis do conjunto de treino (robusta em 35 dimensões).",
              },
              {
                icone: <UsersRound size={15} className="text-emerald-400" />,
                titulo: "3. Seleção dos k vizinhos",
                texto:
                  "Os k perfis mais próximos são selecionados; a previsão de cada nota é a média ponderada pela inversa da distância (weights='distance').",
              },
              {
                icone: <BrainCircuit size={15} className="text-emerald-400" />,
                titulo: "4. Recomendação gerencial",
                texto:
                  "As regras de negócio combinam prontidão (corte oficial) e a taxa de aprovação real dos vizinhos para gerar o parecer.",
              },
            ].map((p) => (
              <li key={p.titulo} className="flex gap-3">
                <span className="mt-0.5">{p.icone}</span>
                <div>
                  <p className="text-xs font-semibold text-slate-200">{p.titulo}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </Painel>

        <Painel titulo="Limitações do modelo" descricao="Leitura responsável das previsões">
          <ul className="space-y-2.5">
            {[
              "Correlação não é causalidade: o modelo reporta desempenho histórico de perfis semelhantes, não um mecanismo causal.",
              "Base de uma única edição do exame — mudanças de perfil do público ou da prova degradam a previsão (drift).",
              "Vieses regionais e socioeconômicos dos microdados são reproduzidos; o sistema informa a decisão, nunca rotula o aluno.",
              "Regressão à média: perfis extremos recebem previsões puxadas para o centro da distribuição.",
              "Fatores não observados (motivação, rotina de estudo) não entram no cálculo de distância.",
            ].map((l) => (
              <li key={l} className="flex gap-2 text-[11px] leading-relaxed text-slate-400">
                <AlertCircle size={13} className="mt-0.5 shrink-0 text-amber-400" />
                {l}
              </li>
            ))}
          </ul>
        </Painel>
      </div>
    </div>
  );
}

