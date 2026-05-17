# Melhorias sugeridas

## Projeto / automação

| Prioridade | Melhoria |
| ---------- | -------- |
| Alta | Migrar para TypeScript + tipagem dos payloads |
| Alta | Adicionar validação de schema JSON (AJV) nas respostas |
| Média | Tags Cypress (`@smoke`, `@regression`) para subsets no CI |
| Média | Newman no CI para rodar a collection Postman |
| Média | Contract test com OpenAPI da API |
| Baixa | `cy.session()` para reutilizar token entre specs |

## API (feedback ao produto)

| Prioridade | Melhoria |
| ---------- | -------- |
| Alta | Retornar 401 em credenciais inválidas no `/auth` |
| Alta | Padronizar erros 400 com corpo estruturado |
| Média | Retornar 405 consistente para métodos não suportados |
| Média | Endpoint de health check |
| Baixa | Rate limiting documentado |

## Documentação / processo

| Prioridade | Melhoria |
| ---------- | -------- |
| Média | Badge de status do CI no README |
| Média | Atualizar `test-results.md` a cada release |
| Baixa | Integrar Allure como alternativa ao Mochawesome |
