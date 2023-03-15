import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { ValidateProfileError } from "../../types/ProfileSchema"
import { validateProfileData } from "./validateProfileData"

const data = {
  age: 20,
  city: "Minsk",
  country: Country.Belarus,
  first: "Tima",
  lastname: "Araik",
  currency: Currency.RUB,
  username: "Timaik",
}

describe("validateProfileData", () => {
  test("success", () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test("without first and last name", () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test("incorrect country", () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test("incorrect all", () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
