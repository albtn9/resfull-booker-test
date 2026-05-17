# Plano de Testes de API — Restful Booker

## Objetivo

Garantir que os endpoints críticos da API Restful Booker funcionem conforme o contrato documentado, com foco em autenticação, CRUD de reservas, validação de entrada, segurança e desempenho aceitável.

## Escopo

| In scope | Out of scope |
| -------- | ------------ |
| `/auth` | UI do site |
| `/booking` (CRUD + listagem) | Testes de carga em produção |
| Cenários positivos e negativos | Pen test / OWASP completo |
| Automação Cypress + Collection Postman | Ambientes self-hosted |

## Estratégia

1. **Testes automatizados (Cypress)** — regressão contínua no CI, dados dinâmicos via Factory.
2. **Collection Postman** — exploração manual, demos e validação rápida por QA.
3. **Testes negativos** — falhas de auth, payload inválido, recurso inexistente, método HTTP inválido.
4. **Performance** — SLAs relaxados (5s) por ser API pública em Heroku.
5. **Relatórios** — Mochawesome HTML + artefato no GitHub Actions.

## Tipos de teste

| Tipo | Ferramenta | Specs / Pasta |
| ---- | ----------- | -------------- |
| Funcional | Cypress | `auth`, `booking-crud`, `booking-list` |
| Validação | Cypress | `booking-validation` |
| Segurança | Cypress | `booking-security`, `booking-negative` |
| Performance | Cypress | `booking-performance` |
| Exploratório | Postman | `postman/` |

## Critérios de entrada

- Node.js 20+
- Acesso à internet (API Heroku)
- Variáveis em `cypress.env.json` ou defaults no `cypress.config.js`

## Critérios de saída

- 100% dos testes automatizados passando
- Relatório HTML gerado
- Pipeline CI verde
- Documentação QA atualizada em `docs/`

## Ambiente

- **Base URL:** `https://restful-booker.herokuapp.com`
- **Credenciais padrão:** `admin` / `password123` (documentadas na API oficial)
