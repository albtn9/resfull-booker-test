# Restful Booker API Tests
![Testes](https://github.com/albtn9/resfull-booker-test/actions/workflows/cypress.yml/bagde.svg)
Suite de testes de API com [Cypress](https://www.cypress.io/) e [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api) para o [Restful Booker](https://restful-booker.herokuapp.com).

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

Relatório HTML final: `cypress/reports/final/report.html`

## Estrutura

```
cypress/
  e2e/           # specs por domínio (auth, crud, validação, segurança, performance)
  fixtures/      # payloads estáticos
  support/       # commands, factory e bootstrap
```

## CI

GitHub Actions executa `npm run test` em push/PR para `main` e publica o relatório como artefato.
