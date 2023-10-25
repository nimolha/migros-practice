const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fileServerFolder: ".",
  fixturesFolder: "./cypress/fixtures",
  video: true,
  videosFolder: "./cypress/record/videos",
  screenshotsFolder: "./cypress/record/screenshots",
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  requestTimeout: 10000,
  waitForAnimations: true,
  retries: 0,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  env: {
    password: "Selise88",
    url: "https://migros.selise.tech",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  e2e: {
    baseUrl: "https://migros.selise.tech",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
