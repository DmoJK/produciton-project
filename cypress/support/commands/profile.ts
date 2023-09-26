export const updateProfile = (
  firstname: string = "newFirst",
  lastname: string = "newLast"
) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click()
  cy.getByTestId("ProfileCard.Firstname").clear().type(firstname)
  cy.getByTestId("ProfileCard.Lastname").clear().type(lastname)
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "auth" },
    body: {
      id: "4",
      first: "first",
      lastname: "lastname",
      age: 27,
      currency: "RUB",
      country: "Belarus",
      city: "Minsk",
      username: "testuser",
      avatar: "",
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname?: string, lastname?: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
