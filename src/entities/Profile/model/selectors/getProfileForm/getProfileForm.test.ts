import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileForm } from "./getProfileForm"

describe("getProfileForm", () => {
  test("should return state", () => {
    const form = {
      age: 20,
      city: "Minsk",
      country: Country.Belarus,
      first: "Tima",
      lastname: "Araik",
      currency: Currency.RUB,
      username: "Timaik",
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        form,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
