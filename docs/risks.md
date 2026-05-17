# Riscos de teste e projeto

| ID | Risco | Probabilidade | Impacto | Mitigação |
| -- | ----- | ------------- | ------- | --------- |
| R01 | API Heroku indisponível ou lenta | Média | Alto | Retries no Cypress (2x CI); thresholds de performance em 5s |
| R02 | Dados compartilhados na API pública | Alta | Médio | Factory com dados únicos; cleanup via `deleteBooking` |
| R03 | Flaky tests de performance no CI | Média | Médio | Limites configuráveis via `perfGetThreshold` / `perfPostThreshold` |
| R04 | Token expira durante suite longa | Baixa | Médio | Token obtido no `beforeEach` de cada spec que precisa |
| R05 | Credenciais default expostas | Alta | Baixo | Documentadas; usar secrets no CI para ambientes reais |
| R06 | Auth 200 em falha confunde monitoramento | Média | Médio | Assert no body (`reason`, ausência de `token`) |
| R07 | Relatório Mochawesome não gerado | Baixa | Baixo | Glob `mochawesome*.json` sem incluir `report.json` |
| R08 | Booking ID fixo em testes de segurança | Baixa | Alto | Resolvido: booking criado no `beforeEach` |

## Riscos residuais

- Sem testes de concorrência (duas atualizações simultâneas).
- Sem validação de datas inválidas (checkout antes de checkin).
- Sem contract testing (Pact/OpenAPI diff).
