import { screen } from "@testing-library/react"

import { UserRole } from "@/entities/User"
import { routes } from "@/shared/const/router"
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender"

import AppRouter from "./AppRouter"

describe("AppRouter.test", () => {
  test("Page should render", async () => {
    componentRender(<AppRouter />, {
      route: routes.ABOUT(),
    })

    const page = await screen.findByTestId("AboutPage")
    expect(page).toBeInTheDocument()
  })
  test("Page not found", async () => {
    componentRender(<AppRouter />, {
      route: "/asdfsadfsdfsadfsd",
    })

    const page = await screen.findByTestId("NotFoundPage")
    expect(page).toBeInTheDocument()
  })
  test("User isn't authorized", async () => {
    componentRender(<AppRouter />, {
      route: routes.PROFILE("1"),
    })

    const page = await screen.findByTestId("MainPage")
    expect(page).toBeInTheDocument()
  })
  test("User is authorized", async () => {
    componentRender(<AppRouter />, {
      route: routes.PROFILE("1"),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    })

    const page = await screen.findByTestId("ProfilePage")
    expect(page).toBeInTheDocument()
  })
  test("User don't have access to page by role", async () => {
    componentRender(<AppRouter />, {
      route: routes.ADMIN_PANEL(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    })

    const page = await screen.findByTestId("ForbiddenPage")
    expect(page).toBeInTheDocument()
  })
  test("User have access to page by role", async () => {
    componentRender(<AppRouter />, {
      route: routes.ADMIN_PANEL(),
      initialState: {
        user: { _inited: true, authData: { role: [UserRole.ADMIN] } },
      },
    })

    const page = await screen.findByTestId("AdminPanelPage")
    expect(page).toBeInTheDocument()
  })
})
