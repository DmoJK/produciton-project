import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/StoreProvider"

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../../selectors/articlesPageSelector"
import { articlesPageActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesList", async (_, { getState, dispatch }) => {
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNum(getState())
  const isLoading = getArticlesPageIsLoading(getState())

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(fetchArticlesList({replace: false}))
  }
})
