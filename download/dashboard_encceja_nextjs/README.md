# SAD ENCCEJA — Dashboard Web (Next.js)

Sistema de Apoio à Decisão para gestores de cursinhos preparatórios do ENCCEJA:
previsão de desempenho com **K-Nearest Neighbors** sobre microdados INEP 2024 e
recomendações gerenciais automáticas. O algoritmo K-NN roda **inteiramente no
navegador** (TypeScript), replicando o pipeline Python de treinamento
(codificação ordinal/one-hot, padronização Z-score, distância de Manhattan,
pesos 1/d).

## Requisitos

- **Node.js 20 ou superior** — https://nodejs.org (verifique com `node -v`)
- npm (já vem com o Node.js)

## Como rodar

```bash
# 1. Abra esta pasta no VSCode e abra o terminal integrado (Ctrl + `)

# 2. Instale as dependências (na primeira vez, ~1-2 min)
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:3000** no navegador.

## Módulos do dashboard (5 abas)

| Aba | O que faz |
|-----|-----------|
| **Visão Geral** | KPIs da base, taxa de aprovação por área, histograma de notas, média por região |
| **Simulador K-NN** | Formulário de perfil do candidato → notas previstas, vizinhos consultados, nível de risco (com 2 presets de demonstração) |
| **Recomendação** | Parecer gerencial completo com ações sugeridas por nível de risco |
| **Análise Exploratória** | Renda × nota, faixa etária, trabalho, ranking de UFs, heatmap região × área |
| **Modelo & Métricas** | Curva de busca do k, comparação de pesos, MAE/RMSE por área, limitações |

## Estrutura

```
src/
├── app/                    # layout + página principal (5 abas)
├── components/dashboard/   # 6 componentes (visão-geral, simulador, etc.)
├── components/ui/          # toast/notificações
├── data/                   # amostra da base + parâmetros do scaler (JSON)
├── lib/knn.ts              # motor K-NN em TypeScript (espelha o Python)
└── hooks/                  # hooks utilitários
```

## Observações

- Os dados são uma **amostra sintética** (2.937 registros) exportada pelo
  pipeline Python — mesma distribuição do projeto principal.
- Para rodar a versão completa com dados reais do INEP e retreinar o modelo,
  utilize o projeto Python (pasta `projeto_knn_encceja`).
- `npm run build && npm start` executa a versão de produção.
