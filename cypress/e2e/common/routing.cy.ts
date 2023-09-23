import { selectByTestId } from "cypress/helpers/selectByTestId"

describe("Routing", () => {
  describe("user not authorized", () => {
    it("Route to main page", () => {
      cy.visit("/")
      cy.get(selectByTestId("MainPage")).should("exist")
    })
    it("Route to profile page", () => {
      cy.visit("/profile/1")
      cy.get(selectByTestId("MainPage")).should("exist")
    })
    it("Route to not exist page", () => {
      cy.visit("/asdfsfasdfasdf")
      cy.get(selectByTestId("NotFoundPage")).should("exist")
    })
  })
  describe("user authorized", () => {
    beforeEach(() => {
      cy.login()
    })
    it("Route to profile page", () => {
      cy.visit("/profile/1")
      cy.get(selectByTestId("ProfilePage")).should("exist")
    })
    it("Route to articles page", () => {
      cy.visit("/articles")
      cy.get(selectByTestId("ArticlesPage")).should("exist")
    })
  })
})
