describe('Magento Demo Site - Login', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('.panel > .header > .authorization-link > a').click(); // Click on the 'Sign In' link
    });
  
    it('Logs in with valid credentials', () => {
      const username = Cypress.env('username');
      const password = Cypress.env('password');
  
      // Ensure username and password are defined
      if (!username || !password) {
        throw new Error('Username or password is not set in environment variables.');
      }
  
      cy.get('#email').type(username);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
      cy.contains('My Account').should('be.visible');
    });
  
    it('Displays error message for invalid email', () => {
      const password = Cypress.env('password');
  
      if (!password) {
        throw new Error('Password is not set in environment variables.');
      }
  
      cy.get('#email').type('invalidemail@example.com');
      cy.get('#pass').type(password);
      cy.get('#send2').click();
      cy.contains('The account sign-in was incorrect or your account is disabled temporarily.').should('be.visible');
    });
  
    it('Displays error message for invalid password', () => {
      const username = Cypress.env('username');
  
      if (!username) {
        throw new Error('Username is not set in environment variables.');
      }
  
      cy.get('#email').type(username);
      cy.get('#pass').type('invalidpassword');
      cy.get('#send2').click();
      cy.contains('The account sign-in was incorrect or your account is disabled temporarily.').should('be.visible');
    });
  
    it('Displays validation error for empty email', () => {
      const password = Cypress.env('password');
  
      if (!password) {
        throw new Error('Password is not set in environment variables.');
      }
  
      cy.get('#pass').type(password);
      cy.get('#send2').click();
      cy.get('.fieldset').should('contain', 'This is a required field.');
    });
  
    it('Displays validation error for empty password', () => {
      const username = Cypress.env('username');
  
      if (!username) {
        throw new Error('Username is not set in environment variables.');
      }
  
      cy.get('#email').type(username);
      cy.get('#send2').click();
      cy.get('#pass-error').should('contain', 'This is a required field.');
    });
  });
  