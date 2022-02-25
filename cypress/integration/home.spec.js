describe('Home page', () => {
  it('should app be online', () => {
    cy.visit('https://buger-eats.vercel.app');
    cy.get('#page-home main h1')
      .should('have.text', 'Seja um parceiro entregador pela Buger Eats');
  });
});