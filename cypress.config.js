const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://magento.softwaretestingboard.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }, env: {
    username: 'kelompok16@sanber.com', 
    password: 'Sanbercode56'  
  },
  defaultCommandTimeout: 10000
});
