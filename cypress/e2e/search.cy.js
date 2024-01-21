//const cypress = require("cypress");
//const { describe } = require("mocha");

describe('search', () => {
  it('search', () => {
    cy.viewport(1025,360)
    cy.visit("http://b12veganshop.com")
    cy.get('.woodmart-search-form').should('be.visible')
    //cy.get(".searchform").type()
   // cy.get(".searchsubmit")
   // cy.get("searchsubmit").click()
   // cy.get(".lighter").contains("поиска")
  })
})