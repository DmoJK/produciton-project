import { error } from "console"
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById"
import { Article, ArticleBlockType, ArticleType } from "../types/article"
import { articleDetailsSchema } from "../types/articleDetailsSchema"
import { articleDetailsActions, articleDetailsReducer } from "./articleDetailsSlice"


const data: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [ArticleType.IT],
    blocks: [
      {
        id: "1",
        type: ArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста.",
        ],
      },
      {
        id: "2",
        type: ArticleBlockType.CODE,
        code: '<body>\n    <p id="hello"></p>\n  </body>',
      },
    ],
  }

describe("articleDetailsSlice", () => {
  test("fetch articleById service pending", () => {
    const state: DeepPartial<articleDetailsSchema> = {
      isLoading: false,
      error: 'error'
    }
    expect(
        articleDetailsReducer(state as articleDetailsSchema, fetchArticleById.pending)
    ).toEqual({ isLoading: true, error: undefined })
  })
  test("fetch articleById service fulfilled", () => {
    const state: DeepPartial<articleDetailsSchema> = { isLoading: true }
    expect(
        articleDetailsReducer(
        state as articleDetailsSchema,
        fetchArticleById.fulfilled(data, "", "")
      )
    ).toEqual({ isLoading: false, data })
  })
//   test("fetch articleById service rejected", () => {
//     const state: DeepPartial<articleDetailsSchema> = { isLoading: true }
//     expect(
//         articleDetailsReducer(
//         state as articleDetailsSchema,
//         fetchArticleById.rejected(new Error('error'), "", "")
//       )
//     ).toEqual({ isLoading: false, error: "error" })
//   })
})