import CreateAccountPage from '../support/pageObjects/createAccountPage';

describe('Create Account Test', () => {
  const createAccountPage = new CreateAccountPage();
  
  beforeEach(() => {
    cy.fixture('user').then(function(data) {
      this.data = data;
    });
  });

  it('Create A New Account - Success', function() {
    createAccountPage.navigate();
    createAccountPage.fillFirstName(this.data.validUser.firstName);
    createAccountPage.fillLastName(this.data.validUser.lastName);
    createAccountPage.fillEmail(this.data.validUser.email);
    createAccountPage.fillPassword(this.data.validUser.password);
    createAccountPage.fillPasswordConfirmation(this.data.validUser.password);
    createAccountPage.submit();
    cy.contains('Thank you for registering with Main Website Store.');
  });

  it('Create A New Account - Failed (existing email)', function() {
    createAccountPage.navigate();
    createAccountPage.fillFirstName(this.data.validUser.firstName);
    createAccountPage.fillLastName(this.data.validUser.lastName);
    createAccountPage.fillEmail(this.data.validUser.email);
    createAccountPage.fillPassword(this.data.validUser.password);
    createAccountPage.fillPasswordConfirmation(this.data.validUser.password);
    createAccountPage.submit();
    cy.contains('There is already an account with this email address.');
  });
});
