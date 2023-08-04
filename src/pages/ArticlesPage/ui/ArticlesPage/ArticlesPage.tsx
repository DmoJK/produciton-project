import { classNames } from "shared/lib/classNames/classNames"
import { memo } from "react"
import { ArticleList, ArticleView } from "entities/Article"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { ArticlesViewSelector } from "features/ArticlesViewSelector"
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

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticlesViewSelector view={view} onViewChange={onViewChange} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
