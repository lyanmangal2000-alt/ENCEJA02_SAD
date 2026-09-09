(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Exploratoria",
    ()=>Exploratoria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MÓDULO 4 — ANÁLISE EXPLORATÓRIA
 * Padrões da base histórica que justificam o perfil socioeconômico como
 * variável explicativa: renda, faixa etária, trabalho e UF.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Exploratoria() {
    const agg = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGREGADOS"];
    // Renda × nota média (por área) — gradiente socioeconômico
    const dadosRenda = agg.por_renda.map((r)=>({
            renda: r.renda_familiar.replace(" salários mínimos", " SM").replace("De ", "").replace("Até 1", "≤ 1"),
            Linguagens: r.media_NU_NOTA_LC,
            Matemática: r.media_NU_NOTA_MT,
            "C. Natureza": r.media_NU_NOTA_CN,
            "C. Humanas": r.media_NU_NOTA_CH,
            Redação: Math.round(r.media_redacao * 10) / 10,
            n: r.n
        }));
    // Idade × aprovação (barra) + nota média (linha)
    const dadosIdade = agg.por_idade.map((g)=>({
            faixa: g.grupo_etario,
            "Taxa de aprovação": Math.round(g.taxa_aprovacao * 1000) / 10,
            "Nota média": Math.round(g.media_geral * 10) / 10,
            n: g.n
        }));
    // Trabalho × nota média
    const dadosTrabalho = agg.por_trabalho.map((t)=>({
            trabalho: t.situacao_trabalho.replace("Trabalha ", "").replace(" semanais", "").replace("Não trabalha", "Não trabalha"),
            "Nota média (objetivas)": Math.round(t.media_geral * 10) / 10,
            "Taxa de aprovação": Math.round(t.taxa_aprovacao * 1000) / 10,
            n: t.n
        }));
    // UF — top 8 e bottom 8 por nota média geral
    const ufsOrdenadas = [
        ...agg.por_uf
    ].sort((a, b)=>b.media_NU_NOTA_LC + b.media_NU_NOTA_MT + b.media_NU_NOTA_CN + b.media_NU_NOTA_CH - (a.media_NU_NOTA_LC + a.media_NU_NOTA_MT + a.media_NU_NOTA_CN + a.media_NU_NOTA_CH));
    const top8 = ufsOrdenadas.slice(0, 8);
    const bottom8 = ufsOrdenadas.slice(-8).reverse();
    const formataUF = (u)=>({
            uf: u.SG_UF_PROVA,
            "Nota média": Math.round((u.media_NU_NOTA_LC + u.media_NU_NOTA_MT + u.media_NU_NOTA_CN + u.media_NU_NOTA_CH) / 4 * 10) / 10
        });
    const dadosTop = top8.map(formataUF);
    const dadosBottom = bottom8.map(formataUF);
    // Heatmap região × área (grid colorido)
    const areasHeat = [
        "NU_NOTA_LC",
        "NU_NOTA_MT",
        "NU_NOTA_CN",
        "NU_NOTA_CH",
        "media_redacao"
    ];
    const rotulosHeat = {
        NU_NOTA_LC: "Linguagens",
        NU_NOTA_MT: "Matemática",
        NU_NOTA_CN: "C. Natureza",
        NU_NOTA_CH: "C. Humanas",
        media_redacao: "Redação (×10)"
    };
    const minMedia = 60;
    const maxMedia = 105;
    const corHeat = (v)=>{
        // escala vermelho→ambar→esmeralda
        const t = Math.max(0, Math.min(1, (v - minMedia) / (maxMedia - minMedia)));
        const r = Math.round(254 * (1 - t) + 16 * t);
        const g = Math.round(120 * (1 - t) + 185 * t);
        const b = Math.round(90 * (1 - t) + 129 * t);
        return `rgba(${r}, ${g}, ${b}, ${0.18 + 0.72 * t})`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/70 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        size: 16,
                        className: "mt-0.5 shrink-0 text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs leading-relaxed text-slate-400",
                        children: [
                            "Estes são os ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "text-slate-300",
                                children: "padrões da base histórica"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                lineNumber: 111,
                                columnNumber: 24
                            }, this),
                            " ",
                            "que justificam o modelo: notas crescem com a renda e com a escolaridade, decaem com a jornada de trabalho e variam por região e idade. O K-NN usa exatamente essas dimensões para encontrar vizinhos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                titulo: "Renda familiar × nota média",
                descricao: "Média das notas por faixa de renda — o gradiente socioeconômico central do problema",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-72",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                            data: dadosRenda,
                            margin: {
                                top: 8,
                                right: 8,
                                left: -18,
                                bottom: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                    strokeDasharray: "3 3",
                                    vertical: false
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "renda",
                                    tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                    axisLine: {
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                    },
                                    tickLine: false,
                                    angle: -18,
                                    textAnchor: "end",
                                    height: 48
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                    axisLine: false,
                                    tickLine: false,
                                    domain: [
                                        0,
                                        130
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    cursor: {
                                        fill: "rgba(148,163,184,0.08)"
                                    },
                                    contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                    itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                    labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "Linguagens",
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                    radius: [
                                        3,
                                        3,
                                        0,
                                        0
                                    ],
                                    maxBarSize: 22
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "Matemática",
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].ambar,
                                    radius: [
                                        3,
                                        3,
                                        0,
                                        0
                                    ],
                                    maxBarSize: 22
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "C. Natureza",
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].teal,
                                    radius: [
                                        3,
                                        3,
                                        0,
                                        0
                                    ],
                                    maxBarSize: 22
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                    dataKey: "C. Humanas",
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].violeta,
                                    radius: [
                                        3,
                                        3,
                                        0,
                                        0
                                    ],
                                    maxBarSize: 22
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Faixa etária × aprovação e desempenho",
                        descricao: "Taxa de aprovação (barras, ≥3 áreas) e nota média (linha)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                    data: dadosIdade,
                                    margin: {
                                        top: 8,
                                        right: 8,
                                        left: -18,
                                        bottom: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "faixa",
                                            tick: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                                fontSize: 9
                                            },
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false,
                                            angle: -20,
                                            textAnchor: "end",
                                            height: 44
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: false,
                                            tickLine: false,
                                            unit: "%",
                                            domain: [
                                                0,
                                                80
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            cursor: {
                                                fill: "rgba(148,163,184,0.08)"
                                            },
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "Taxa de aprovação",
                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].teal,
                                            radius: [
                                                5,
                                                5,
                                                0,
                                                0
                                            ],
                                            maxBarSize: 40
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                            type: "monotone",
                                            dataKey: "Nota média",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].ambarClaro ?? "#fbbf24",
                                            strokeWidth: 2,
                                            dot: {
                                                fill: "#fbbf24",
                                                r: 3
                                            },
                                            yAxisId: 0
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Situação de trabalho × desempenho",
                        descricao: "Quanto mais horas trabalhadas, menos tempo de estudo — padrão capturado pela variável",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: dadosTrabalho,
                                    layout: "vertical",
                                    margin: {
                                        top: 4,
                                        right: 16,
                                        left: 8,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            horizontal: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            type: "number",
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false,
                                            domain: [
                                                0,
                                                110
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            type: "category",
                                            dataKey: "trabalho",
                                            tick: {
                                                ...__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                                fontSize: 10
                                            },
                                            axisLine: false,
                                            tickLine: false,
                                            width: 110
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            cursor: {
                                                fill: "rgba(148,163,184,0.08)"
                                            },
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "Nota média (objetivas)",
                                            radius: [
                                                0,
                                                6,
                                                6,
                                                0
                                            ],
                                            maxBarSize: 22,
                                            children: dadosTrabalho.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda : i === dadosTrabalho.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].rosa : __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].teal
                                                }, i, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Top 8 UFs por nota média",
                        descricao: "Média das 4 áreas objetivas",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoUF, {
                            dados: dadosTop,
                            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "8 UFs com menor nota média",
                        descricao: "Média das 4 áreas objetivas",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraficoUF, {
                            dados: dadosBottom,
                            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].rosa
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                titulo: "Mapa de calor — região × área",
                descricao: "Média das notas por região (verde = acima, vermelho = abaixo)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full min-w-[560px] border-separate border-spacing-1 text-center text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-2 py-1.5 text-left text-[10px] uppercase tracking-wider text-slate-500",
                                            children: "Região"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        areasHeat.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1.5 text-[10px] uppercase tracking-wider text-slate-500",
                                                children: rotulosHeat[a]
                                            }, a, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: agg.por_regiao.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1.5 text-left text-[11px] font-medium text-slate-300",
                                                children: r.regiao
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this),
                                            areasHeat.map((a)=>{
                                                const valor = a === "media_redacao" ? r.media_redacao : r[a];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "rounded-md px-2 py-2.5 tabular-nums font-semibold text-slate-100",
                                                    style: {
                                                        background: corHeat(a === "media_redacao" ? valor * 10 : valor)
                                                    },
                                                    children: a === "media_redacao" ? valor.toFixed(1) : valor.toFixed(0)
                                                }, a, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        ]
                                    }, r.regiao, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c = Exploratoria;
