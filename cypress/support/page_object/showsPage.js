export class ShowsPage {
  getShowTitle() {
    return cy.get(".title > h2");
  }

  getShowTitleLink() {
    return cy.get(".title > h2 > a");
  }
}

export const showPage = new ShowsPage();
