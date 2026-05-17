# Bugs e comportamentos inesperados

Registro de achados na API Restful Booker (ambiente Heroku). Severidade: **Crítica** | **Alta** | **Média** | **Baixa**.

---

## BUG-001 — Auth retorna HTTP 200 em credenciais inválidas

| Campo | Valor |
| ----- | ----- |
| Severidade | Média |
| Endpoint | `POST /auth` |
| Esperado | 401 Unauthorized |
| Obtido | 200 OK com `{ "reason": "Bad credentials" }` |
| Impacto | Clientes podem tratar login como sucesso se validarem apenas status HTTP |
| Automação | `auth.cy.js` documenta o comportamento real |
| Postman | `Create Token (invalid password)` |

---

## BUG-002 — Validação de payload inconsistente

| Campo | Valor |
| ----- | ----- |
| Severidade | Média |
| Endpoint | `POST /booking` |
| Esperado | 400 Bad Request com mensagem clara |
| Obtido | Status ≥ 400 (varia; às vezes 500) sem contrato de erro padronizado |
| Impacto | Dificulta integração e tratamento de erro no cliente |
| Automação | `booking-validation.cy.js` |

---

## BUG-003 — Métodos HTTP não suportados sem contrato fixo

| Campo | Valor |
| ----- | ----- |
| Severidade | Baixa |
| Endpoint | `/booking` |
| Esperado | 405 Method Not Allowed |
| Obtido | 405, 404 ou 500 dependendo do método/rota |
| Impacto | Baixo; coberto com asserção flexível |
| Automação | `booking-negative.cy.js` |

---

## Observações

- API pública compartilhada: dados criados por outros usuários podem afetar listagens.
- Não foram encontrados bypasses de autenticação nos fluxos testados (PUT/DELETE/PATCH sem token → 403).
