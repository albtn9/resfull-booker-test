# Cenários de Teste

## Cenários positivos

| ID | Cenário | Método | Endpoint | Automação |
| -- | ------- | ------ | -------- | --------- |
| AUTH-01 | Login com credenciais válidas | POST | `/auth` | `auth.cy.js` |
| BK-01 | Criar reserva | POST | `/booking` | `booking-crud.cy.js` |
| BK-02 | Listar reservas | GET | `/booking` | `booking-list.cy.js` |
| BK-03 | Consultar reserva por ID | GET | `/booking/:id` | `booking-crud.cy.js` |
| BK-04 | Atualizar reserva (PUT) | PUT | `/booking/:id` | `booking-crud.cy.js` |
| BK-05 | Atualizar parcial (PATCH) | PATCH | `/booking/:id` | `booking-crud.cy.js` |
| BK-06 | Excluir reserva | DELETE | `/booking/:id` | `booking-crud.cy.js` |
| PERF-01 | GET dentro do SLA | GET | `/booking` | `booking-performance.cy.js` |
| PERF-02 | POST dentro do SLA | POST | `/booking` | `booking-performance.cy.js` |

## Cenários negativos

| ID | Cenário | Método | Endpoint | Status esperado | Automação |
| -- | ------- | ------ | -------- | --------------- | --------- |
| AUTH-02 | Senha inválida | POST | `/auth` | 200 + `Bad credentials` | `auth.cy.js` |
| VAL-01 | Payload sem `firstname` | POST | `/booking` | ≥ 400 | `booking-validation.cy.js` |
| VAL-02 | Payload vazio | POST | `/booking` | ≥ 400 | `booking-validation.cy.js` |
| BK-07 | ID inexistente | GET | `/booking/999999999` | 404 | `booking-list.cy.js` |
| SEC-01 | PUT sem token | PUT | `/booking/:id` | 403 | `booking-security.cy.js` |
| SEC-02 | DELETE sem auth | DELETE | `/booking/:id` | 403 | `booking-security.cy.js` |
| SEC-03 | Token inválido | DELETE | `/booking/:id` | 403 | `booking-security.cy.js` |
| SEC-04 | PATCH sem token | PATCH | `/booking/:id` | 403 | `booking-negative.cy.js` |
| HTTP-01 | Método TRACE | TRACE | `/booking` | 405/404/500 | `booking-negative.cy.js` |

## Collection Postman

Todos os cenários acima possuem request equivalente em `postman/restful-booker.collection.json`, organizados nas pastas **Auth**, **Booking** e **Negative Scenarios**.
