const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.pageLoadTimeout
      // implement node event listeners here
    },
  },
});
