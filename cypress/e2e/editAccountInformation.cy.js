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
  
  describe('Edit Account Information Form (Negative)', () => {
    const editAccountInformationPage = new EditAccountInformationPage();

    beforeEach(() => {
        cy.fixture('user').then(function(data) {
            this.data = data;
          });
        cy.fixture('invalidUser').then(function(invalidData) {
            this.invalidData = invalidData;
          });
    });
  
    it('Edit account information with missing firstname', function() {
    editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)

    editAccountInformationPage.navigateToEditAccount();
    cy.get('#firstname').clear();      
      cy.get('#lastname').clear();
      cy.get('#lastname').type(this.data.validUser.lastName);
      cy.get('.primary button.action.save.primary').click();
      cy.get('#firstname-error').should('contain', 'This is a required field');
    });

    it('Edit account information with missing lastname', function() {
        editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
    
        editAccountInformationPage.navigateToEditAccount();
        cy.get('#firstname').clear();    
          cy.get('#lastname').clear();
          cy.get('#firstname').type(this.data.validUser.firstName);
          cy.get('.primary button.action.save.primary').click();
          cy.get('#lastname-error').should('contain', 'This is a required field');
        });

    it('Edit account information with missing email', function() {
        editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
    
        editAccountInformationPage.navigateToEditAccount();
          cy.get('#firstname').clear();    
          cy.get('#firstname').type(this.data.validUser.firstName);
          cy.get('#lastname').clear();
          cy.get('#lastname').type(this.data.validUser.lastName);
          cy.get('#change-email').check(); 
          cy.get('#email').clear();    
          cy.get('#current-password').type(this.data.validUser.password);
          cy.get('.primary button.action.save.primary').click();
          cy.get('#email-error').should('contain', 'This is a required field');
    
        });

        it('Edit account information with invalid email', function() {
            editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
        
            editAccountInformationPage.navigateToEditAccount();
              cy.get('#firstname').clear();    
              cy.get('#firstname').type(this.data.validUser.firstName);
              cy.get('#lastname').clear();
              cy.get('#lastname').type(this.data.validUser.lastName);
              cy.get('#change-email').check(); 
              cy.get('#email').clear();    
              cy.get('#email').type(this.invalidData.invalidUser.email);
              cy.get('#current-password').type(this.data.validUser.password);
              cy.get('.primary button.action.save.primary').click();
              cy.get('#email-error').should('contain', 'Please enter a valid email address.');
        
            });

        it('Edit account information with missing new password', function() {
            editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
        
            editAccountInformationPage.navigateToEditAccount();
              cy.get('#firstname').clear();    
              cy.get('#firstname').type(this.data.validUser.firstName);
              cy.get('#lastname').clear();
              cy.get('#lastname').type(this.data.validUser.lastName);
              cy.get('#change-email').check(); 
              cy.get('#change-password').check(); 
              cy.get('#email').clear();
              cy.get('#email').type(this.data.validUser.email);  
              cy.get('#current-password').type(this.data.validUser.password);
              cy.get('#password-confirmation').type(this.data.validUser.password);
              cy.get('.primary button.action.save.primary').click();
              cy.get('#password-error').should('contain', 'This is a required field');
        
            });

        it('Edit account information with missing confirmation password', function() {
            editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
        
            editAccountInformationPage.navigateToEditAccount();
              cy.get('#firstname').clear();    
              cy.get('#firstname').type(this.data.validUser.firstName);
              cy.get('#lastname').clear();
              cy.get('#lastname').type(this.data.validUser.lastName);
              cy.get('#change-email').check(); 
              cy.get('#change-password').check(); 
              cy.get('#email').clear();
              cy.get('#email').type(this.data.validUser.email);  
              cy.get('#current-password').type(this.data.validUser.password);
              cy.get('#password').type(this.data.validUser.password);
              cy.get('.primary button.action.save.primary').click();
              cy.get('#password-confirmation-error').should('contain', 'This is a required field');
        
            });

            it('Edit account information with password less than 8 characters', function() {
                editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
            
                editAccountInformationPage.navigateToEditAccount();
                  cy.get('#firstname').clear();    
                  cy.get('#firstname').type(this.data.validUser.firstName);
                  cy.get('#lastname').clear();
                  cy.get('#lastname').type(this.data.validUser.lastName);
                  cy.get('#change-email').check(); 
                  cy.get('#change-password').check(); 
                  cy.get('#email').clear();
                  cy.get('#email').type(this.data.validUser.email);  
                  cy.get('#current-password').type(this.data.validUser.password);
                  cy.get('#password').type('short');
                  cy.get('#password-confirmation').type('short');
                  cy.get('.primary button.action.save.primary').click();
                  cy.get('#password-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
            
                });

                it('Edit account information with password without uppercase or special characters', function() {
                    editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
                
                    editAccountInformationPage.navigateToEditAccount();
                      cy.get('#firstname').clear();    
                      cy.get('#firstname').type(this.data.validUser.firstName);
                      cy.get('#lastname').clear();
                      cy.get('#lastname').type(this.data.validUser.lastName);
                      cy.get('#change-email').check(); 
                      cy.get('#change-password').check(); 
                      cy.get('#email').clear();
                      cy.get('#email').type(this.data.validUser.email);  
                      cy.get('#current-password').type(this.data.validUser.password);
                      cy.get('#password').type('password123');
                      cy.get('#password-confirmation').type('password123');
                      cy.get('.primary button.action.save.primary').click();
                      cy.get('#password-error').should('contain', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
                
                    });

        it('Edit account information with different password and confirmation password', function() {
            editAccountInformationPage.login(this.data.validUser.email,this.data.validUser.password)
        
            editAccountInformationPage.navigateToEditAccount();
              cy.get('#firstname').clear();    
              cy.get('#firstname').type(this.data.validUser.firstName);
              cy.get('#lastname').clear();
              cy.get('#lastname').type(this.data.validUser.lastName);
              cy.get('#change-email').check(); 
              cy.get('#change-password').check(); 
              cy.get('#email').clear();
              cy.get('#email').type(this.data.validUser.email);  
              cy.get('#current-password').type(this.data.validUser.password);
              cy.get('#password').type(this.data.validUser.password);
              cy.get('#password-confirmation').type(this.invalidData.invalidUser.password);
              cy.get('.primary button.action.save.primary').click();
              cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.');
        
            });
            
  });
  