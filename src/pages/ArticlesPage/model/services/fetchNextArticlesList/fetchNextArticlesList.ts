import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePageNum,
} from "../../selectors/articlesPageSelector"
import { articlesPageActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesList", async (_, { getState, dispatch }) => {
  const hasMore = getArticlePageHasMore(getState())
  const page = getArticlePageNum(getState())
  const isLoading = getArticlePageIsLoading(getState())

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(
      fetchArticlesList({
        page: page + 1,
      })
    )
  }
})
