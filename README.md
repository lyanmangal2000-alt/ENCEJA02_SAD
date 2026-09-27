# AV1 — SAD ENCCEJA com K-NN

Sistema de Apoio à Tomada de Decisão para o ENCCEJA (INEP 2024) usando o
algoritmo **K-NN** (k-vizinhos mais próximos), com duas interfaces:

```
.
├── projeto_knn_encceja/        # Pipeline Python + interface Streamlit
│   ├── src/                    # ETL, features, treino, recomendações (10 módulos)
│   ├── app/app_streamlit.py    # Interface Streamlit (3 abas)
│   ├── modelos/                # modelo_knn.joblib (treinado) + metadados
│   ├── export/                 # métricas e dados p/ dashboard (JSON)
│   ├── data/                   # base sintética (60.000) + base processada
│   ├── README.md               # documentação acadêmica (12 seções)
│   ├── GUIA_VSCODE.md          # passo a passo de execução no VSCode
│   └── requirements.txt
│
└── dashboard_encceja_nextjs/   # Dashboard web Next.js (5 abas)
    ├── src/app/                # páginas e layout
    ├── src/components/dashboard/  # visão geral, simulador, recomendação…
    ├── src/lib/knn.ts          # K-NN em TypeScript (roda no navegador)
    ├── src/data/               # JSONs exportados pelo pipeline
    └── package.json
```

## Como executar — pipeline Python (Streamlit)

```bash
cd projeto_knn_encceja
pip install -r requirements.txt
streamlit run app/app_streamlit.py
```

O modelo já vem treinado (`modelos/modelo_knn.joblib`). Para reproduzir o
treino do zero, execute os módulos de `src/` na ordem documentada no README.

## Como executar — dashboard Next.js

```bash
cd dashboard_encceja_nextjs
npm install
npm run dev
```

Abra `http://localhost:3000`. O K-NN executa no navegador — não requer o
modelo Python.

## Modelo

| Configuração | Valor |
|---|---|
| Algoritmo | K-NN (classificação + regressão por vizinhança) |
| Hiperparâmetros finais | k=21 · distância Manhattan · peso `distance` |
| Busca | 28 configurações × validação cruzada 5-fold |
| MAE global (teste) | 16,72 |
| RMSE global (teste) | 21,09 |
| Acurácia de aprovação | 71,45% |
| Split | treino 28.847 · teste 7.212 |

## Nota sobre os dados

A base é **sintética** (60.000 candidatos), gerada com o mesmo schema dos
microdados oficiais do INEP, para garantir reprodutibilidade sem expor dados
pessoais. Detalhes em `projeto_knn_encceja/data/LEIA-ME.txt`.
