describe('Booking list API', () => {
  it('GET /booking deve retornar lista de reservas', () => {
    cy.api({
      method: 'GET',
      url: '/booking'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
    })
  })

  it('GET /booking/:id inexistente deve retornar 404', () => {
    cy.api({
      method: 'GET',
      url: '/booking/999999999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
