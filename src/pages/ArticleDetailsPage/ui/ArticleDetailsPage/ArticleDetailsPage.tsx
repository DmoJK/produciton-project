import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ArticleDetails } from "entities/Article"
import { CommentList } from "entities/Comment"
import { Text } from "shared/ui/Text/Text"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import {
  ArticleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/ArticleDetailsCommentsSlice"
import cls from "./ArticleDetailsPage.module.scss"
import {
  getArticlesCommentsError,
  getArticlesCommentsIsLoading,
} from "../../model/selectors/comments"
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId"

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentsReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article")
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticlesCommentsIsLoading)
  const commentsError = useSelector(getArticlesCommentsError)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("Комментарии")} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
