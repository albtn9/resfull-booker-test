import { faker } from '@faker-js/faker'

export const createBooking = () => ({
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
  totalprice: faker.number.int({ min: 100, max: 3000 }),
  depositpaid: faker.helpers.arrayElement([true, false]),
  bookingdates: {
    checkin: '2026-06-01',
    checkout: '2026-06-10'
  },
  additionalneeds: faker.helpers.arrayElement([
    'Breakfast',
    'Lunch',
    'Dinner',
    'Late Checkout'
  ])
})
