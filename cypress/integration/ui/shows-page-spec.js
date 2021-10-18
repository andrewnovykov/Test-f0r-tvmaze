import { showPage } from "../../support/page_object/showsPage";

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/shows");
  });

  it("Each TV show should have title and each title to be a link", () => {
    showPage.getShowTitle().should(($h2) => {
      expect($h2.text()).to.have.lengthOf.above(3);
    });

    showPage.getShowTitle().should("have.length.gt", 1);
    showPage.getShowTitleLink().should("be.visible").and("have.attr", "href");
  });

  it("Should be 25 TV Shows visible on first page", () => {
    showPage.getShowTitleLink().should("be.visible").and("have.length", 25);
  });
});
