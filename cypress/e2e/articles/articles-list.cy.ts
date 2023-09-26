// let currentArticleId = ""

describe("articles page", () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit("/articles")
    })
    // cy.createArticle().then((article) => {
    //   currentArticleId = article.id
    //   cy.visit(`articles`)
    // })
  })
  // afterEach(() => {
  //   cy.deleteArticle(currentArticleId)
  // })
  it("articles successfully load", () => {
    cy.getByTestId("ArticleList").should("exist")
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3)
  })
  it("articles successfully load with fixture", () => {
    cy.intercept("GET", "**/articles?*", {fixture: "articles.json"})
    cy.getByTestId("ArticleList").should("exist")
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3)
  })
  // it("search article by name", () => {
  //   cy.getByTestId("ArticlesPageFilters.Search").type("Test Article")
  //   cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 1)
  //   cy.getByTestId("ArticleListItem.Title.Header").should("have.value", "Test Article")
  // })
  // it("search article by type", () => {
  //   cy.getByTestId("ArticlesPageFilters.Search").type("Test Article")
  //   cy.getByTestId("Tabs.IT").click()
  //   cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 1)
  // })
})
