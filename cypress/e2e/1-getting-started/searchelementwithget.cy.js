describe('formas de encontrar un elemento', function(){
    it('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola');//Buscamos por clase
        cy.get('#search_query_top').type(' Como te va');//buscamos por id
        cy.get('[name="search_query"]').type(' Me va muy bien');//buscamos por prioridad
        cy.get('[placeholder="Search"]').clear();//.clear es borrar lo que esta en el elemento
    })
})