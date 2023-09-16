import { memo, useCallback } from "react"

import { useSearchParams } from "react-router-dom"

import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { Page } from "@/widgets/Page"

import cls from "./ArticlesPage.module.scss"

import { fetchNextArticlesList } from "../../model/services/fetchNextArticlesList/fetchNextArticlesList"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"
import { articlesPageReducer } from "../../model/slice/articlesPageSlice"
import { ArticlesInfiniteList } from "../ArticlesInfiniteList/ArticlesInfiniteList"
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters"

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticlesInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
