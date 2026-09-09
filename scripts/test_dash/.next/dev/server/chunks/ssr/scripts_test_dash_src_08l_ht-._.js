module.exports = [
"[project]/scripts/test_dash/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-ssr] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/scripts/test_dash/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/lib/knn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$visao$2d$geral$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/visao-geral.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$simulador$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/simulador.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$recomendacao$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/recomendacao.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$exploratoria$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/exploratoria.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$modelo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/components/dashboard/modelo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const ABAS = [
    {
        id: "visao",
        rotulo: "Visão Geral",
        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
            lineNumber: 40,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "simulador",
        rotulo: "Simulador K-NN",
        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
            lineNumber: 41,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "recomendacao",
        rotulo: "Recomendação",
        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
            lineNumber: 42,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "exploratoria",
        rotulo: "Análise Exploratória",
        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
            lineNumber: 43,
            columnNumber: 64
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "modelo",
        rotulo: "Modelo & Métricas",
        icone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
            lineNumber: 44,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Home() {
    const [aba, setAba] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("visao");
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-slate-950 text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b border-slate-800 bg-gradient-to-r from-emerald-950/80 via-slate-950 to-slate-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-lg font-bold tracking-tight",
                                                children: [
                                                    "SAD ENCCEJA",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-400",
                                                        children: "· Apoio à Decisão com K-NN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Previsão de desempenho e recomendações gerenciais para cursinhos preparatórios — microdados INEP ENCCEJA 2024"
                                            }, void 0, false, {
                                                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[11px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-slate-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                            size: 12,
                                            className: "text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        "Base: ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORIGEM_DADOS"],
                                        " · ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$lib$2f$knn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N_AMOSTRA"].toLocaleString("pt-BR"),
                                        " vizinhos em amostra"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mx-auto max-w-7xl px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 overflow-x-auto pb-0.5",
                            children: ABAS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setAba(a.id),
                                    className: `flex shrink-0 items-center gap-2 rounded-t-lg border-b-2 px-4 py-2.5 text-xs font-medium transition ${aba === a.id ? "border-emerald-400 text-emerald-300" : "border-transparent text-slate-400 hover:text-slate-200"}`,
                                    children: [
                                        a.icone,
                                        a.rotulo
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6",
                children: [
                    aba === "visao" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$visao$2d$geral$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VisaoGeral"], {}, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 29
                    }, this),
                    aba === "simulador" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$simulador$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Simulador"], {
                        kPadrao: 21,
                        aoSimular: setResultado,
                        resultadoExterno: resultado
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    aba === "recomendacao" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$recomendacao$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecomendacaoGerencial"], {
                        resultado: resultado
                    }, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 36
                    }, this),
                    aba === "exploratoria" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$exploratoria$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Exploratoria"], {}, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 36
                    }, this),
                    aba === "modelo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$components$2f$dashboard$2f$modelo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeloPanel"], {}, void 0, false, {
                        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-auto border-t border-slate-800 bg-slate-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Trabalho AV1 — Sistemas de Apoio à Tomada de Decisão · K-NN (scikit-learn no pipeline Python; réplica em TypeScript no navegador) · Dados: INEP Microdados ENCCEJA 2024"
                        }, void 0, false, {
                            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-1.5",
                            children: [
                                "App Streamlit completo no repositório",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 11,
                                    className: "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/scripts/test_dash/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scripts/test_dash/src/app/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/scripts/test_dash/src/lib/knn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGREGADOS",
    ()=>AGREGADOS,
    "CORTE",
    ()=>CORTE,
    "MAP_CERTIFICACAO",
    ()=>MAP_CERTIFICACAO,
    "MAP_ESCOLARIDADE",
    ()=>MAP_ESCOLARIDADE,
    "MAP_FAIXA_ETARIA",
    ()=>MAP_FAIXA_ETARIA,
    "MAP_RENDA",
    ()=>MAP_RENDA,
    "MAP_TRABALHO",
    ()=>MAP_TRABALHO,
    "METRICAS",
    ()=>METRICAS,
    "N_AMOSTRA",
    ()=>N_AMOSTRA,
    "ORIGEM_DADOS",
    ()=>ORIGEM_DADOS,
    "ROTULOS_AREAS",
    ()=>ROTULOS_AREAS,
    "UFS",
    ()=>UFS,
    "codificarPerfil",
    ()=>codificarPerfil,
    "executarKNN",
    ()=>executarKNN,
    "gerarRecomendacao",
    ()=>gerarRecomendacao
]);
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scripts/test_dash/src/data/dados_dashboard.json.[json].cjs [app-ssr] (ecmascript)");
;
const MAP_TRABALHO = {
    A: "Não trabalha",
    B: "Trabalha eventualmente",
    C: "Trabalha até 25h semanais",
    D: "Trabalha de 26 a 39h semanais",
    E: "Trabalha 40h ou mais semanais"
};
const MAP_RENDA = {
    A: "Nenhuma renda",
    B: "Até 1 salário mínimo",
    C: "De 1 a 2 salários mínimos",
    D: "De 2 a 3 salários mínimos",
    E: "De 3 a 5 salários mínimos",
    F: "De 5 a 10 salários mínimos",
    G: "Mais de 10 salários mínimos"
};
const MAP_ESCOLARIDADE = {
    A: "Sem escolaridade/Analfabeto",
    B: "Fundamental incompleto",
    C: "Fundamental completo",
    D: "Médio incompleto",
    E: "Médio completo",
    F: "Superior completo"
};
const MAP_FAIXA_ETARIA = {
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
    19: "Maior de 70 anos"
};
const MAP_CERTIFICACAO = {
    1: "Ensino Fundamental",
    2: "Ensino Médio"
};
const ROTULOS_AREAS = {
    NU_NOTA_LC: "Linguagens",
    NU_NOTA_MT: "Matemática",
    NU_NOTA_CN: "C. da Natureza",
    NU_NOTA_CH: "C. Humanas",
    NU_NOTA_REDACAO: "Redação"
};
const CORTE = {
    objetiva: 100,
    redacao: 5
};
const UFS = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO"
];
// ---------------------------------------------------------------------------
// Índices das features (derivados dos nomes exportados — à prova de mudança
// de ordem no pipeline Python)
// ---------------------------------------------------------------------------
const FEATURE_NAMES = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].scaler.feature_names;
const MEAN = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].scaler.mean;
const SCALE = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].scaler.scale;
const IDX = {
    renda: FEATURE_NAMES.indexOf("renda_familiar"),
    escolaridade: FEATURE_NAMES.indexOf("escolaridade_anterior"),
    trabalho: FEATURE_NAMES.indexOf("situacao_trabalho"),
    faixa: FEATURE_NAMES.indexOf("TP_FAIXA_ETARIA"),
    sexoF: FEATURE_NAMES.indexOf("TP_SEXO_F"),
    sexoM: FEATURE_NAMES.indexOf("TP_SEXO_M"),
    certF: FEATURE_NAMES.indexOf("certificacao_Ensino Fundamental"),
    certM: FEATURE_NAMES.indexOf("certificacao_Ensino Médio"),
    ufs: Object.fromEntries(UFS.map((uf)=>[
            uf,
            FEATURE_NAMES.indexOf(`SG_UF_PROVA_${uf}`)
        ]))
};
const TRABALHO_ORDENADO = Object.values(MAP_TRABALHO);
const RENDA_ORDENADA = Object.values(MAP_RENDA);
const ESC_ORDENADA = Object.values(MAP_ESCOLARIDADE);
function codificarPerfil(p) {
    const raw = new Array(FEATURE_NAMES.length).fill(0);
    raw[IDX.renda] = RENDA_ORDENADA.indexOf(p.renda);
    raw[IDX.escolaridade] = ESC_ORDENADA.indexOf(p.escolaridade);
    raw[IDX.trabalho] = TRABALHO_ORDENADO.indexOf(p.trabalho);
    raw[IDX.faixa] = p.faixa;
    raw[p.sexo === "F" ? IDX.sexoF : IDX.sexoM] = 1;
    raw[IDX.ufs[p.uf]] = 1;
    raw[p.cert === 1 ? IDX.certF : IDX.certM] = 1;
    return raw.map((v, i)=>(v - MEAN[i]) / SCALE[i]);
}
function executarKNN(perfil) {
    const vetor = codificarPerfil(perfil);
    const registros = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registros;
    const scores = registros.map((r)=>{
        let d = 0;
        for(let i = 0; i < vetor.length; i++){
            d += Math.abs(vetor[i] - r.vec[i]);
        }
        return {
            registro: r,
            distancia: d
        };
    });
    scores.sort((a, b)=>a.distancia - b.distancia);
    const top = scores.slice(0, perfil.k);
    const vizinhos = top.map((s)=>({
            registro: s.registro,
            distancia: s.distancia,
            // weights='distance' do sklearn: 1/d (d≈0 → peso máximo, correspondência exata)
            peso: 1 / Math.max(s.distancia, 1e-9),
            certificacaoProvavel: Object.values(s.registro.aprov).reduce((a, b)=>a + b, 0) >= 3
        }));
    const somaPesos = vizinhos.reduce((acc, v)=>acc + v.peso, 0);
    const notasPrevistas = {};
    const mediaVizinhos = {};
    for (const area of Object.keys(ROTULOS_AREAS)){
        notasPrevistas[area] = vizinhos.reduce((acc, v)=>acc + v.registro.notas[area] * v.peso, 0) / somaPesos;
        mediaVizinhos[area] = vizinhos.reduce((acc, v)=>acc + v.registro.notas[area], 0) / vizinhos.length;
    }
    const taxaAprovacaoVizinhos = vizinhos.filter((v)=>v.certificacaoProvavel).length / vizinhos.length;
    return {
        notasPrevistas,
        mediaVizinhos,
        vizinhos,
        taxaAprovacaoVizinhos
    };
}
const TOLERANCIA_GAP = 2.0; // pts — idêntica ao Python
function gerarRecomendacao(r) {
    const { notasPrevistas, mediaVizinhos, vizinhos, taxaAprovacaoVizinhos } = r;
    const areas = Object.keys(ROTULOS_AREAS);
    const cortes = areas.map((a)=>a === "NU_NOTA_REDACAO" ? CORTE.redacao : CORTE.objetiva);
    const nAbaixoCorte = areas.filter((a, i)=>notasPrevistas[a] < cortes[i]).length;
    const nTotal = areas.length;
    const prontidaoInsuficiente = nAbaixoCorte >= 3;
    const maioriaAprovada = taxaAprovacaoVizinhos >= 0.5;
    const nAbaixoMedia = areas.filter((a)=>notasPrevistas[a] < mediaVizinhos[a] - TOLERANCIA_GAP).length;
    const criticas = areas.map((a)=>{
        const corte = a === "NU_NOTA_REDACAO" ? CORTE.redacao : CORTE.objetiva;
        const abaixoCorte = notasPrevistas[a] < corte;
        const gap = notasPrevistas[a] - mediaVizinhos[a];
        return {
            area: a,
            abaixoCorte,
            gap
        };
    }).filter((c)=>c.abaixoCorte || c.gap <= -TOLERANCIA_GAP).sort((x, y)=>Number(y.abaixoCorte) - Number(x.abaixoCorte) || x.gap - y.gap).map((c)=>({
            rotulo: ROTULOS_AREAS[c.area],
            notaPrevista: Math.round(notasPrevistas[c.area] * 10) / 10,
            mediaVizinhos: Math.round(mediaVizinhos[c.area] * 10) / 10,
            abaixoCorte: c.abaixoCorte
        }));
    const pctTaxa = `${Math.round(taxaAprovacaoVizinhos * 100)}%`;
    let nivel;
    let titulo;
    let resumo;
    let acoesBase;
    if (prontidaoInsuficiente && !maioriaAprovada) {
        nivel = "ALTO";
        titulo = "Alto risco de reprovação — reforço intensivo recomendado";
        resumo = `A nota prevista fica abaixo do corte de aprovação em ${nAbaixoCorte} das ` + `${nTotal} áreas, e apenas ${pctTaxa} dos vizinhos historicamente ` + `semelhantes conquistaram a certificação. Sem intervenção, a probabilidade ` + `de reprovação é alta.`;
        acoesBase = [
            "Matricular em turma de REFORÇO INTENSIVO desde o início do curso",
            "Designar tutor individual com acompanhamento semanal de desempenho",
            "Priorizar simulados diagnósticos quinzenais nas disciplinas críticas",
            "Reavaliar o plano de estudos após 4 semanas de reforço"
        ];
    } else if (!prontidaoInsuficiente && maioriaAprovada) {
        nivel = "BAIXO";
        titulo = "Perfil favorável — acompanhamento padrão";
        resumo = `A nota prevista fica acima do corte de aprovação na maioria das áreas ` + `(abaixo em apenas ${nAbaixoCorte} de ${nTotal}), e ${pctTaxa} dos vizinhos ` + `comparáveis obtiveram aprovação suficiente para certificação. O histórico ` + `indica bom prognóstico.`;
        acoesBase = [
            "Incluir em turma regular com acompanhamento padrão",
            "Manter ritmo de simulados e monitoria coletiva do cursinho",
            "Monitorar evolução nas avaliações internas mensais"
        ];
    } else {
        nivel = "MODERADO";
        titulo = "Caso intermediário — acompanhamento moderado com monitoramento";
        resumo = `O quadro é misto: a nota prevista fica abaixo do corte em ` + `${nAbaixoCorte} de ${nTotal} áreas, enquanto ${pctTaxa} dos vizinhos ` + `semelhantes foram aprovados. O perfil tem potencial de aprovação com apoio ` + `pontual — não exige reforço intensivo, mas não deve ficar sem atenção.`;
        acoesBase = [
            "Incluir em turma regular com MONITORIA DEDICADA nas disciplinas críticas",
            "Agendar acompanhamento pedagógico quinzenal",
            "Aplicar simulado diagnóstico no primeiro mês para reclassificar o risco"
        ];
    }
    const criticasTxt = criticas.length > 0 ? `Priorizar reforço direcionado em: ${criticas.slice(0, 3).map((c)=>c.rotulo).join(", ")}` : null;
    const acoes = criticasTxt ? [
        criticasTxt,
        ...acoesBase
    ] : acoesBase;
    const comparativoViz = nAbaixoMedia > 0 ? `em ${nAbaixoMedia} de ${nTotal} áreas a previsão fica visivelmente abaixo da média dos vizinhos` : "em nenhuma área a previsão fica muito abaixo da média dos vizinhos";
    const detalheCriticas = criticas.length > 0 ? criticas.map((c)=>{
        const isRed = c.rotulo === "Redação";
        return isRed ? `Redação prevista ${c.notaPrevista.toFixed(1)} (corte 5)` : `${c.rotulo} prevista ${Math.round(c.notaPrevista)} (corte 100; média dos vizinhos ${Math.round(c.mediaVizinhos)})`;
    }).join("; ") : "nenhuma disciplina abaixo do corte de aprovação";
    const justificativa = `Prontidão: aprovado(a) em ${nTotal - nAbaixoCorte} das ${nTotal} áreas pela ` + `previsão. Comparação com vizinhos: ${comparativoViz}. Disciplinas que exigem ` + `atenção: ${detalheCriticas}. Aproximadamente ${pctTaxa} dos ${vizinhos.length} ` + `vizinhos mais próximos conquistaram aprovação em pelo menos 3 das 4 áreas objetivas.`;
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
            nAbaixoMedia
        }
    };
}
const AGREGADOS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].agregados;
const ORIGEM_DADOS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].origem;
const N_AMOSTRA = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].n_amostra;
const METRICAS = __TURBOPACK__imported__module__$5b$project$5d2f$scripts$2f$test_dash$2f$src$2f$data$2f$dados_dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].agregados.kpis;
}),
];

//# sourceMappingURL=scripts_test_dash_src_08l_ht-._.js.map