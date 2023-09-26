import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article"
import { ArticleSortSelector } from "@/features/ArticleSortSelector"
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector"
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useDebounce } from "@/shared/lib/hooks/useDebounce"
import { SortOrder } from "@/shared/types/sort"
import { Card } from "@/shared/ui/Card"
import { Input } from "@/shared/ui/Input"

import cls from "./ArticlesPageFilters.module.scss"

import {
  useArticlesPageIsView,
  useArticlesPageOrder,
  useArticlesPageSearch,
  useArticlesPageSort,
  useArticlesPageType,
} from "../../model/selectors/articlesPageSelector"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import { useArticlesPageActions } from "../../model/slice/articlesPageSlice"

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation("article")
    const dispatch = useAppDispatch()
    const { setOrder, setPage, setSort, setSearch, setType, setView } =
      useArticlesPageActions()
    const view = useArticlesPageIsView()
    const search = useArticlesPageSearch()
    const order = useArticlesPageOrder()
    const sort = useArticlesPageSort()
    const type = useArticlesPageType()

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onViewChange = useCallback(
      (view: ArticleView) => {
        setView(view)
      },
      [setView]
    )
    const onChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        setOrder(newOrder)
        setPage(1)
        fetchData()
      },
      [fetchData, setOrder, setPage]
    )
    const onChangeType = useCallback(
      (value: ArticleType) => {
        setType(value)
        setPage(1)
        fetchData()
      },
      [fetchData, setPage, setType]
    )
    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        setSort(newSort)
        setPage(1)
        fetchData()
      },
      [fetchData, setPage, setSort]
    )
    const onChangeSearch = useCallback(
      (search: string) => {
        setSearch(search)
        setPage(1)
        debouncedFetchData()
      },
      [setSearch, setPage, debouncedFetchData]
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
            data-testid="ArticlesPageFilters.Search"
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
