import { Comment } from "@/entities/Comment"
import { rtkApi } from "@/shared/api/rtkApi"

interface addCommentForArticleParams {
  articleId: string
  userId: string
  text: string
}

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleCommentsByArticleId: build.query<Comment[], string | undefined>({
      query: (articleId) => ({
        url: "/comments",
        params: {
          articleId,
          _expand: "user",
        },
      }),
      providesTags: ["Comment"],
    }),
    addCommentForArticle: build.mutation<null, addCommentForArticleParams>({
      query: (params) => ({
        url: "/comments",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
})

export const useGetArticleComments =
  commentsApi.useGetArticleCommentsByArticleIdQuery
export const useAddCommentForArticle =
  commentsApi.useAddCommentForArticleMutation
