import { ArticleList } from "entities/Article"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { VStack } from "shared/ui/Stack"
import { Text, TextSize } from "shared/ui/Text/Text"
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi"
import cls from "./ArticleRecommendationsList.module.scss"

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo(
  ({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation("article")
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecommendationsList(4)

    if (error || !articles) {
      return null
    }

    if (isLoading) {
      return <ArticleList articles={[]} isLoading={isLoading} target="_blank" />
    }

    return (
      <VStack
        gap="8"
        max
        className={classNames('', {}, [className])}
      >
        <Text size={TextSize.L} title={t("Рекомендуем")} />
        <ArticleList
          articles={articles}
          className={cls.ArticleRecommendationsList}
          isLoading={isLoading}
          target="_blank"
        />
      </VStack>
    )
  }
)
