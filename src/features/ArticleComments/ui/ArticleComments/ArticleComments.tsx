import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { useArticleDetailsData } from "@/entities/Article"
import { CommentForm, CommentList } from "@/entities/Comment"
import { useUserAuthData } from "@/entities/User"
import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from "@/shared/ui/Stack"
import { Text, TextSize, TextTheme } from "@/shared/ui/Text"

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

    const user = useUserAuthData()
    const article = useArticleDetailsData()

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
