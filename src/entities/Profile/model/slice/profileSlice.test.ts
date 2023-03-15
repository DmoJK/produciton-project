import { Country } from "entities/Country"
import { Currency } from "entities/Currency"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"
import { ProfileSchema, ValidateProfileError } from "../types/ProfileSchema"
import { profileReducer, profileActions } from "./profileSlice"

const data = {
  age: 20,
  city: "Minsk",
  country: Country.Belarus,
  first: "Tima",
  lastname: "Araik",
  currency: Currency.RUB,
  username: "Timaik",
}

describe("profileSlice", () => {
  test("set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true })
  })
  test("cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateErrors: undefined, data, form: data })
  })
  test("update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "Timaik" } }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "123" })
      )
    ).toEqual({ form: { username: "123" } })
  })

  test("update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined })
  })
  test("update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true }
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({ isLoading: false, validateErrors: undefined, readonly: true, form: data, data })
  })
})
