describe("The Home Page", function() {
  it("Basic Page renders properly", function() {
    cy.visit("http://localhost:3000");
    cy.get("body").contains("Eurostar To-do List");
    cy.get("body").contains("200 results");
    cy.get("body").contains("Title: ipsam aperiam voluptates qui");
  });
});
