describe('Escribir en busqueda varios strings', function () {
    before(function () {
        cy.visit('https://demo.clixiesite.com/plusprime/');
    })
    it('playVideo', function () {
        cy.get('.cx-big-play').click();
        
    })
    it('playVideox2', function () {
        cy.get('.cx-settings').click();
        cy.get('.cx-settings-menu.cx-current > :nth-child(2) > .cx-setting-button').click();
        cy.get(':nth-child(8) > .cx-setting-button').click();
        //cy.get('.cx-lightbox').click
    })
   
})