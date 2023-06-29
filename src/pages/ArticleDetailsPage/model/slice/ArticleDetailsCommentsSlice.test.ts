import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema"
import { ArticleDetailsCommentsReducer } from "./ArticleDetailsCommentsSlice"

const entities = {
  "1": {
    id: "1",
    text: "Hello",
    user: { id: "1", username: "User1" },
  }
}

describe("ArticleDetailsCommentsSlice", () => {
  test("fetch CommentsByArticleId service pending", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: "error",
      ids: [],
      entities: {},
    }
    expect(
      ArticleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending
      )
    ).toEqual({ isLoading: true, error: undefined, ids: [], entities: {} })
  })
  test("fetch CommentsByArticleId service fulfilled", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = { isLoading: true }
    expect(
      ArticleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(
          [
            {
              id: "1",
              text: "Hello",
              user: { id: "1", username: "User1" },
            },
          ],
          "",
          ""
        )
      )
    ).toEqual({ isLoading: false, ids: ["1"], entities })
  })
})
