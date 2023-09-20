import { StateSchema } from "@/app/providers/StoreProvider"

import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from "./loginSelectors"

describe("getLoginError", () => {
  test("should return error state", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: "error",
      },
    }
    expect(getLoginError(state as StateSchema)).toEqual("error")
  })
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})

describe("getLoginIsLoading", () => {
  test("should return isLoading true", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })
  test("should return isLoading false with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})

describe("getLoginPassword", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: "123123",
      },
    }
    expect(getLoginPassword(state as StateSchema)).toEqual("123123")
  })
  test("should return empty string with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual("")
  })
})

describe("getLoginUsername", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "123123",
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("123123")
  })
  test("should return empty string with empty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("")
  })
})
