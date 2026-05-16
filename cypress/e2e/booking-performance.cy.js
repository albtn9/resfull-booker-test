import { createBooking } from '../support/booking.factory'

describe('Performance Tests', () => {
  it('GET booking deve responder dentro do limite configurado', () => {
    cy.api({
      method: 'GET',
      url: '/booking'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(Cypress.env('perfGetThreshold'))
    })
  })

  it('POST booking deve responder dentro do limite configurado', () => {
    cy.api({
      method: 'POST',
      url: '/booking',
      body: createBooking()
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.duration).to.be.lessThan(Cypress.env('perfPostThreshold'))

      cy.getToken().then((token) => {
        cy.deleteBooking(response.body.bookingid, token)
      })
    })
  })
})
