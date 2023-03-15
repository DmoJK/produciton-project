import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { getProfileData } from "./getProfileData"

describe("getProfileData", () => {
  test("should return state", () => {
    const data = {
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
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
