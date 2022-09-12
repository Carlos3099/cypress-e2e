describe('Verify Alert Lock', function () {
    before(function () {
        cy.visit('https://demo.clixiesite.com/plusprime/');
    })
    it('Verify alert video', function(){
        cy.get('.cx-big-play').click();
        cy.get('.cx-lock').click();
        })
       }) 
