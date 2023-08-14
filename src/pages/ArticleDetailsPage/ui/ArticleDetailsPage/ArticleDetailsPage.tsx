import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { Page } from "widgets/Page"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ArticleDetails, ArticleList } from "entities/Article"
import { CommentList } from "entities/Comment"
import { Text, TextSize } from "shared/ui/Text/Text"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { AddCommentForm } from "features/AddCommentForm"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice"
import cls from "./ArticleDetailsPage.module.scss"
import {
  getArticlesCommentsError,
  getArticlesCommentsIsLoading,
} from "../../model/selectors/comments"
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle"
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendationsSlice"
import {
  getArticlesRecommendationsError,
  getArticlesRecommendationsIsLoading,
} from "../../model/selectors/recommendations"
import { 
  fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticlesRecommendations"
import { articleDetailsPageReducer } from "../../model/slice"
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article")
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(
    getArticlesRecommendationsIsLoading
  )
  const recommendationsError = useSelector(getArticlesRecommendationsError)
  const commentsIsLoading = useSelector(getArticlesCommentsIsLoading)
  const commentsError = useSelector(getArticlesCommentsError)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t("Рекомендуем")}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t("Комментарии")}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
