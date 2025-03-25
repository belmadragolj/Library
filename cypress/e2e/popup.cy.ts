describe('Dialog Popup Tests', () => {
    beforeEach(() => {
      cy.visit('/books');
    });
  
    it('should open the "Edit Book" dialog and display its contents', () => {
      cy.get('button[mat-fab]').should('be.visible').click();
  
      cy.wait(2000);
      cy.get('[data-cy="popup-dialog"]', { timeout: 20000 })
        .should('be.visible')
        .and('contain.text', 'Edit Book');
  
      cy.get('[data-cy="popup-dialog"]').within(() => {
        cy.get('input[formControlName="title"]').should('be.visible');
        cy.get('input[formControlName="author"]').should('be.visible');
        cy.get('input[formControlName="genre"]').should('be.visible');
        cy.get('textarea[formControlName="description"]').should('be.visible');
      });
  
      cy.get('[data-cy="popup-dialog"]').contains('button', 'Cancel').should('be.visible');
      cy.get('[data-cy="popup-dialog"]').contains('button', 'Save').should('be.visible');
    });
  });
  