function GraficoUF({ dados, cor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-64",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: "100%",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: dados,
                layout: "vertical",
                margin: {
                    top: 4,
                    right: 24,
                    left: -6,
                    bottom: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                        strokeDasharray: "3 3",
                        horizontal: false
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        type: "number",
                        tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                        axisLine: {
                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                        },
                        tickLine: false,
                        domain: [
                            0,
                            110
                        ]
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        type: "category",
                        dataKey: "uf",
                        tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                        axisLine: false,
                        tickLine: false,
                        width: 34
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        cursor: {
                            fill: "rgba(148,163,184,0.08)"
                        },
                        contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                        itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                        labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "Nota média",
                        fill: cor,
                        radius: [
                            0,
                            6,
                            6,
                            0
                        ],
                        maxBarSize: 18
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
            lineNumber: 285,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
}
_c1 = GraficoUF;
var _c, _c1;
__turbopack_context__.k.register(_c, "Exploratoria");
__turbopack_context__.k.register(_c1, "GraficoUF");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scripts/test_dash/src/components/dashboard/modelo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeloPanel",
    ()=>ModeloPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MÓDULO 5 — MODELO & MÉTRICAS
 * Configuração escolhida, curva de validação do k, métricas por área,
 * explicação do algoritmo e limitações.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metricas_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/data/metricas_modelo.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metadados_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/data/metadados_modelo.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const METRICAS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metricas_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const METADADOS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metadados_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function ModeloPanel() {
    const cfg = METRICAS.melhor_config;
    const cfgFinal = METRICAS.config_final;
    // Curva de validação: RMSE médio por k (média sobre pesos/métricas)
    const porK = new Map();
    for (const h of METADADOS.historico_busca){
        const atual = porK.get(h.k) ?? {
            soma: 0,
            n: 0
        };
        atual.soma += h.rmse_cv;
        atual.n += 1;
        porK.set(h.k, atual);
    }
    const curvaK = [
        ...porK.entries()
    ].sort((a, b)=>a[0] - b[0]).map(([k, v])=>({
            k,
            "RMSE médio (CV)": Math.round(v.soma / v.n * 100) / 100
        }));
    // Comparação uniform × distance (manhattan, k=21) — decisão de negócio
    const compPesos = METADADOS.historico_busca.filter((h)=>h.metrica === cfg.metrica && h.k === cfg.k).map((h)=>({
            peso: h.peso,
            "RMSE (CV)": h.rmse_cv
        }));
    const dadosMetricasArea = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]).map((a)=>({
            area: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a],
            MAE: METRICAS.metricas_area[a]?.mae,
            RMSE: METRICAS.metricas_area[a]?.rmse
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "k (nº de vizinhos)",
                        valor: String(cfgFinal.k),
                        sub: "escolhido por CV 5-fold"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "Peso do modelo final",
                        valor: cfgFinal.peso,
                        sub: `busca: ${cfg.peso} (RMSE menor)`,
                        destaque: "esmeralda"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "Distância",
                        valor: cfgFinal.metrica,
                        sub: "venceu a euclidiana na CV"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "MAE global (teste)",
                        valor: METRICAS.mae_global.toFixed(1),
                        sub: `RMSE ${METRICAS.rmse_global.toFixed(1)} pts`,
                        destaque: "ambar"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        className: "text-slate-300",
                        children: "Decisão de negócio documentada:"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    " a busca por validação cruzada elegeu pesos ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "rounded bg-slate-800 px-1 text-emerald-300",
                        children: "uniform"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 88,
                        columnNumber: 44
                    }, this),
                    " com RMSE ~10% menor. O modelo final adota ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "rounded bg-slate-800 px-1 text-emerald-300",
                        children: "distance"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 89,
                        columnNumber: 42
                    }, this),
                    ' porque, com pesos uniformes, a nota prevista é idêntica à média simples dos vizinhos exibidos — o que esvaziaria a comparação gerencial "previsto × média dos vizinhos". A perda de RMSE é um trade-off consciente em favor da interpretabilidade da decisão. Treino:',
                    " ",
                    METADADOS.n_treino.toLocaleString("pt-BR"),
                    " exames completos · Teste:",
                    " ",
                    METADADOS.n_teste.toLocaleString("pt-BR"),
                    " · Classificador auxiliar de aprovação (≥3/4 áreas): acurácia ",
                    (METADADOS.acuracia_aprovacao * 100).toFixed(1),
                    "%."
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Curva de validação — RMSE por k",
                        descricao: "RMSE médio (CV 5 folds) para cada k testado; k=21 minimiza o erro",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                    data: curvaK,
                                    margin: {
                                        top: 8,
                                        right: 12,
                                        left: -18,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "k",
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: false,
                                            tickLine: false,
                                            domain: [
                                                "auto",
                                                "auto"
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"],
                                            formatter: (v)=>[
                                                    `${v.toFixed(2)} pts`,
                                                    "RMSE médio"
                                                ],
                                            labelFormatter: (l)=>`k = ${l}`
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                            type: "monotone",
                                            dataKey: "RMSE médio (CV)",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                            strokeWidth: 2.5,
                                            dot: {
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                r: 4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: `Pesos no k vencedor (k=${cfg.k}, ${cfg.metrica})`,
                        descricao: "Comparação que motivou a decisão de negócio do peso final",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: compPesos,
                                    margin: {
                                        top: 8,
                                        right: 12,
                                        left: -18,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "peso",
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: false,
                                            tickLine: false,
                                            domain: [
                                                "auto",
                                                "auto"
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            cursor: {
                                                fill: "rgba(148,163,184,0.08)"
                                            },
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"],
                                            formatter: (v)=>[
                                                    `${Number(v).toFixed(2)} pts`,
                                                    "RMSE (CV)"
                                                ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "RMSE (CV)",
                                            radius: [
                                                6,
                                                6,
                                                0,
                                                0
                                            ],
                                            maxBarSize: 90,
                                            children: compPesos.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: d.peso === "distance" ? __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda : __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].cinza
                                                }, d.peso, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                titulo: "Métricas por área (conjunto de teste)",
                descricao: "MAE = erro absoluto médio em pontos da escala 0–180 (redação 0–10)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full min-w-[520px] text-left text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "text-[10px] uppercase tracking-wider text-slate-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2",
                                            children: "Área"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 text-right",
                                            children: "MAE"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 text-right",
                                            children: "RMSE"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-3 py-2 text-right",
                                            children: "Interpretação"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-800/70",
                                children: dadosMetricasArea.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5",
                                                children: d.area
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5 text-right tabular-nums font-semibold text-emerald-300",
                                                children: d.MAE?.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5 text-right tabular-nums",
                                                children: d.RMSE?.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-3 py-2.5 text-right text-slate-500",
                                                children: d.area === "Redação" ? "±0,2 ponto na redação" : `±${Math.round(d.MAE ?? 0)} pontos`
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, d.area, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Como o K-NN decide",
                        descricao: "Do formulário à previsão, em 4 passos",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "space-y-3",
                            children: [
                                {
                                    icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                        size: 15,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                        lineNumber: 200,
                                        columnNumber: 24
                                    }, this),
                                    titulo: "1. Codificação e padronização",
                                    texto: "O perfil é codificado (ordinais preservam hierarquia; one-hot para nominais) e padronizado Z-score — sem isso, variáveis com números maiores dominariam a distância."
                                },
                                {
                                    icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                        size: 15,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                        lineNumber: 206,
                                        columnNumber: 24
                                    }, this),
                                    titulo: "2. Distância a todos os históricos",
                                    texto: "Distância de Manhattan entre o vetor do candidato e cada um dos perfis do conjunto de treino (robusta em 35 dimensões)."
                                },
                                {
                                    icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"], {
                                        size: 15,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                        lineNumber: 212,
                                        columnNumber: 24
                                    }, this),
                                    titulo: "3. Seleção dos k vizinhos",
                                    texto: "Os k perfis mais próximos são selecionados; a previsão de cada nota é a média ponderada pela inversa da distância (weights='distance')."
                                },
                                {
                                    icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
                                        size: 15,
                                        className: "text-emerald-400"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                        lineNumber: 218,
                                        columnNumber: 24
                                    }, this),
                                    titulo: "4. Recomendação gerencial",
                                    texto: "As regras de negócio combinam prontidão (corte oficial) e a taxa de aprovação real dos vizinhos para gerar o parecer."
                                }
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5",
                                            children: p.icone
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-slate-200",
                                                    children: p.titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0.5 text-[11px] leading-relaxed text-slate-400",
                                                    children: p.texto
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.titulo, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Limitações do modelo",
                        descricao: "Leitura responsável das previsões",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2.5",
                            children: [
                                "Correlação não é causalidade: o modelo reporta desempenho histórico de perfis semelhantes, não um mecanismo causal.",
                                "Base de uma única edição do exame — mudanças de perfil do público ou da prova degradam a previsão (drift).",
                                "Vieses regionais e socioeconômicos dos microdados são reproduzidos; o sistema informa a decisão, nunca rotula o aluno.",
                                "Regressão à média: perfis extremos recebem previsões puxadas para o centro da distribuição.",
                                "Fatores não observados (motivação, rotina de estudo) não entram no cálculo de distância."
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex gap-2 text-[11px] leading-relaxed text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 13,
                                            className: "mt-0.5 shrink-0 text-amber-400"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        l
                                    ]
                                }, l, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/modelo.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = ModeloPanel;
