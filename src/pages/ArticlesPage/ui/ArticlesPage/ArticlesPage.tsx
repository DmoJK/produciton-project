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
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageIsView,
} from "../../model/selectors/articlesPageSelector"
import { fetchNextArticlesList } from "../../model/services/fetchNextArticlesList/fetchNextArticlesList"

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageIsView)

  const onViewChange = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({ page: 1 }))
  })

  if(error) {
    return <Text theme={TextTheme.ERROR} title="Something went wrong" />
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
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
