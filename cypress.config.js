const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  retries: {
    runMode: 2,
    openMode: 1
  },
  env: {
    authUsername: 'admin',
    authPassword: 'password123',
    perfGetThreshold: 5000,
    perfPostThreshold: 5000
  },
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    video: false,
    screenshotOnRunFailure: true
  }
})