var _c;
__turbopack_context__.k.register(_c, "ModeloPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecomendacaoGerencial",
    ()=>RecomendacaoGerencial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MÓDULO 3 — RECOMENDAÇÃO GERENCIAL
 * Parecer completo do último candidato simulado + explicação das regras de
 * negócio que transformam a saída do K-NN em decisão pedagógica.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RecomendacaoGerencial({ resultado }) {
    _s();
    // Navegação interna: o simulador dispara este evento para vir até aqui
    const [destaque, setDestaque] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecomendacaoGerencial.useEffect": ()=>{
            const handler = {
                "RecomendacaoGerencial.useEffect.handler": ()=>setDestaque(true)
            }["RecomendacaoGerencial.useEffect.handler"];
            window.addEventListener("ir-para-recomendacao", handler);
            return ({
                "RecomendacaoGerencial.useEffect": ()=>window.removeEventListener("ir-para-recomendacao", handler)
            })["RecomendacaoGerencial.useEffect"];
        }
    }["RecomendacaoGerencial.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            resultado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParecerCompleto, {
                resultado: resultado,
                destaque: destaque
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                            size: 36,
                            className: "mx-auto text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-3 text-base font-semibold text-slate-300",
                            children: "Nenhum candidato simulado ainda"
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-slate-500",
                            children: [
                                "Rode o ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Simulador K-NN"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 41,
                                    columnNumber: 22
                                }, this),
                                " com o perfil de um novo aluno — o parecer gerencial completo aparece aqui, pronto para orientar a decisão de matrícula."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegrasNegocio, {}, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(RecomendacaoGerencial, "PG06Nu0xNV0HKqEp9rDwUCmylQA=");
