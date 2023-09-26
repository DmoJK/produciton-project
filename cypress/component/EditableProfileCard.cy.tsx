import { EditableProfileCard } from "@/features/EditableProfileCard"

import { CypressProvider } from "../../src/shared/lib/tests/CypressProvider/CypressProvider"

const id = "1"

describe("EditableProfileCard.cy.ts", () => {
  it("playground", () => {
    cy.intercept("GET", "**/profile/*", { fixture: "profile.json" })
    cy.mount(
      <CypressProvider
        options={{ initialState: { user: { authData: { id } } } }}
      >
        <EditableProfileCard id={id} />
      </CypressProvider>
    )
  })
})
