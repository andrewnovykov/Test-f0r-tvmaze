describe('Batman TV shows', () => {
  it('Should be 10 TV shows with name Batman', () => {
    cy.request('https://api.tvmaze.com/search/shows?q=batman')
      .its('body')
      .should('have.length', 10)
  })

  it("Search result should returns JSON", () => {
    cy.request("https://api.tvmaze.com/search/shows?q=batman")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

   it("TV show shoud includes word Batman in title", () => {
     cy.request("https://api.tvmaze.com/search/shows?q=batman")
       .its("body")
       .each((value) => expect(value.show.name.toLowerCase()).to.contains("batman"));       
   });

})

