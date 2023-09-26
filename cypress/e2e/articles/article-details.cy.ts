let currentArticleId = ""

describe("article details", () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.deleteArticle(currentArticleId)
  })
  it("article successfully load", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist")
  })
  it("recommendations list successfully load", () => {
    cy.getByTestId("ArticleRecommendationsList").should("exist")
  })
  it("send comment", () => {
    cy.getByTestId("ArticleDetails.Info")
    cy.getByTestId("CommentForm").scrollIntoView()
    cy.addComment("text")
    cy.getByTestId("CommentCard.Content").should("have.length", 1)
  })
  it("rate article", () => {
    cy.intercept("GET", "**/articles/*", { fixture: "article-details.json" })
    cy.getByTestId("ArticleDetails.Info")
    cy.getByTestId("RatingCard").scrollIntoView()
    cy.setRate(5, "feedback")
    cy.get("[data-selected=true]").should("have.length", 5)
  })
})

// cy.writeFile('../../fixtures/article-details.json', resp.body)
