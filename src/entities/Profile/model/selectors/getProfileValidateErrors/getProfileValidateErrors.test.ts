import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileError } from "../../types/ProfileSchema"
import { getProfileValidateErrors } from "./getProfileValidateErrors"

describe("getProfileValidateErrors", () => {
  test("should return validateErrors state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_AGE
        ],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_AGE
    ])
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
