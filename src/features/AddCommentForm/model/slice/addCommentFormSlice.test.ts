import { AddCommentFormSchema } from "../types/AddCommentForm"
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice"

describe("addCommentFormSlice", () => {
  test("set text", () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: "" }
    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText("Hello")
      )
    ).toEqual({ text: "Hello" })
  })
})
