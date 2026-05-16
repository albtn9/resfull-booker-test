describe('Booking Validation', () => {
  it('não deve criar booking sem firstname', () => {
    cy.api({
      method: 'POST',
      url: '/booking',
      failOnStatusCode: false,
      body: { lastname: 'Silva' }
    }).then((response) => {
      expect(response.status).to.be.gte(400)
    })
  })

  it('não deve criar booking vazio', () => {
    cy.api({
      method: 'POST',
      url: '/booking',
      failOnStatusCode: false,
      body: {}
    }).then((response) => {
      expect(response.status).to.be.gte(400)
    })
  })
})
