import { commentFormActions, commentFormReducer } from "./commentFormSlice"
import { CommentFormSchema } from "../types/CommentFormSchema"

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
