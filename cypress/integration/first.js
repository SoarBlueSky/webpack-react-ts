describe("My First Test",function () {
    it('Finds an element',function () {
         cy.visit('http://localhost:8888');
         cy.contains('Decrement').click();
    })
})