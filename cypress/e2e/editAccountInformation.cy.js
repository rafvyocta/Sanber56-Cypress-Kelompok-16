import EditAccountInformationPage from '../support/pageObjects/editAccountInformationPage';

describe('Edit Account Information Form (Positive)', () => {
    const editAccountInformationPage = new EditAccountInformationPage();

    beforeEach(() => {
        cy.fixture('user').then(function(data) {
            this.data = data;
          });
    });
  
    it('should allow user to edit account information', function() {
    editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)

    editAccountInformationPage.navigateToEditAccount();
    cy.get('#firstname').clear();    
      cy.get('#firstname').type(this.data.validUser.firstName);
      cy.get('#lastname').clear();
      cy.get('#lastname').type(this.data.validUser.lastName);
      cy.get('.primary button.action.save.primary').click();
      cy.get('.messages .message-success').should('contain', 'You saved the account information.');

    });

    it('should allow user to edit account information with change email', function() {
        editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
    
        editAccountInformationPage.navigateToEditAccount();
          cy.get('#firstname').clear();    
          cy.get('#firstname').type(this.data.validUser.firstName);
          cy.get('#lastname').clear();
          cy.get('#lastname').type(this.data.validUser.lastName);
          cy.get('#change-email').check(); 
          cy.get('#email').clear();    
          cy.get('#email').type(this.data.validUser.email);
          cy.get('#current-password').type(this.data.validUser.password);
          cy.get('.primary button.action.save.primary').click();
          cy.get('.messages .message-success').should('contain', 'You saved the account information.');
    
        });

        it('should allow user to edit account information with change new password', function() {
            editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
        
            editAccountInformationPage.navigateToEditAccount();
              cy.get('#firstname').clear();    
              cy.get('#firstname').type(this.data.validUser.firstName);
              cy.get('#lastname').clear();
              cy.get('#lastname').type(this.data.validUser.lastName);
              cy.get('#change-password').check();   
              cy.get('#current-password').type(this.data.validUser.password);
              cy.get('#password').type(this.data.validUser.password);
              cy.get('#password-confirmation').type(this.data.validUser.password);
              cy.get('.primary button.action.save.primary').click();
              cy.get('.messages .message-success').should('contain', 'You saved the account information.');
        
            });
  });
  
