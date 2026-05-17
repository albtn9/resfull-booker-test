import { createBooking } from '../support/booking.factory'

describe('Negative scenarios', () => {
  let token
  let bookingId

  beforeEach(() => {
    cy.getToken().then((t) => {
      token = t
    })
    cy.createBooking(createBooking()).then((id) => {
      bookingId = id
    })
  })

  afterEach(() => {
    if (bookingId && token) {
      cy.deleteBooking(bookingId, token)
    }
  })

  it('PATCH sem token deve retornar 403', () => {
    cy.api({
      method: 'PATCH',
      url: `/booking/${bookingId}`,
      failOnStatusCode: false,
      body: { firstname: 'Hack' }
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })

  it('método HTTP inválido deve ser rejeitado', () => {
    cy.api({
      method: 'TRACE',
      url: '/booking',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.oneOf([405, 404, 500])
    })
  })
})
