import { StateSchema } from "app/providers/StoreProvider"
import { ArticleView } from "entities/Article"

export const getArticlePageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false
export const getArticlePageError = (state: StateSchema) =>
  state.articlesPage?.error
export const getArticlePageIsView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.TILE
