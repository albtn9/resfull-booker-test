Cypress.Commands.add('getToken', () => {
  return cy
    .api({
      method: 'POST',
      url: '/auth',
      body: {
        username: Cypress.env('authUsername'),
        password: Cypress.env('authPassword')
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.token).to.exist
      return response.body.token
    })
})

Cypress.Commands.add('createBooking', (body) => {
  return cy
    .api({
      method: 'POST',
      url: '/booking',
      body
    })
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.bookingid).to.exist
      return response.body.bookingid
    })
})

Cypress.Commands.add('deleteBooking', (bookingId, token) => {
  return cy.api({
    method: 'DELETE',
    url: `/booking/${bookingId}`,
    headers: {
      Cookie: `token=${token}`
    },
    failOnStatusCode: false
  })
})
