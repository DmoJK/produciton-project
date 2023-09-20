import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { RatingCard } from "@/entities/Rating"
import { useUserAuthData } from "@/entities/User"
import { Skeleton } from "@/shared/ui/Skeleton"

import { useGetArticleRating, useRateArticle } from "../../api/articleRatingApi"

export interface ArticleRatingProps {
  className?: string
  articleId?: string
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const userData = useUserAuthData()
  const {
    data,
    isLoading,
    error: getError,
  } = useGetArticleRating({
    articleId,
    userId: userData?.id,
  })
  const [rateArticle, { error: rateError }] = useRateArticle()

  const handleRate = useCallback(
    (starsCount: number, feedback?: string) => {
      rateArticle({
        articleId,
        userId: userData?.id,
        rate: starsCount,
        feedback,
      })
    },
    [articleId, rateArticle, userData?.id]
  )

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRate(starsCount, feedback)
    },
    [handleRate]
  )

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRate(starsCount)
    },
    [handleRate]
  )

  if (getError || rateError || !data) {
    return null
  }

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  const rating = data.length > 0 ? data[0].rate : 0

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t("Оцените статью")}
      feedbackTitle={t("Оставьте свой отзыв о статье")}
      rate={rating}
    />
  )
})

export default ArticleRating
