let profileId = ""

describe("profile-edit", () => {
  beforeEach(() => {
    cy.visit("")
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`profile/${data.id}`)
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })
  it("profile successfully load", () => {
    cy.getByTestId("ProfileCard.Firstname").should("have.value", "first")
  })
  it("edit profile", () => {
    const firstname = "testName"
    const lastname = "testName"
    cy.updateProfile(firstname, lastname)
    cy.getByTestId("ProfileCard.Firstname").should("have.value", "testName")
    cy.getByTestId("ProfileCard.Lastname").should("have.value", "testName")
  })
})
