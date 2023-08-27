import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { componentRender } from "shared/lib/tests/componentRender/componentRender"
import { Profile } from "entities/Profile"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"
import { $api } from "shared/api/api"
import { EditableProfileCard } from "./EditableProfileCard"
import { profileReducer } from "../../model/slice/profileSlice"

const profile: Profile = {
  id: "1",
  first: "artem",
  lastname: "parkhomenko",
  age: 20,
  currency: Currency.RUB,
  country: Country.Russia,
  city: "Moscow",
  username: "admin",
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: "1",
      },
    },
  },
  asyncReducers: { profile: profileReducer },
}

describe("EditableProfileCard", () => {
  test("make readonly false", async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument()
  })
  test("should return previous values", async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    await userEvent.clear(screen.getByTestId("ProfileCard.Firstname"))
    await userEvent.clear(screen.getByTestId("ProfileCard.Lastname"))

    await userEvent.type(screen.getByTestId("ProfileCard.Firstname"), "admin")
    await userEvent.type(screen.getByTestId("ProfileCard.Lastname"), "admin")
    expect(screen.getByTestId("ProfileCard.Firstname")).toHaveValue("admin")
    expect(screen.getByTestId("ProfileCard.Lastname")).toHaveValue("admin")

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    )

    expect(screen.getByTestId("ProfileCard.Firstname")).toHaveValue("artem")
    expect(screen.getByTestId("ProfileCard.Lastname")).toHaveValue(
      "parkhomenko"
    )
  })
  test("age should be a number", async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    await userEvent.clear(screen.getByTestId("ProfileCard.Age"))

    await userEvent.type(screen.getByTestId("ProfileCard.Age"), "admin")
    expect(screen.getByTestId("ProfileCard.Age")).toHaveValue("0")
  })
  test("validate error with required inputs", async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    await userEvent.clear(screen.getByTestId("ProfileCard.Firstname"))
    await userEvent.clear(screen.getByTestId("ProfileCard.Lastname"))

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    )

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument()
  })
  test("success form change", async () => {
    const mockPutReq = jest.spyOn($api, "put")
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    )

    await userEvent.clear(screen.getByTestId("ProfileCard.Firstname"))
    await userEvent.clear(screen.getByTestId("ProfileCard.Lastname"))

    await userEvent.type(screen.getByTestId("ProfileCard.Firstname"), "admin")
    await userEvent.type(screen.getByTestId("ProfileCard.Lastname"), "main")
    expect(screen.getByTestId("ProfileCard.Firstname")).toHaveValue("admin")
    expect(screen.getByTestId("ProfileCard.Lastname")).toHaveValue("main")

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    )

    expect(mockPutReq).toHaveBeenCalled()
  })
})
