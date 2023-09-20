import { StateSchema } from "@/app/providers/StoreProvider"
import { buildSelector } from "@/shared/lib/store"

export const [useArticleDetailsIsLoading, getArticleDetailsIsLoading] =
  buildSelector(
    (state: StateSchema) => state.articleDetails?.isLoading || false
  )
export const [useArticleDetailsError, getArticleDetailsError] = buildSelector(
  (state: StateSchema) => state.articleDetails?.error
)

export const [useArticleDetailsData, getArticleDetailsData] = buildSelector(
  (state: StateSchema) => state.articleDetails?.data
)
