import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useArticleDetailsData } from "@/entities/Article"
import { routes } from "@/shared/const/router"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { HStack } from "@/shared/ui/Stack"

import { getCanEditArticle } from "../../model/selectors/article"

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(
  ({ className }: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useArticleDetailsData()

    const onBackToArticles = useCallback(() => {
      navigate(routes.ARTICLES())
    }, [navigate])

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(routes.ARTICLE_EDIT(article.id))
      }
    }, [article, navigate])

    return (
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToArticles}>
          {t("Назад к статьям")}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t("Редактировать")}
          </Button>
        )}
      </HStack>
    )
  }
)
