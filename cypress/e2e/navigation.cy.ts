describe('Navigation and UI Tests', () => {
    beforeEach(() => {
      cy.visit('/books');
    });
  
    it('should display the header with navigation links', () => {
      cy.get('app-header nav ul li a')
        .should('have.length', 3)
        .then((links) => {
          expect(links[0]).to.contain.text('Home');
          expect(links[1]).to.contain.text('Books');
          expect(links[2]).to.contain.text('About');
        });
    });
  
    it('should navigate to Books page when Books link is clicked', () => {
      cy.get('app-header nav ul li a')
        .contains('Books')
        .click();
      cy.url().should('include', '/books');
    });
  
    it('should navigate to Books page and open the "Add Book" popup', () => {
      cy.get('app-header nav ul li a')
      .contains('Books')
      .click();
    cy.url().should('include', '/books');
       cy.wait(2000);
      cy.get('button[mat-fab]').should('be.visible').click();
      cy.wait(2000); 
      cy.get('.cdk-overlay-container').within(() => {
        cy.get('[data-cy="popup-dialog"]', { timeout: 20000 })
        .should('be.visible')
        .and('contain.text', 'Edit Book');
      });
      
  });
});
  