# Guia rápido — Rodando o projeto no VSCode

Guia completo em PDF: `Guia_Execucao_VSCODE_SAD_ENCCEJA.pdf` (na pasta de downloads).

## Pré-requisitos

| Ferramenta | Versão | Verificar | Download |
|------------|--------|-----------|----------|
| Python | 3.10+ | `python --version` | https://python.org |
| Node.js (só p/ dashboard web) | 20+ | `node -v` | https://nodejs.org |
| VSCode | atual | — | https://code.visualstudio.com |

Extensões úteis do VSCode: **Python** (Microsoft), **Pylance**, **ESLint**, **Tailwind CSS IntelliSense**.

---

## Interface 1 — App Streamlit (projeto Python)

Abra a pasta `projeto_knn_encceja` no VSCode (**File → Open Folder**) e abra o
terminal integrado (**Ctrl + `** ou menu *Terminal → New Terminal*).

```bash
# 1. Criar ambiente virtual (só na primeira vez)
python -m venv .venv

# 2. Ativar o ambiente
#    Windows (PowerShell):
.venv\Scripts\Activate.ps1
#    Windows (cmd):
.venv\Scripts\activate.bat
#    Linux/Mac:
source .venv/bin/activate

# 3. Instalar dependências (só na primeira vez)
pip install -r requirements.txt

# 4. (Opcional) Retreinar o pipeline — pule se a pasta modelos/ e data/ já
#    contiverem modelo_knn.joblib e base_processada.csv
python src/etl_preparacao.py
python src/treino_knn.py

# 5. Iniciar a interface
streamlit run app/app_streamlit.py
```

Abra **http://localhost:8501** — o app abre com 3 abas: *Simulador de
Matrícula*, *Base Histórica* e *Modelo & Métricas*.

> No PowerShell, se aparecer erro de script bloqueado, rode antes:
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

---

## Interface 2 — Dashboard Next.js

Abra a pasta `dashboard_encceja_nextjs` no VSCode (ou adicione à mesma
janela com *File → Add Folder to Workspace*) e no terminal:

```bash
# 1. Instalar dependências (só na primeira vez, ~1-2 min)
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra **http://localhost:3000** — 5 abas: *Visão Geral*, *Simulador K-NN*
(com 2 presets de demonstração), *Recomendação*, *Análise Exploratória* e
*Modelo & Métricas*. O K-NN roda no próprio navegador.

---

## Rodando as duas ao mesmo tempo

Abra dois terminais no VSCode (botão **+** no painel do terminal): um com o
ambiente virtual ativado para o Streamlit (porta 8501) e outro para o Next.js
(porta 3000). As interfaces são independentes.

## Problemas comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `python` não reconhecido | Python fora do PATH | Reinstale marcando "Add Python to PATH" ou use `py` |
| `pip install` falha com "externally-managed" | pip do sistema | Crie/ative o `.venv` (passo 1-2) |
| `streamlit: command not found` | venv não ativado | Ative o `.venv` e instale as dependências |
| `FileNotFoundError: modelo_knn.joblib` | Modelo não treinado | Rode `python src/etl_preparacao.py` e `python src/treino_knn.py` |
| `npm ERR! engine` / erro de versão | Node antigo | Atualize para Node 20+ |
| Porta 3000/8501 em uso | Outro processo na porta | `npm run dev -- -p 3001` ou `streamlit run app/app_streamlit.py --server.port 8502` |
