const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/', // Ganti dengan URL API yang akan diuji
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
