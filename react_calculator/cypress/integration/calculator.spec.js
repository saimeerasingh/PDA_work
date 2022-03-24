describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '5')
  })

  it('should do airthmatic operations', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '1')
  })

  it('should do multiple operations chained togther', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '1')
  })

  it('should do airthmatic operations on large decimal ', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get("#operator-equals").click();
    cy.get('.display').should('contain', '666666.6')
  })
})