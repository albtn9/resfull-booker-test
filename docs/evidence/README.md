# Evidências visuais

Pasta para artefatos de execução (screenshots, GIFs, exports do CI).

## Arquivos esperados

| Arquivo | Descrição | Como gerar |
| ------- | --------- | ---------- |
| `mochawesome-report.png` | Relatório HTML consolidado | `npm run evidence:report` |
| `github-actions.png` | Pipeline CI verde | Screenshot da aba Actions no GitHub |
| `cypress-run.gif` | Execução dos testes | `npm run cy:open` + gravador de tela |
| `ci-artifacts.png` | Artefato `mochawesome-report` | Download no workflow → screenshot |

## Comandos

```bash
# Gera relatório e captura screenshot (requer Playwright)
npm run test
npm run evidence:report

# Gravar execução (manual)
npm run cy:open
```

## CI — artefatos

O workflow `.github/workflows/cypress.yml` publica:

- **Nome:** `mochawesome-report`
- **Conteúdo:** `cypress/reports/final/` (HTML + assets)

Após cada push em `main`, baixe o artefato em:  
`https://github.com/albtn9/resfull-booker-test/actions`
