import { PayloadAction } from "@reduxjs/toolkit"

import { buildSlice } from "@/shared/lib/store"

import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById"
import { Article } from "../types/article"
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema"

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const articleDetailsSlice = buildSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
  useActions: useArticleDetailsActions,
} = articleDetailsSlice