_c = RecomendacaoGerencial;
function ParecerCompleto({ resultado, destaque }) {
    const { perfil, knn, parecer } = resultado;
    const borda = parecer.nivel === "ALTO" ? "border-rose-500/50 bg-rose-500/5" : parecer.nivel === "MODERADO" ? "border-amber-500/50 bg-amber-500/5" : "border-emerald-500/50 bg-emerald-500/5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `rounded-xl border p-6 ${borda} ${destaque ? "ring-2 ring-emerald-400/30" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BadgeNivel"], {
                        nivel: parecer.nivel
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-bold text-slate-100",
                        children: parecer.titulo
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    perfil.sexo === "F" ? "Feminino" : "Masculino",
                    FAIXA(perfil.faixa),
                    perfil.uf,
                    MAP_CERT(perfil.cert),
                    perfil.trabalho,
                    perfil.renda,
                    perfil.escolaridade,
                    `k=${perfil.k}`
                ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300",
                        children: chip
                    }, chip, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm leading-relaxed text-slate-300",
                children: parecer.resumo
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniIndicador, {
                        rotulo: "Áreas abaixo do corte",
                        valor: `${parecer.indicadores.nAbaixoCorte}/${parecer.indicadores.nTotal}`
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniIndicador, {
                        rotulo: "Taxa de aprovação dos vizinhos",
                        valor: `${Math.round(parecer.indicadores.taxaAprovacaoVizinhos * 100)}%`
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniIndicador, {
                        rotulo: "Áreas muito abaixo da média dos vizinhos",
                        valor: `${parecer.indicadores.nAbaixoMedia}/${parecer.indicadores.nTotal}`
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-lg bg-slate-900/70 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
                        children: "Justificativa (números do modelo)"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-xs leading-relaxed text-slate-300",
                        children: parecer.justificativa
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            parecer.disciplinasCriticas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 13,
                                className: "text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            "Disciplinas que exigem atenção prioritária"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-lg border border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-900 text-[10px] uppercase tracking-wider text-slate-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2",
                                                children: "Área"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-right",
                                                children: "Prevista"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-right",
                                                children: "Média vizinhos"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2 text-center",
                                                children: "Abaixo do corte"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-800/70 bg-slate-900/40",
                                    children: parecer.disciplinasCriticas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "text-slate-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: c.rotulo
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-right tabular-nums text-amber-300",
                                                    children: c.notaPrevista.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-right tabular-nums text-slate-400",
                                                    children: c.mediaVizinhos.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-center",
                                                    children: c.abaixoCorte ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-400",
                                                        children: "Sim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.rotulo, true, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                size: 13,
                                className: "text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            "Plano de ação sugerido ao gestor"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "space-y-1.5",
                        children: parecer.acoes.map((acao, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-2 text-xs text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-300",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    acao
                                ]
                            }, i, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[11px] text-slate-500",
                children: [
                    "Referência — média dos ",
                    perfil.k,
                    " vizinhos por área:",
                    " ",
                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]).map((a)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a]} ${knn.mediaVizinhos[a].toFixed(0)}`).join(" · "),
                    ". Previsões são estimativas probabilísticas para apoio à decisão, não garantias individuais."
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c1 = ParecerCompleto;
function MiniIndicador({ rotulo, valor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-slate-800 bg-slate-900/70 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-wider text-slate-500",
                children: rotulo
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-lg font-bold tabular-nums text-slate-100",
                children: valor
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c2 = MiniIndicador;
function RegrasNegocio() {
    const regras = [
        {
            icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                size: 16,
                className: "text-rose-400"
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 208,
                columnNumber: 14
            }, this),
            nivel: "RISCO ALTO",
            cor: "border-rose-500/40",
            condicao: "Nota prevista abaixo do corte em 3+ das 5 áreas E menos da metade dos vizinhos semelhantes aprovados.",
            decisao: "Matrícula em turma de reforço intensivo, tutor individual e simulados diagnósticos quinzenais nas disciplinas críticas."
        },
        {
            icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                size: 16,
                className: "text-amber-400"
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 217,
                columnNumber: 14
            }, this),
            nivel: "RISCO MODERADO",
            cor: "border-amber-500/40",
            condicao: "Quadro misto: prontidão parcial ou taxa de aprovação dos vizinhos limítrofe.",
            decisao: "Turma regular com monitoria dedicada às disciplinas críticas e acompanhamento pedagógico quinzenal."
        },
        {
            icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                size: 16,
                className: "text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                lineNumber: 226,
                columnNumber: 14
            }, this),
            nivel: "RISCO BAIXO",
            cor: "border-emerald-500/40",
            condicao: "Nota prevista acima do corte na maioria das áreas E maioria dos vizinhos semelhantes aprovados.",
            decisao: "Acompanhamento padrão do cursinho, mantendo simulados e monitoria coletiva."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
        titulo: "Regras de negócio do sistema",
        descricao: "Como a saída do K-NN é traduzida em decisão pedagógica (motor de recomendações)",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-3",
            children: regras.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-lg border ${r.cor} bg-slate-900/60 p-4`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                r.icone,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold tracking-wide text-slate-100",
                                    children: r.nivel
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[11px] leading-relaxed text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-slate-300",
                                    children: "Se:"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                " ",
                                r.condicao
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[11px] leading-relaxed text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    className: "text-slate-300",
                                    children: "Então:"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                " ",
                                r.decisao
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    ]
                }, r.nivel, true, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
                    lineNumber: 243,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
