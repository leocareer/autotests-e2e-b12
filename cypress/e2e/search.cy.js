describe('search', () => {
  it('search', () => {
    cy.viewport(1025,360)
    cy.visit('http://b12veganshop.com')
    cy.get('.woodmart-search-form').should('be.visible')
    cy.get('.search-style-default').type('пельмени')
    cy.get('.search-style-default .searchsubmit').click()
    cy.get('body').contains('пельмени')
  })
})