import { memo, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
} from "@/entities/Article"
import { SortOrder } from "@/shared/types"
import { Input } from "@/shared/ui/Input/Input"
import { Card } from "@/shared/ui/Card/Card"
import { TabItem, Tabs } from "@/shared/ui/Tabs/Tabs"
import { useDebounce } from "@/shared/lib/hooks/useDebounce"
import cls from "./ArticlesPageFilters.module.scss"
import { articlesPageActions } from "../../model/slice/articlesPageSlice"
import {
  getArticlesPageIsView,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../model/selectors/articlesPageSelector"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation("article")
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageIsView)
    const search = useSelector(getArticlesPageSearch)
    const order = useSelector(getArticlesPageOrder)
    const sort = useSelector(getArticlesPageSort)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onViewChange = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
      },
      [dispatch]
    )
    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
      },
      [dispatch, fetchData]
    )
    const onChangeType = useCallback(
      (value: ArticleType) => {
        dispatch(articlesPageActions.setType(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
      },
      [dispatch, fetchData]
    )
    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
      },
      [dispatch, fetchData]
    )
    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
      },
      [dispatch, debouncedFetchData]
    )

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            order={order}
            sort={sort}
          />
          <ArticlesViewSelector view={view} onViewChange={onViewChange} />
        </div>
        <Card className={cls.search}>
          <Input
            placeholder={t("Поиск")}
            value={search}
            onChange={onChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          onChangeType={onChangeType}
          value={type}
          className={cls.tabs}
        />
      </div>
    )
  }
)
