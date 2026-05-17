# Resultados das execuções

## Última execução local

| Campo | Valor |
| ----- | ----- |
| Data | 2026-05-16 |
| Comando | `npm run test` |
| Ambiente | Windows / Node 22 / Cypress 15.15 |
| API | https://restful-booker.herokuapp.com |
| Duração total | ~8s (specs) + geração de relatório |

## Resumo

| Métrica | Valor |
| ------- | ----- |
| Specs | 7 |
| Testes | 18 |
| Passou | 18 |
| Falhou | 0 |
| Taxa de sucesso | 100% |

## Detalhamento por spec

| Spec | Testes | Status | Duração |
| ---- | ------ | ------ | ------- |
| `auth.cy.js` | 2 | ✅ | ~1s |
| `booking-crud.cy.js` | 5 | ✅ | ~3s |
| `booking-list.cy.js` | 2 | ✅ | ~1s |
| `booking-performance.cy.js` | 2 | ✅ | ~1s |
| `booking-security.cy.js` | 3 | ✅ | ~1s |
| `booking-validation.cy.js` | 2 | ✅ | <1s |
| `booking-negative.cy.js` | 2 | ✅ | <1s |

## Relatórios

| Artefato | Caminho |
| -------- | ------- |
| HTML consolidado | `cypress/reports/final/report.html` |
| JSON mergeado | `cypress/reports/report.json` |
| CI artifact | `mochawesome-report` (GitHub Actions) |

## Evidências

Screenshots e capturas do pipeline estão em [`docs/evidence/`](evidence/README.md).

## CI

Após push para `main`, verificar: **Actions** → workflow **Cypress API Tests** → download do artefato `mochawesome-report`.
