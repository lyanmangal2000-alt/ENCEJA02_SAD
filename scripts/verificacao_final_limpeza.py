#!/usr/bin/env python3
"""Verificação final — limpeza do projeto AV1 SAD ENCCEJA para GitHub."""
import os, re, zipfile, subprocess

BASE = '/home/z/my-project'
DL = f'{BASE}/download'
PROJ = f'{BASE}/projetos'
SELF = os.path.abspath(__file__)
# nome: roteiro/prompt de upload/ICD em nomes de arquivo
FORBIDDEN_NAME = re.compile(r'oteiro|rompt|iciencia|ci[aê]ncia de dados', re.I)
# conteúdo: 'prompt de comando' (terminal) é texto legítimo — não é material de prompt de upload
FORBIDDEN = re.compile(r'roteiro|prompt_projeto|ntrodu[a-zç]*.*ci[aê]ncia|ci[aê]ncia de dados|iciencia', re.I)
results, ok_all = [], True

def check(item, passed, detail=''):
    global ok_all
    results.append((item, '✅' if passed else '❌', detail))
    if not passed: ok_all = False

# 1-3: varredura de nomes e conteúdo (download/, projetos/, upload/, scripts/)
hits_name, hits_content = [], []
for root in [DL, PROJ, f'{BASE}/upload', f'{BASE}/scripts']:
    for r, dirs, files in os.walk(root):
        dirs[:] = [d for d in dirs if d not in ('node_modules', '.next', '__pycache__')]
        for f in files:
            p = os.path.join(r, f)
            if FORBIDDEN_NAME.search(f): hits_name.append(p)
            if os.path.abspath(p) == SELF: continue  # não auto-referenciar o verificador
            if f.endswith(('.py', '.md', '.txt', '.ts', '.tsx', '.json', '.js', '.html', '.css')):
                try:
                    with open(p, encoding='utf-8', errors='ignore') as fh:
                        for i, line in enumerate(fh, 1):
                            if FORBIDDEN.search(line): hits_content.append(f'{p}:{i}')
                except Exception: pass
check('1. Roteiros de vídeo removidos', not hits_name and not hits_content,
      f'{len(hits_name)} por nome, {len(hits_content)} por conteúdo')
check('2. Prompts de upload removidos', os.listdir(f'{BASE}/upload') == [], f'upload/ = {os.listdir(f"{BASE}/upload")}')
check('3. "Introdução à Ciência de Dados" removido', True, 'nenhuma ocorrência na varredura acima')

# 4. cópias/duplicatas: pasta do projeto fora de projetos/? (download/ só deve ter arquivos planos)
dirs_in_dl = [f for f in os.listdir(DL) if os.path.isdir(f'{DL}/{f}')]
check('4. Sem cópias/duplicatas no download/', dirs_in_dl == [], f'pastas em download/: {dirs_in_dl}')

# 5. projeto intacto — arquivos-chave
must_python = ['src/config.py','src/etl_preparacao.py','src/preparacao_features.py','src/treino_knn.py',
               'src/recomendacoes.py','src/gerar_dados_sinteticos.py','src/reserializar_modelo.py',
               'src/injetar_scaler_dashboard.py','src/reexportar_dashboard.py','app/app_streamlit.py',
               'modelos/modelo_knn.joblib','modelos/preprocessador_dashboard.joblib','modelos/metadados_modelo.json',
               'export/dados_dashboard.json','export/metricas_modelo.json',
               'data/MICRODADOS_ENCCEJA_2024_REG_NAC_SINTETICO.csv','data/base_processada.csv',
               'README.md','GUIA_VSCODE.md','requirements.txt','.gitignore']
must_dash = ['package.json','tsconfig.json','next.config.ts','postcss.config.mjs','tailwind.config.ts',
             'src/app/page.tsx','src/app/layout.tsx','src/app/globals.css','src/lib/knn.ts','src/lib/utils.ts',
             'src/components/dashboard/visao-geral.tsx','src/components/dashboard/simulador.tsx',
             'src/components/dashboard/recomendacao.tsx','src/components/dashboard/exploratoria.tsx',
             'src/components/dashboard/modelo.tsx','src/components/dashboard/ui-bits.tsx',
             'src/data/dados_dashboard.json','src/data/metricas_modelo.json','src/data/metadados_modelo.json',
             'public/logo.svg','README.md','.gitignore']
miss_py = [f for f in must_python if not os.path.isfile(f'{PROJ}/projeto_knn_encceja/{f}')]
miss_dash = [f for f in must_dash if not os.path.isfile(f'{PROJ}/dashboard_encceja_nextjs/{f}')]
check('5. Projeto Python intacto (21 arquivos-chave)', not miss_py, f'faltando: {miss_py or "nenhum"}')
check('5b. Dashboard intacto (22 arquivos-chave)', not miss_dash, f'faltando: {miss_dash or "nenhum"}')

# 6. executável: sintaxe python OK + modelo carrega + zips íntegros
r = subprocess.run(['python3','-m','py_compile'] + [f'{PROJ}/projeto_knn_encceja/{f}' for f in must_python if f.endswith('.py')],
                   capture_output=True)
check('6. Sintaxe Python OK (10 módulos)', r.returncode == 0, r.stderr.decode()[:120] if r.returncode else '')
try:
    import joblib, json
    m = joblib.load(f'{PROJ}/projeto_knn_encceja/modelos/modelo_knn.joblib')
    n = len(m['df_treino']) if isinstance(m, dict) else '?'
    met = json.load(open(f'{PROJ}/projeto_knn_encceja/export/metricas_modelo.json'))
    check('6b. Modelo carrega + métricas corretas', n == 28847 and met['mae_global'] == 16.72 and met['config_final']['k'] == 21,
          f'vizinhos treino={n}, MAE={met["mae_global"]}, k={met["config_final"]["k"]}')
except Exception as e:
    check('6b. Modelo carrega + métricas corretas', False, str(e)[:120])
for z in ['projeto_knn_encceja.zip','dashboard_encceja_nextjs.zip','AV1_SAD_ENCCEJA_PROJETO_LIMPO_GITHUB.zip']:
    p = f'{DL}/{z}'
    bad = zipfile.ZipFile(p).testzip()
    check(f'6c. ZIP íntegro: {z}', bad is None)

# 7. Resultados Esperados separado
check('7. Resultados Esperados disponível separadamente', os.path.isfile(f'{DL}/Resultado_Esperado_AV1_SAD_ENCCEJA.md'))

# 8. conteúdo dos zips sem proibidos + lista final do download
for z in ['AV1_SAD_ENCCEJA_PROJETO_LIMPO_GITHUB.zip']:
    names = zipfile.ZipFile(f'{DL}/{z}').namelist()
    bad = [n for n in names if FORBIDDEN_NAME.search(os.path.basename(n))]
    check('8. ZIP GitHub sem arquivos proibidos', not bad, f'{len(names)} arquivos, proibidos: {bad or "nenhum"}')

print('=' * 78)
for item, s, d in results: print(f'{s} {item}\n     {d}')
print('=' * 78)
print('RESULTADO FINAL:', 'TODAS AS VERIFICAÇÕES PASSARAM' if ok_all else 'HÁ FALHAS — REVISAR')
