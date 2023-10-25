const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries:1, // si falla que reintente de nuevo, eso es para validar que realmente fallo la prueba
  e2e: {
    setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
    },
  },
});
