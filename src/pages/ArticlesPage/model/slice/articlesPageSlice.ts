import { PayloadAction, createEntityAdapter } from "@reduxjs/toolkit"

import { StateSchema } from "@/app/providers/StoreProvider"
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "@/entities/Article"
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/const/localstorage"
import { buildSlice } from "@/shared/lib/store"
import { SortOrder } from "@/shared/types/sort"

import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { ArticlesPageSchema } from "../types/ArticlesPageSchema"

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlePageSlice = buildSlice({
  name: "articlePageSlice",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.TILE,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: ArticleSortField.CREATED,
    order: "asc",
    search: "",
    type: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView
      state.view = view
      state.limit = view === ArticleView.LIST ? 4 : 9
      state._inited = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
      })
  },
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
  useActions: useArticlesPageActions,
} = articlePageSlice
