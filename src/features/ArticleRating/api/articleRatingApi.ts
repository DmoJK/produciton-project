import { Rating } from "@/entities/Rating"
import { rtkApi } from "@/shared/api/rtkApi"

interface getArticleRatingArg {
  articleId?: string
  userId?: string
}

interface rateArticleArg {
  articleId?: string
  userId?: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], getArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: "/article-ratings",
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, rateArticleArg>({
      query: (arg) => ({
        url: "/article-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
