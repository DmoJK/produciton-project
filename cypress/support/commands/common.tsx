import { User } from "../../../src/entities/User"
import { USER_LOCALSTORAGE_KEY } from "../../../src/shared/const/localstorage"
import { selectByTestId } from "../../helpers/selectByTestId"

export const login = (
  username: string = "testuser",
  password: string = "testuser"
) => {
  return cy
    .request({
      method: "POST",
      url: "http://localhost:8000/login",
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
      return body
    })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

// export const mount = (component: ReactNode, options?: ProviderOptions) => {
//   return mountComponent(
//     <CypressProvider options={options}>{component}</CypressProvider>
//   )
// }
// mount(
//   component: ReactNode,
//   options?: ProviderOptions
// ): Cypress.Chainable<MountReturn>

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
