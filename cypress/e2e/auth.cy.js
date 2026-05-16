describe('Auth API', () => {
  it('deve retornar token com credenciais válidas', () => {
    cy.getToken()
  })

  it('deve rejeitar credenciais inválidas (API retorna 200 com reason)', () => {
    cy.api({
      method: 'POST',
      url: '/auth',
      failOnStatusCode: false,
      body: {
        username: Cypress.env('authUsername'),
        password: 'senha_errada'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.token).to.not.exist
      expect(response.body.reason).to.eq('Bad credentials')
    })
  })
})
