import { StateSchema } from "app/providers/StoreProvider"

export const getArticlesRecommendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading || false
export const getArticlesRecommendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error
