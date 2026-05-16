import { createBooking } from '../support/booking.factory'

describe('Security Tests', () => {
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

  it('não deve atualizar sem token', () => {
    cy.api({
      method: 'PUT',
      url: `/booking/${bookingId}`,
      failOnStatusCode: false,
      body: { firstname: 'Hack' }
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })

  it('não deve deletar sem autenticação', () => {
    cy.api({
      method: 'DELETE',
      url: `/booking/${bookingId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })

  it('deve bloquear token inválido', () => {
    cy.api({
      method: 'DELETE',
      url: `/booking/${bookingId}`,
      failOnStatusCode: false,
      headers: { Cookie: 'token=token_fake' }
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })
})
