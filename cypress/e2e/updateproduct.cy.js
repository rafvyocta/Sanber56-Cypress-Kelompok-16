describe('Login Into Website', () => {
  before(() => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
  cy.get('#email').type('kelompok16@sanber.com')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Sanbercode56')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
  cy.url().should('contain','account')
  cy.get('.nav-1 > .level-top > span').click()

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('$(...).AddFotoramaVideoEvents is not a function')) {
      return false;
    }
    return true;
  });
  })

  it('Positive -  Choose 1 Product', () => {
    cy.get('#search').type('Hoodie{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-166').click()
    cy.get('#option-label-color-93-item-56').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('2')
    cy.get('#product-addtocart-button').click()
    cy.get('.message-success > div').should('contain','You added Selene Yoga Hoodie')
  })

  it('Positive -  Choose 2 Product', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search').type('Pants{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-178').click()
    cy.get('#option-label-color-93-item-52').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('3')
    cy.get('#product-addtocart-button').click()
    cy.get('.message-success > div').should('contain','You added Caesar Warm-Up Pant')
  })

  it('Negative -  Add to cart but doesnt choose size', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search').type('Tees{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('5')
    cy.get('#product-addtocart-button').click()
    cy.get('div[id="super_attribute[143]-error"]').should('contain.text', 'This is a required field.')
    })

  it('Negative -  Add to cart but doesnt choose color', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search').type('Tees{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('3')
    cy.get('#product-addtocart-button').click()
    cy.get('div[id="super_attribute[93]-error"]').should('contain.text', 'This is a required field.')
    })

  it('Negative -  Add to cart but the amount put in was less than what was needed', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search').type('Tees{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('-3')
    cy.get('#product-addtocart-button').click()
    cy.get('#qty-error').should('contain.text', 'Please enter a quantity greater than 0.')
    })

  it('Negative -  Open Shopping cart and update shopping cart ', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('#search').type('Tees{enter}')
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('2')
    cy.get('#product-addtocart-button',{timeout:10000}).click()
    cy.get('.message-success > div > a').click()
    cy.get('#cart-69130-qty').find('input').clear()
    cy.get('#cart-69130-qty').type('-2')
    cy.get('.update',{timeout:10000}).click()
    cy.get('#cart-69130-qty').should('contain.text','Please enter a number greater than 0 in this field.')

    })
  })

