import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage"
import { Article, ArticleView } from "entities/Article"
import { ArticlesPageSchema } from "../types/ArticlesPageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
  name: "articlePageSlice",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.TILE,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false
          articlesAdapter.setAll(state, action.payload)
        }
      )
  },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlePageSlice
