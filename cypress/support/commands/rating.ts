export const setRate = (starsCount: number, feedback?: string) => {
  cy.getByTestId(`StarRating.${starsCount}`).click()
  if (feedback) {
    cy.getByTestId("RatingCard.Input").type(feedback)
    cy.getByTestId("RatingCard.Send").click()
  } else {
    cy.getByTestId("RatingCard.Close").click()
  }
}

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, feedback?: string): Chainable<void>
    }
  }
}
