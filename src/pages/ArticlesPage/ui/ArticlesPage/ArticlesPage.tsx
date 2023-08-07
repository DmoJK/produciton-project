import { classNames } from "shared/lib/classNames/classNames"
import { memo, useCallback } from "react"
import { Page } from "shared/ui/Page/Page"
import { ArticleList, ArticleView } from "entities/Article"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { ArticlesViewSelector } from "features/ArticlesViewSelector"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { useSelector } from "react-redux"
import cls from "./ArticlesPage.module.scss"
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice"
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageIsView,
} from "../../model/selectors/articlesPageSelector"
import { fetchNextArticlesList } from "../../model/services/fetchNextArticlesList/fetchNextArticlesList"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageIsView)

  const onViewChange = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  if (error) {
    return <Text theme={TextTheme.ERROR} title="Something went wrong" />
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesViewSelector view={view} onViewChange={onViewChange} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
