module.exports = [
"[project]/scripts/test_dash/src/data/metadados_modelo.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "metricas_area": {
        "NU_NOTA_LC": {
            "mae": 20.62,
            "rmse": 25.91
        },
        "NU_NOTA_MT": {
            "mae": 20.59,
            "rmse": 25.94
        },
        "NU_NOTA_CN": {
            "mae": 20.3,
            "rmse": 25.59
        },
        "NU_NOTA_CH": {
            "mae": 20.26,
            "rmse": 25.67
        },
        "NU_NOTA_REDACAO": {
            "mae": 1.84,
            "rmse": 2.32
        }
    },
    "mae_global": 16.72,
    "rmse_global": 21.09,
    "acuracia_aprovacao": 0.7145,
    "historico_busca": [
        {
            "k": 21,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 19.3254
        },
        {
            "k": 21,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 19.3303
        },
        {
            "k": 15,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 19.4866
        },
        {
            "k": 15,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 19.4891
        },
        {
            "k": 11,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 19.7
        },
        {
            "k": 11,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 19.7237
        },
        {
            "k": 9,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 19.8906
        },
        {
            "k": 9,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 19.8933
        },
        {
            "k": 7,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 20.1521
        },
        {
            "k": 7,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 20.158
        },
        {
            "k": 5,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 20.6641
        },
        {
            "k": 5,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 20.6661
        },
        {
            "k": 21,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 21.268
        },
        {
            "k": 21,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 21.2875
        },
        {
            "k": 15,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 21.3739
        },
        {
            "k": 15,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 21.4024
        },
        {
            "k": 11,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 21.5086
        },
        {
            "k": 11,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 21.5536
        },
        {
            "k": 9,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 21.6352
        },
        {
            "k": 9,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 21.674
        },
        {
            "k": 3,
            "peso": "uniform",
            "metrica": "euclidean",
            "rmse_cv": 21.7714
        },
        {
            "k": 3,
            "peso": "uniform",
            "metrica": "manhattan",
            "rmse_cv": 21.7836
        },
        {
            "k": 7,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 21.8198
        },
        {
            "k": 7,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 21.8605
        },
        {
            "k": 5,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 22.1529
        },
        {
            "k": 5,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 22.2109
        },
        {
            "k": 3,
            "peso": "distance",
            "metrica": "euclidean",
            "rmse_cv": 22.9153
        },
        {
            "k": 3,
            "peso": "distance",
            "metrica": "manhattan",
            "rmse_cv": 22.9827
        }
    ],
    "n_treino": 28847,
    "n_teste": 7212,
    "melhor_config": {
        "k": 21,
        "peso": "uniform",
        "metrica": "manhattan",
        "rmse_cv": 19.3254
    },
    "config_final": {
        "k": 21,
        "peso": "distance",
        "metrica": "manhattan",
        "rmse_cv": 19.3254
    }
};
}),
"[project]/scripts/test_dash/src/data/metricas_modelo.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "melhor_config": {
        "k": 21,
        "peso": "uniform",
        "metrica": "manhattan",
        "rmse_cv": 19.3254
    },
    "config_final": {
        "k": 21,
        "peso": "distance",
        "metrica": "manhattan",
        "rmse_cv": 19.3254
    },
    "metricas_area": {
        "NU_NOTA_LC": {
            "mae": 20.62,
            "rmse": 25.91
        },
        "NU_NOTA_MT": {
            "mae": 20.59,
            "rmse": 25.94
        },
        "NU_NOTA_CN": {
            "mae": 20.3,
            "rmse": 25.59
        },
        "NU_NOTA_CH": {
            "mae": 20.26,
            "rmse": 25.67
        },
        "NU_NOTA_REDACAO": {
            "mae": 1.84,
            "rmse": 2.32
        }
    },
    "mae_global": 16.72,
    "rmse_global": 21.09,
    "rotulos_areas": {
        "NU_NOTA_LC": "Linguagens e Códigos",
        "NU_NOTA_MT": "Matemática",
        "NU_NOTA_CN": "Ciências da Natureza",
        "NU_NOTA_CH": "Ciências Humanas",
        "NU_NOTA_REDACAO": "Redação"
    },
    "ks_testados": [
        3,
        5,
        7,
        9,
        11,
        15,
        21
    ]
};
}),
];

//# sourceMappingURL=scripts_test_dash_src_data_1fplr8b._.js.map