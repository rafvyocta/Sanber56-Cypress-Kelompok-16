class EditAccountInformationPage {
    login(email,password){
        cy.visit('/customer/account/login/');
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('#send2').click();
    }

    navigateToEditAccount() {
      cy.visit('/customer/account/edit/');
    }

    // edit() {
    //     cy.get('a.action.edit').click(); // Mengidentifikasi dan klik tombol "Edit"
    //   }
  
    // fillEmail(email) {
    //   cy.get('#email_address').type(email);
    // }
  
    // fillPassword(password) {
    //   cy.get('#password').type(password);
    // }
  
    // fillPasswordConfirmation(password) {
    //   cy.get('#password-confirmation').type(password);
    // }
  
    // edit() {
    //     cy.get('a.action.edit').click(); // Mengidentifikasi dan klik tombol "Edit"
    //   }
  }
  
  export default EditAccountInformationPage;
  