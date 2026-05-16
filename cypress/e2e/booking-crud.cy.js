import { createBooking } from '../support/booking.factory'

describe('CRUD Booking API', () => {
  let token
  let bookingId
  let bookingData

  beforeEach(() => {
    bookingData = createBooking()
    cy.getToken().then((t) => {
      token = t
    })
    cy.createBooking(bookingData).then((id) => {
      bookingId = id
    })
  })

  afterEach(() => {
    if (bookingId && token) {
      cy.deleteBooking(bookingId, token)
    }
  })

  it('CREATE booking', () => {
    cy.api({
      method: 'GET',
      url: `/booking/${bookingId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.firstname).to.eq(bookingData.firstname)
      expect(response.body.lastname).to.eq(bookingData.lastname)
    })
  })

  it('READ booking', () => {
    cy.api({
      method: 'GET',
      url: `/booking/${bookingId}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.firstname).to.eq(bookingData.firstname)
    })
  })

  it('UPDATE booking', () => {
    const updatedBooking = {
      firstname: 'Carlos',
      lastname: 'QA',
      totalprice: 999,
      depositpaid: true,
      bookingdates: {
        checkin: '2026-07-01',
        checkout: '2026-07-10'
      },
      additionalneeds: 'Lunch'
    }

    cy.api({
      method: 'PUT',
      url: `/booking/${bookingId}`,
      headers: { Cookie: `token=${token}` },
      body: updatedBooking
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.firstname).to.eq(updatedBooking.firstname)
    })
  })

  it('PATCH booking', () => {
    cy.api({
      method: 'PATCH',
      url: `/booking/${bookingId}`,
      headers: { Cookie: `token=${token}` },
      body: { firstname: 'Patched' }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.firstname).to.eq('Patched')
    })
  })

  it('DELETE booking', () => {
    cy.api({
      method: 'DELETE',
      url: `/booking/${bookingId}`,
      headers: { Cookie: `token=${token}` }
    }).then((response) => {
      expect(response.status).to.eq(201)
      bookingId = null
    })
  })
})
