describe('Login flow', () => {
  it.only('Should provide an ability to login', () => {
    cy.visit('https://dev.moniheal.com/');

    // Perform login steps
    cy.get('[data-cy="mainpage-button-login"]').click();
    cy.get('[data-cy="login-email-input"]').type('+380501333809');
    cy.get('[data-cy="login-password-input"]').type('228225041');
    cy.get('[data-cy="login-btn"]').click();

    // Assert login success
    cy.url().should('include', 'https://dev.moniheal.com/uk/cabinet/settings');
  });

 
});
