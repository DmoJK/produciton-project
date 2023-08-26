import { getArticleDetailsData } from "entities/Article"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { VStack } from "shared/ui/Stack"
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text"
import { useSelector } from "react-redux"
import { getUserAuthData } from "entities/User"
import { CommentForm, CommentList } from "entities/Comment"
import {
  useAddCommentForArticle,
  useGetArticleComments,
} from "../../api/articleCommentsApi"

interface ArticleCommentsProps {
  className?: string
  id?: string
}

export const ArticleComments = memo(
  ({ className, id }: ArticleCommentsProps) => {
    const { t } = useTranslation("article")
    const {
      data: comments,
      isLoading: commentsIsLoading,
      error,
    } = useGetArticleComments(id)
    const [addComment, { isLoading: isLoadingAddComment }] =
      useAddCommentForArticle()

    const user = useSelector(getUserAuthData)
    const article = useSelector(getArticleDetailsData)

    const onSendComment = useCallback(
      (text: string) => {
        if (article && user) {
          addComment({ text, articleId: article.id, userId: user.id })
        }
      },
      [addComment, article, user]
    )

    if (error) {
      return (
        <Text
          theme={TextTheme.ERROR}
          title={t("Ошибка при загрузке комментариев")}
        />
      )
    }

    return (
      <VStack max gap="8" className={classNames("", {}, [className])}>
        <Text size={TextSize.L} title={t("Комментарии")} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
        {isLoadingAddComment && <CommentList isLoading />}
      </VStack>
    )
  }
)
