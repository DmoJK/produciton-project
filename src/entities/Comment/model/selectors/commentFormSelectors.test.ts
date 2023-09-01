import { StateSchema } from "@/app/providers/StoreProvider"
import {
  getCommentFormError,
  getCommentFormText,
} from "./commentFormSelectors"

describe("addCommentFormSelectors", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      commentForm: {
        text: "hello",
      },
    }
    expect(getCommentFormText(state as StateSchema)).toEqual("hello")
  })
  test("should work with empty state text", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getCommentFormText(state as StateSchema)).toEqual("")
  })
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
        commentForm: {
        error: "error",
      },
    }
    expect(getCommentFormError(state as StateSchema)).toEqual("error")
  })
  test("should work with empty state error", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getCommentFormError(state as StateSchema)).toEqual(undefined)
  })
})
