# Restful Booker API Tests

[![Cypress API Tests](https://github.com/albtn9/resfull-booker-test/actions/workflows/cypress.yml/badge.svg)](https://github.com/albtn9/resfull-booker-test/actions/workflows/cypress.yml)

Suite de testes de API (Cypress + Postman) contra o [Restful Booker](https://restful-booker.herokuapp.com).

## Cobertura dos requisitos do desafio

| Requisito | Status | Onde |
| --------- | ------ | ---- |
| Autenticação | ✅ | `cypress/e2e/auth.cy.js`, Postman **Auth** |
| CRUD de reservas | ✅ | `cypress/e2e/booking-crud.cy.js`, Postman **Booking** |
| Validação de campos | ✅ | `cypress/e2e/booking-validation.cy.js` |
| Cenários negativos | ✅ | `booking-security`, `booking-negative`, `booking-list`, Postman **Negative Scenarios** |
| Performance | ✅ | `cypress/e2e/booking-performance.cy.js` |
| Automação Cypress | ✅ | `cypress/` |
| CI/CD | ✅ | `.github/workflows/cypress.yml` |
| Reports HTML | ✅ | `cypress/reports/final/report.html` |
| Factory pattern | ✅ | `cypress/support/booking.factory.js` |
| Collection JSON | ✅ | `postman/restful-booker.collection.json` |
| Variáveis de ambiente | ✅ | `postman/restful-booker.environment.json`, `cypress.env.example` |
| Documentação QA | ✅ | `docs/` |
| Evidências visuais | ✅ | `docs/evidence/` |

## Arquitetura do projeto

```
restful-booker-tests/
├── cypress/
│   ├── e2e/              # specs automatizados
│   ├── fixtures/         # payloads estáticos
│   └── support/          # commands + factory
├── postman/              # collection + environment
├── docs/                 # plano, cenários, bugs, riscos, resultados
│   └── evidence/         # screenshots e artefatos visuais
├── scripts/              # utilitários (captura de evidências)
└── .github/workflows/    # pipeline CI
```

## Variáveis de ambiente

### Cypress (`cypress.env.json`)

| Variável | Descrição | Padrão |
| -------- | --------- | ------ |
| `authUsername` | Usuário de autenticação | `admin` |
| `authPassword` | Senha de autenticação | `password123` |
| `perfGetThreshold` | SLA máximo GET (ms) | `5000` |
| `perfPostThreshold` | SLA máximo POST (ms) | `5000` |

> **baseUrl** está em `cypress.config.js` → `https://restful-booker.herokuapp.com`

### Postman (`restful-booker.environment.json`)

| Variável | Descrição |
| -------- | --------- |
| `baseUrl` | URL da API |
| `username` | Usuário de autenticação |
| `password` | Senha de autenticação |
| `token` | Preenchido após login |
| `bookingId` | Preenchido após criar reserva |

## Pré-requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
cp cypress.env.example cypress.env.json
```

## Executar testes

```bash
npm run cy:open    # modo interativo
npm run cy:run     # headless
npm test           # testes + relatório Mochawesome consolidado
```

Relatório HTML: `cypress/reports/final/report.html`

## Postman

Importe os arquivos em `postman/` e siga o [README da collection](postman/README.md).

## Cenários

### Positivos

- Login válido → token
- Criar, listar, consultar, atualizar (PUT/PATCH) e excluir reserva
- Performance GET/POST dentro do SLA configurado

### Negativos

| Cenário | Status esperado |
| ------- | --------------- |
| Senha inválida | 200 + `Bad credentials` |
| Payload sem `firstname` / vazio | ≥ 400 |
| Booking inexistente | 404 |
| PUT/DELETE/PATCH sem token | 403 |
| Token inválido | 403 |
| Método HTTP inválido (TRACE) | 405 / 404 / 500 |

Detalhamento completo: [docs/scenarios.md](docs/scenarios.md)

## Estratégia QA

- Plano de testes: [docs/api-test-plan.md](docs/api-test-plan.md)
- Bugs conhecidos: [docs/bugs.md](docs/bugs.md)
- Riscos: [docs/risks.md](docs/risks.md)
- Melhorias: [docs/improvements.md](docs/improvements.md)
- Últimos resultados: [docs/test-results.md](docs/test-results.md)

## Evidências

| Evidência | Arquivo |
| --------- | ------- |
| Relatório Mochawesome | [docs/evidence/mochawesome-report.png](docs/evidence/mochawesome-report.png) |
| GitHub Actions | Adicionar `docs/evidence/github-actions.png` (screenshot da aba Actions) |
| Execução Cypress | Adicionar `docs/evidence/cypress-run.gif` (`npm run cy:open` + gravador) |
| Artefatos CI | Download `mochawesome-report` no workflow |

Gerar screenshot do relatório:

```bash
npm run test
npm run evidence:report
```

## CI/CD

GitHub Actions executa `npm test` em push/PR para `main` e publica o artefato `mochawesome-report`.

## Riscos principais

- API pública compartilhada (dados e latência variáveis)
- Auth retorna HTTP 200 em credenciais inválidas (ver [docs/bugs.md](docs/bugs.md))
- Performance pode flakar em CI — thresholds configuráveis

## Melhorias sugeridas

Ver [docs/improvements.md](docs/improvements.md) — TypeScript, contract testing, Newman no CI, schema validation.
