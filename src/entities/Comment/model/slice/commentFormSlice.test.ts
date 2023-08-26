import { CommentFormSchema } from "../types/CommentFormSchema"
import { commentFormActions, commentFormReducer } from "./commentFormSlice"

describe("addCommentFormSlice", () => {
  test("set text", () => {
    const state: DeepPartial<CommentFormSchema> = { text: "" }
    expect(
      commentFormReducer(
        state as CommentFormSchema,
        commentFormActions.setText("Hello")
      )
    ).toEqual({ text: "Hello" })
  })
})
