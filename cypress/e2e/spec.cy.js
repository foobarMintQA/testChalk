describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    
  });
  it('logs to terminal using chalk', () => {
    cy.task('log', {message: 'hello chalk', attributes: ['underline', 'bgBlue', 'bold', 'green']})
  })
})