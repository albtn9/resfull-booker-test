# Postman — Restful Booker

## Importar

1. Abra o Postman → **Import**
2. Selecione `restful-booker.collection.json` e `restful-booker.environment.json`
3. Ative o environment **Restful Booker - Local**

## Fluxo recomendado

1. **Auth → Create Token (success)** — grava `token`
2. **Booking → Create Booking** — grava `bookingId`
3. Get / Update / Patch / Delete
4. **Negative Scenarios** — validações independentes

## Variáveis

| Variável    | Descrição                          |
| ----------- | ---------------------------------- |
| `baseUrl`   | URL base da API                    |
| `username`  | Usuário de autenticação            |
| `password`  | Senha de autenticação              |
| `token`     | Preenchido após login com sucesso  |
| `bookingId` | Preenchido após criar uma reserva  |
