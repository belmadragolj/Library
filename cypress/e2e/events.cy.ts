describe('App Buttons & Mock Events Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the "Add Book" dialog when clicking the Add Book button', () => {
    cy.get('app-header nav ul li a').contains('Books').click();
    cy.url().should('include', '/books');

    cy.get('button[mat-fab]').should('be.visible').click();

    cy.get('[data-cy="popup-dialog"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Edit Book');
  });

  it('should close the dialog when Cancel is clicked', () => {
    cy.get('app-header nav ul li a').contains('Books').click();
    cy.url().should('include', '/books');
    cy.get('button[mat-fab]').click();

    cy.get('[data-cy="popup-dialog"]', { timeout: 10000 }).should('be.visible');
    cy.get('[data-cy="popup-dialog"]').contains('button', 'Cancel').click();

    cy.get('[data-cy="popup-dialog"]', { timeout: 10000 }).should('not.exist');
  });

  it('should add a new book when Save is clicked in the dialog', () => {
    cy.get('app-header nav ul li a').contains('Books').click();
    cy.url().should('include', '/books');
    cy.get('button[mat-fab]').click();
    cy.get('[data-cy="popup-dialog"]', { timeout: 10000 }).should('be.visible');

    cy.get('[data-cy="popup-dialog"]').within(() => {
      cy.get('input[formControlName="title"]').clear().type('Test Book');
      cy.get('input[formControlName="author"]').clear().type('Test');
      cy.get('input[formControlName="genre"]').clear().type('Test');
      cy.get('textarea[formControlName="description"]').clear().type('Test');

      cy.contains('button', 'Save').click();
    });

    cy.get('.books-grid', { timeout: 10000 })
      .contains('h3', 'Test Book')
      .should('be.visible');
  });

  it('should delete a book when Delete is clicked from its options menu', () => {
    cy.get('app-header nav ul li a').contains('Books').click();
    cy.url().should('include', '/books');

    cy.get('.book-card').then(($cards) => {
      const initialCount = $cards.length;
      cy.get('.book-card')
        .first()
        .within(() => {
            cy.wait(10000);
          cy.get('.icon-container').click({ force: true });
        });
      
      cy.get('[data-cy="delete-button"]').first().click();
      cy.wait(1000);
      cy.get('.book-card').should('have.length', initialCount - 1);
    });
  });

  it('should reflect a mock event that adds a new book to the grid', () => {
    cy.get('app-header nav ul li a').contains('Books').click();
    cy.url().should('include', '/books');

    cy.get('.book-card')
      .its('length')
      .then((initialCount) => {
        cy.get('app-header nav ul li a').contains('Books').click();
        cy.url().should('include', '/books');
        cy.get('button[mat-fab]').click();
        cy.get('[data-cy="popup-dialog"]', { timeout: 10000 }).should(
          'be.visible'
        );

        cy.get('[data-cy="popup-dialog"]').within(() => {
          cy.get('input[formControlName="title"]').clear().type('Test Book');
          cy.get('input[formControlName="author"]').clear().type('Test');
          cy.get('input[formControlName="genre"]').clear().type('Test');
          cy.get('textarea[formControlName="description"]')
            .clear()
            .type('Test');

          cy.contains('button', 'Save').click();
        });
        cy.wait(15000);
        cy.get('.book-card').should('have.length.greaterThan', initialCount);
      });
  });
});

describe('Search and Toggle Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('/about');
    cy.wait(1000);
  });

  it('should filter books based on the search query', () => {
    cy.get('.search-input')
      .should('have.attr', 'placeholder', 'Search books...')
      .click({ force: true })
      .type('gatsby', { delay: 1000 });

    cy.get('.book-card')
      .should('have.length', 1)
      .contains('h3', /gatsby/i);
  });

  it('should show all books when search query is cleared', () => {
    cy.get('.search-input')
      .should('have.attr', 'placeholder', 'Search books...')
      .click({ force: true })
      .type('something', { delay: 1000 });

    cy.get('.book-card').should('have.length', 0);

    cy.get('.search-input')
      .should('have.attr', 'placeholder', 'Search books...')
      .clear();
    cy.wait(1000);
    cy.get('.book-card').should('have.length', 10);
  });

  it('should toggle dark mode when the toggle button is clicked', () => {
    cy.get('.toggle-btn')
      .should('be.visible')
      .within(() => {
        cy.get('.toggle-icon').should('contain.text', '🌙');
      });

    cy.get('.toggle-btn').click();
    cy.get('.toggle-btn').within(() => {
      cy.get('.toggle-icon').should('contain.text', '☀️');
    });
    cy.get('body').should('have.class', 'dark-mode');
    cy.get('.toggle-btn').click();
    cy.get('.toggle-btn').within(() => {
      cy.get('.toggle-icon').should('contain.text', '🌙');
    });
    cy.get('body').should('not.have.class', 'dark-mode');
  });
});
