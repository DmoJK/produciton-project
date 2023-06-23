import { StateSchema } from "app/providers/StoreProvider"

export const getArticlesCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading || false
export const getArticlesCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error
