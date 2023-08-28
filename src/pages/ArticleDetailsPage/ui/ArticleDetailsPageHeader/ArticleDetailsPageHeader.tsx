import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getArticleDetailsData } from "entities/Article"
import { HStack } from "shared/ui/Stack"
import { getCanEditArticle } from "../../model/selectors/article"

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToArticles = useCallback(() => {
      navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
      <HStack
        max
        justify="between"
        className={classNames("", {}, [className])}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticles}>
          {t("Назад к статьям")}
        </Button>
        {canEdit && (
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t("Редактировать")}
          </Button>
        )}
      </HStack>
    )
  }
)