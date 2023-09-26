export const addComment = (text: string) => {
  cy.getByTestId("CommentForm.Input").type(text)
  cy.getByTestId("CommentForm.Button").click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}
