describe('template spec', () => {
  it('opens and closes the sidebar', () => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false });

    cy.get('aside').should('not.be.visible');
    cy.get('[data-testid="menu-button-sidebar"]').click();
    cy.get('aside').should('be.visible');
    cy.get('[data-testid="close-button-top"]').click();
    cy.get('aside').should('not.be.visible');
  });

  it('filters by genre', () => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false });

    cy.get('nav [data-testid="all-filter"]').should(
      'have.class',
      'bg-[var(--accent)]',
    );
    cy.get('[data-testid="band-widget"]').should('have.length', 12);

    cy.get('nav [data-testid="pop-filter"]').click();
    cy.url().should('include', 'genre=pop');
    cy.get('nav [data-testid="pop-filter"]').should(
      'have.class',
      'bg-[var(--accent)]',
    );
    cy.get('[data-testid="band-widget"]').should('have.length', 4);

    cy.get('nav [data-testid="all-filter"]').should(
      'not.have.class',
      'bg-[var(--accent)]',
    );
  });

  it('gets filters from URL', () => {
    cy.visit('http://localhost:3000/?genre=rock&query=echo', {
      failOnStatusCode: false,
    });

    cy.get('nav [data-testid="rock-filter"]').should(
      'have.class',
      'bg-[var(--accent)]',
    );
    cy.get('[data-testid="band-widget"]').should('have.length', 2);

    cy.get('nav [data-testid="all-filter"]').should(
      'not.have.class',
      'bg-[var(--accent)]',
    );
  });

  it('filters by search term', () => {
    cy.visit('http://localhost:3000', { failOnStatusCode: false });

    cy.get('nav [data-testid="search-input"]').type('echo');
    cy.get('[data-testid="band-widget"]').should('have.length', 3);

    cy.get('nav [data-testid="search-input"]').clear();
    cy.get('[data-testid="band-widget"]').should('have.length', 12);

    cy.get('nav [data-testid="search-input"]').type('electric');
    cy.get('[data-testid="band-widget"]').should('have.length', 1);
    cy.get('[data-testid="band-widget"] h3').should(
      'have.text',
      'Electric Tide',
    );
  });
});
