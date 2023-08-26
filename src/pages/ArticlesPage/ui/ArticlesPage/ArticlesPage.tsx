import { classNames } from "shared/lib/classNames/classNames"
import { useSearchParams } from "react-router-dom"
import { memo, useCallback } from "react"
import { Page } from "widgets/Page"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import cls from "./ArticlesPage.module.scss"
import { articlesPageReducer } from "../../model/slice/articlesPageSlice"
import { fetchNextArticlesList } from "../../model/services/fetchNextArticlesList/fetchNextArticlesList"
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters"
import { ArticlesInfiniteList } from "../ArticlesInfiniteList/ArticlesInfiniteList"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"

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