_c3 = RegrasNegocio;
// helpers locais (evitam importar dicionários completos só p/ chips)
function FAIXA(cod) {
    const mapa = {
        10: "26 a 30 anos",
        11: "31 a 35 anos",
        12: "36 a 40 anos"
    };
    return mapa[cod] ?? `Faixa ${cod}`;
}
_c4 = FAIXA;
function MAP_CERT(c) {
    return c === 1 ? "Ensino Fundamental" : "Ensino Médio";
}
_c5 = MAP_CERT;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "RecomendacaoGerencial");
__turbopack_context__.k.register(_c1, "ParecerCompleto");
__turbopack_context__.k.register(_c2, "MiniIndicador");
__turbopack_context__.k.register(_c3, "RegrasNegocio");
__turbopack_context__.k.register(_c4, "FAIXA");
__turbopack_context__.k.register(_c5, "MAP_CERT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scripts/test_dash/src/components/dashboard/simulador.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Simulador",
    ()=>Simulador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MÓDULO 2 — SIMULADOR K-NN
 * Formulário do perfil do candidato → notas previstas → k vizinhos mais
 * próximos → comparação visual. O K-NN roda no navegador (src/lib/knn.ts),
 * replicando a codificação, padronização e pesos do pipeline Python.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/polar/PolarGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/polar/Radar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/RadarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FAIXAS = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_FAIXA_ETARIA"]);
_c = FAIXAS;
const TRABALHOS = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_TRABALHO"]);
_c1 = TRABALHOS;
const RENDAS = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_RENDA"]);
_c2 = RENDAS;
const ESCOLARIDADES = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_ESCOLARIDADE"]);
_c3 = ESCOLARIDADES;
// Presets para demonstração (roteiro do vídeo: 2 perfis em contraste)
const PRESET_ALTO_RISCO = {
    sexo: "F",
    faixa: 10,
    uf: "PA",
    cert: 1,
    trabalho: "Trabalha 40h ou mais semanais",
    renda: "Até 1 salário mínimo",
    escolaridade: "Fundamental incompleto",
    k: 21
};
const PRESET_FAVORAVEL = {
    sexo: "M",
    faixa: 11,
    uf: "SP",
    cert: 2,
    trabalho: "Não trabalha",
    renda: "Mais de 10 salários mínimos",
    escolaridade: "Superior completo",
    k: 21
};
function Simulador({ kPadrao, aoSimular, resultadoExterno }) {
    _s();
    const [perfil, setPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sexo: "F",
        faixa: 10,
        uf: "SP",
        cert: 2,
        trabalho: "Trabalha de 26 a 39h semanais",
        renda: "De 1 a 2 salários mínimos",
        escolaridade: "Médio incompleto",
        k: kPadrao
    });
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(resultadoExterno);
    const atualizar = (campo, valor)=>setPerfil((p)=>({
                ...p,
                [campo]: valor
            }));
    const simular = ()=>{
        const knn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executarKNN"])(perfil);
        const parecer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gerarRecomendacao"])(knn);
        const r = {
            perfil,
            knn,
            parecer
        };
        setResultado(r);
        aoSimular(r);
    };
    const aplicarPreset = (p)=>{
        setPerfil(p);
        const knn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executarKNN"])(p);
        const parecer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gerarRecomendacao"])(knn);
        const r = {
            perfil: p,
            knn,
            parecer
        };
        setResultado(r);
        aoSimular(r);
    };
    const areas = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-5 lg:grid-cols-[380px_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-slate-800 bg-slate-900/70 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                size: 16,
                                className: "text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-100",
                                children: "Perfil do novo candidato"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-xs text-slate-400",
                        children: "Dados coletados na matrícula. O sistema busca no histórico os candidatos mais semelhantes e estima o desempenho esperado."
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>aplicarPreset(PRESET_ALTO_RISCO),
                                        className: "rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300 transition hover:bg-rose-500/20",
                                        children: "Exemplo: alto risco"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>aplicarPreset(PRESET_FAVORAVEL),
                                        className: "rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20",
                                        children: "Exemplo: favorável"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Sexo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        "F",
                                        "M"
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>atualizar("sexo", s),
                                            className: `rounded-lg border px-3 py-2 text-sm transition ${perfil.sexo === s ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-300" : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"}`,
                                            children: s === "F" ? "Feminino" : "Masculino"
                                        }, s, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Faixa etária",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: perfil.faixa,
                                    onChange: (e)=>atualizar("faixa", Number(e.target.value)),
                                    className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60",
                                    children: FAIXAS.map(([cod, rot])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: cod,
                                            children: rot
                                        }, cod, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Unidade da Federação da prova",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: perfil.uf,
                                    onChange: (e)=>atualizar("uf", e.target.value),
                                    className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UFS"].map((uf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: uf,
                                            children: uf
                                        }, uf, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Certificação pretendida",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                        1,
                                        2
                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>atualizar("cert", c),
                                            className: `rounded-lg border px-3 py-2 text-xs transition ${perfil.cert === c ? "border-emerald-400/60 bg-emerald-500/15 text-emerald-300" : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_CERTIFICACAO"][c]
                                        }, c, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Situação de trabalho",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: perfil.trabalho,
                                    onChange: (e)=>atualizar("trabalho", e.target.value),
                                    className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60",
                                    children: TRABALHOS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t,
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Renda familiar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: perfil.renda,
                                    onChange: (e)=>atualizar("renda", e.target.value),
                                    className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60",
                                    children: RENDAS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: r,
                                            children: r
                                        }, r, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: "Escolaridade anterior",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: perfil.escolaridade,
                                    onChange: (e)=>atualizar("escolaridade", e.target.value),
                                    className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400/60",
                                    children: ESCOLARIDADES.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: e,
                                            children: e
                                        }, e, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Campo, {
                                rotulo: `k — vizinhos consultados: ${perfil.k}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 3,
                                    max: 41,
                                    step: 2,
                                    value: perfil.k,
                                    onChange: (e)=>atualizar("k", Number(e.target.value)),
                                    className: "w-full accent-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: simular,
                                className: "flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    "Prever desempenho"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            !resultado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 36,
                            className: "mx-auto text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-3 text-base font-semibold text-slate-300",
                            children: "Aguardando um perfil"
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-slate-500",
                            children: [
                                "Preencha o formulário e clique em ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Prever desempenho"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 303,
                                    columnNumber: 49
                                }, this),
                                " — ou use um dos exemplos rápidos para comparar um perfil de alto risco com um favorável."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                    lineNumber: 297,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultadoSimulador, {
                resultado: resultado
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 310,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(Simulador, "+9cvk7hvsSba3570rwls8oawvLs=");
_c4 = Simulador;
function Campo({ rotulo, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-1.5 block text-xs font-medium text-slate-300",
                children: rotulo
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_c5 = Campo;
function ResultadoSimulador({ resultado }) {
    const { perfil, knn, parecer } = resultado;
    const areas = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]);
    const dadosBarras = areas.map((a)=>({
            area: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a],
            Previsto: Math.round(knn.notasPrevistas[a] * 10) / 10,
            "Média dos vizinhos": Math.round(knn.mediaVizinhos[a] * 10) / 10
        }));
    const dadosRadar = areas.map((a)=>({
            area: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a],
            Previsto: knn.notasPrevistas[a],
            "Média dos vizinhos": knn.mediaVizinhos[a]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-5",
                children: areas.map((a)=>{
                    const corte = a === "NU_NOTA_REDACAO" ? __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORTE"].redacao : __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORTE"].objetiva;
                    const nota = knn.notasPrevistas[a];
                    const acima = nota >= corte;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl border p-3 text-center ${acima ? "border-emerald-500/40 bg-emerald-500/5" : "border-amber-500/40 bg-amber-500/5"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a]
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-0.5 text-2xl font-bold tabular-nums ${acima ? "text-emerald-400" : "text-amber-400"}`,
                                children: nota.toFixed(0)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 361,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 flex items-center justify-center gap-1 text-[10px] text-slate-500",
                                children: [
                                    acima ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 10,
                                        className: "text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 370,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        size: 10,
                                        className: "text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this),
                                    "corte ",
                                    corte.toFixed(0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 368,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 352,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-xl border border-slate-800 bg-slate-900/70 p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-100",
                                children: "Previsto × média dos vizinhos × corte"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-xs text-slate-400",
                                children: [
                                    perfil.k,
                                    " vizinhos mais próximos · pesos por proximidade"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                        data: dadosBarras,
                                        margin: {
                                            top: 8,
                                            right: 8,
                                            left: -18,
                                            bottom: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                                strokeDasharray: "3 3",
                                                vertical: false
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "area",
                                                tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                                axisLine: {
                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                                },
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                                axisLine: false,
                                                tickLine: false,
                                                domain: [
                                                    0,
                                                    180
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                cursor: {
                                                    fill: "rgba(148,163,184,0.08)"
                                                },
                                                contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                                itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                                labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                                y: 100,
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].vermelho,
                                                strokeDasharray: "5 4"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "Previsto",
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                radius: [
                                                    5,
                                                    5,
                                                    0,
                                                    0
                                                ],
                                                maxBarSize: 28
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                dataKey: "Média dos vizinhos",
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].cinza,
                                                radius: [
                                                    5,
                                                    5,
                                                    0,
                                                    0
                                                ],
                                                maxBarSize: 28
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-sm bg-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 410,
                                                columnNumber: 15
                                            }, this),
                                            " Previsto"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-sm bg-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 413,
                                                columnNumber: 15
                                            }, this),
                                            " Média dos vizinhos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-0.5 bg-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            " Corte 100"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-xl border border-slate-800 bg-slate-900/70 p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-100",
                                children: "Radar comparativo"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-3 text-xs text-slate-400",
                                children: "Perfil previsto × perfil médio do grupo semelhante"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadarChart"], {
                                        data: dadosRadar,
                                        outerRadius: "78%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarGrid"], {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarAngleAxis"], {
                                                dataKey: "area",
                                                tick: {
                                                    fill: "#94a3b8",
                                                    fontSize: 10
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PolarRadiusAxis"], {
                                                angle: 90,
                                                domain: [
                                                    0,
                                                    180
                                                ],
                                                tick: {
                                                    fill: "#475569",
                                                    fontSize: 9
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                                name: "Previsto",
                                                dataKey: "Previsto",
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                fillOpacity: 0.35
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radar"], {
                                                name: "Média dos vizinhos",
                                                dataKey: "Média dos vizinhos",
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].cinzaClaro,
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].cinzaClaro,
                                                fillOpacity: 0.12
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                                itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                                labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center justify-center gap-4 text-[11px] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-full bg-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 458,
                                                columnNumber: 15
                                            }, this),
                                            " Previsto"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-full bg-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this),
                                            " Média dos vizinhos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `rounded-xl border p-5 ${parecer.nivel === "ALTO" ? "border-rose-500/40 bg-rose-500/5" : parecer.nivel === "MODERADO" ? "border-amber-500/40 bg-amber-500/5" : "border-emerald-500/40 bg-emerald-500/5"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BadgeNivel"], {
                                nivel: parecer.nivel
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const evento = new CustomEvent("ir-para-recomendacao");
                                    window.dispatchEvent(evento);
                                },
                                className: "flex items-center gap-1 text-xs font-medium text-slate-300 underline-offset-2 hover:underline",
                                children: [
                                    "Ver parecer completo ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 486,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-semibold text-slate-100",
                        children: parecer.titulo
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs leading-relaxed text-slate-400",
                        children: parecer.resumo
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] leading-relaxed text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "text-slate-400",
                                children: "Justificativa:"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            " ",
                            parecer.justificativa
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-slate-800 bg-slate-900/70 p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-slate-100",
                        children: [
                            "👥 ",
                            perfil.k,
                            " vizinhos mais próximos do perfil"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-xs text-slate-400",
                        children: "Candidatos reais da base histórica (conjunto de treino) com perfil socioeconômico mais semelhante — notas reais e aprovação efetiva."
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-96 overflow-y-auto rounded-lg border border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full min-w-[860px] text-left text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "sticky top-0 bg-slate-900 text-[10px] uppercase tracking-wider text-slate-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5",
                                                children: "Sexo"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5",
                                                children: "Idade"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5",
                                                children: "UF"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5",
                                                children: "Renda"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5",
                                                children: "Trabalho"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            areas.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-3 py-2.5 text-right",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a]
                                                }, a, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5 text-center",
                                                children: "Certif."
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-3 py-2.5 text-right",
                                                children: "Dist."
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 507,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-800/70",
                                    children: knn.vizinhos.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "text-slate-300 transition hover:bg-slate-800/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: v.registro.sexo === "F" ? "Fem." : "Masc."
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_FAIXA_ETARIA"][v.registro.faixa]
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: v.registro.uf
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: v.registro.renda
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2",
                                                    children: v.registro.trabalho
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                areas.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-3 py-2 text-right tabular-nums",
                                                        children: v.registro.notas[a].toFixed(1)
                                                    }, a, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-center",
                                                    children: v.certificacaoProvavel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 14,
                                                        className: "mx-auto text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        size: 14,
                                                        className: "mx-auto text-rose-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-3 py-2 text-right tabular-nums text-slate-500",
                                                    children: v.distancia.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${v.registro.id}-${i}`, true, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[11px] text-slate-500",
                        children: [
                            'A coluna "Certif." marca vizinhos aprovados em ≥ 3 das 4 áreas objetivas (certificação provável). ',
                            Math.round(knn.taxaAprovacaoVizinhos * 100),
                            "% destes vizinhos conquistaram a certificação."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/simulador.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
_c6 = ResultadoSimulador;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FAIXAS");
__turbopack_context__.k.register(_c1, "TRABALHOS");
__turbopack_context__.k.register(_c2, "RENDAS");
__turbopack_context__.k.register(_c3, "ESCOLARIDADES");
__turbopack_context__.k.register(_c4, "Simulador");
__turbopack_context__.k.register(_c5, "Campo");
__turbopack_context__.k.register(_c6, "ResultadoSimulador");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgeNivel",
    ()=>BadgeNivel,
    "CORES",
    ()=>CORES,
    "CORES_AREAS",
    ()=>CORES_AREAS,
    "KpiCard",
    ()=>KpiCard,
    "Painel",
    ()=>Painel,
    "eixoTick",
    ()=>eixoTick,
    "tooltipItemStyle",
    ()=>tooltipItemStyle,
    "tooltipLabelStyle",
    ()=>tooltipLabelStyle,
    "tooltipStyle",
    ()=>tooltipStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const CORES = {
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
    grid: "#1e293b"
};
const CORES_AREAS = {
    NU_NOTA_LC: CORES.esmeralda,
    NU_NOTA_MT: CORES.ambar,
    NU_NOTA_CN: CORES.teal,
    NU_NOTA_CH: CORES.violeta,
    NU_NOTA_REDACAO: CORES.rosa
};
const tooltipStyle = {
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "10px",
    color: "#e2e8f0",
    fontSize: "12px"
};
const tooltipItemStyle = {
    color: "#e2e8f0"
};
const tooltipLabelStyle = {
    color: "#94a3b8"
};
const eixoTick = {
    fill: "#94a3b8",
    fontSize: 11
};
function KpiCard({ rotulo, valor, sub, icone, destaque }) {
    const cor = destaque === "esmeralda" ? "text-emerald-400" : destaque === "ambar" ? "text-amber-400" : destaque === "rosa" ? "text-rose-400" : "text-slate-100";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-slate-800 bg-slate-900/70 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] uppercase tracking-wider text-slate-400",
                        children: rotulo
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    icone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500",
                        children: icone
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                        lineNumber: 74,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-1 text-2xl font-bold tabular-nums ${cor}`,
                children: valor
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            sub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-xs text-slate-500",
                children: sub
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = KpiCard;
function Painel({ titulo, descricao, children, acao }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-slate-800 bg-slate-900/70 p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-slate-100",
                                children: titulo
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            descricao ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs text-slate-400",
                                children: descricao
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    acao
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_c1 = Painel;
function BadgeNivel({ nivel }) {
    const estilos = {
        ALTO: "bg-rose-500/15 text-rose-400 border-rose-500/40",
        MODERADO: "bg-amber-500/15 text-amber-400 border-amber-500/40",
        BAIXO: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${estilos[nivel]}`,
        children: [
            "RISCO ",
            nivel
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c2 = BadgeNivel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "KpiCard");
__turbopack_context__.k.register(_c1, "Painel");
__turbopack_context__.k.register(_c2, "BadgeNivel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisaoGeral",
    ()=>VisaoGeral
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MÓDULO 1 — VISÃO GERAL
 * KPIs da base histórica + gráficos de contexto (aprovação por área,
 * distribuição de notas, médias por região).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/book-open-check.js [app-client] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metricas_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/data/metricas_modelo.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/ui-bits.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const METRICAS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$metricas_modelo$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function VisaoGeral() {
    const kpis = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGREGADOS"].kpis;
    // Aprovação por área (objetivas)
    const aprovPorArea = [
        {
            area: "Linguagens",
            taxa: kpis.taxa_aprovacao.IN_APROVADO_LC,
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"].NU_NOTA_LC
        },
        {
            area: "Matemática",
            taxa: kpis.taxa_aprovacao.IN_APROVADO_MT,
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"].NU_NOTA_MT
        },
        {
            area: "C. da Natureza",
            taxa: kpis.taxa_aprovacao.IN_APROVADO_CN,
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"].NU_NOTA_CN
        },
        {
            area: "C. Humanas",
            taxa: kpis.taxa_aprovacao.IN_APROVADO_CH,
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"].NU_NOTA_CH
        }
    ];
    // Histograma das notas de Linguagens
    const histLC = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGREGADOS"].histogramas.NU_NOTA_LC;
    const dadosHist = histLC.counts.map((c, i)=>({
            faixa: Math.round(histLC.edges[i]),
            candidatos: c
        }));
    // Média por região × área
    const regioes = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AGREGADOS"].por_regiao.map((r)=>({
            regiao: r.regiao,
            Linguagens: r.NU_NOTA_LC,
            Matemática: r.NU_NOTA_MT,
            "C. da Natureza": r.NU_NOTA_CN,
            "C. Humanas": r.NU_NOTA_CH
        }));
    // Média por área (cards)
    const mediasPorArea = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]).map((a)=>({
            area: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a],
            media: kpis.media_notas[a],
            cor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"][a]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "Candidatos presentes",
                        valor: kpis.n_presentes.toLocaleString("pt-BR"),
                        sub: "pelo menos uma prova com nota",
                        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 84,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "Exames completos",
                        valor: kpis.n_exames_completos.toLocaleString("pt-BR"),
                        sub: `${kpis.pct_exames_completos}% dos presentes`,
                        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 90,
                            columnNumber: 18
                        }, this),
                        destaque: "esmeralda"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "Aprovação média (4 áreas)",
                        valor: `${(aprovPorArea.reduce((a, b)=>a + b.taxa, 0) / 4).toFixed(1)}%`,
                        sub: "corte oficial: 100 pts",
                        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 97,
                            columnNumber: 18
                        }, this),
                        destaque: "ambar"
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KpiCard"], {
                        rotulo: "MAE global do modelo",
                        valor: `${METRICAS.mae_global.toFixed(1)} pts`,
                        sub: "erro absoluto médio no teste",
                        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 104,
                            columnNumber: 18
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-5",
                children: mediasPorArea.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full",
                                        style: {
                                            background: m.cor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: m.area
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xl font-bold tabular-nums text-slate-100",
                                children: m.media.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m.area, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Taxa de aprovação por área",
                        descricao: "Percentual de candidatos presentes aprovados em cada prova (nota ≥ 100)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: aprovPorArea,
                                    margin: {
                                        top: 8,
                                        right: 8,
                                        left: -18,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "area",
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: false,
                                            tickLine: false,
                                            unit: "%",
                                            domain: [
                                                0,
                                                60
                                            ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            cursor: {
                                                fill: "rgba(148,163,184,0.08)"
                                            },
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"],
                                            formatter: (v)=>[
                                                    `${Number(v).toFixed(1)}%`,
                                                    "Aprovação"
                                                ]
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "taxa",
                                            radius: [
                                                6,
                                                6,
                                                0,
                                                0
                                            ],
                                            maxBarSize: 52,
                                            children: aprovPorArea.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: d.cor
                                                }, d.area, false, {
                                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                        titulo: "Distribuição das notas — Linguagens e Códigos",
                        descricao: "Histograma da base histórica; linha vermelha = corte de aprovação (100)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: "100%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                                    data: dadosHist,
                                    margin: {
                                        top: 8,
                                        right: 8,
                                        left: -18,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: "gradLC",
                                                x1: "0",
                                                y1: "0",
                                                x2: "0",
                                                y2: "1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                        stopOpacity: 0.45
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                                        stopOpacity: 0.02
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                            strokeDasharray: "3 3",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "faixa",
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: {
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                            },
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                            axisLine: false,
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                            itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                            labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"],
                                            formatter: (v)=>[
                                                    v.toLocaleString("pt-BR"),
                                                    "Candidatos"
                                                ],
                                            labelFormatter: (l)=>`Nota ${l}`
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                            type: "monotone",
                                            dataKey: "candidatos",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].esmeralda,
                                            strokeWidth: 2,
                                            fill: "url(#gradLC)"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                            x: 100,
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].vermelho,
                                            strokeDasharray: "5 4"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Painel"], {
                titulo: "Nota média por região e área",
                descricao: "Gradiente regional do desempenho — um dos sinais que o K-NN captura pela UF",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                            width: "100%",
                            height: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                data: regioes,
                                margin: {
                                    top: 8,
                                    right: 8,
                                    left: -18,
                                    bottom: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid,
                                        strokeDasharray: "3 3",
                                        vertical: false
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                        dataKey: "regiao",
                                        tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                        axisLine: {
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].grid
                                        },
                                        tickLine: false
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                        tick: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eixoTick"],
                                        axisLine: false,
                                        tickLine: false,
                                        domain: [
                                            0,
                                            110
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        cursor: {
                                            fill: "rgba(148,163,184,0.08)"
                                        },
                                        contentStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipStyle"],
                                        itemStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipItemStyle"],
                                        labelStyle: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tooltipLabelStyle"]
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                        y: 100,
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES"].vermelho,
                                        strokeDasharray: "5 4"
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"]).filter((a)=>a !== "NU_NOTA_REDACAO").map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROTULOS_AREAS"][a],
                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$ui$2d$bits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CORES_AREAS"][a],
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ],
                                            maxBarSize: 30
                                        }, a, false, {
                                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 flex items-start gap-1.5 text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"], {
                                size: 14,
                                className: "mt-0.5 shrink-0 text-emerald-400"
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            "Estes padrões (efeito de renda, região e idade) justificam o uso do perfil socioeconômico como variável explicativa do K-NN — veja a Análise Exploratória."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c = VisaoGeral;
var _c;
__turbopack_context__.k.register(_c, "VisaoGeral");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=scripts_test_dash_src_components_dashboard_1g3_shq._.js.map