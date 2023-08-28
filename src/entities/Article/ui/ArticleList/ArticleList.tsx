import { HTMLAttributeAnchorTarget, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Text, TextTheme } from "shared/ui/Text/Text"
import cls from "./ArticleList.module.scss"
import { Article } from "../../model/types/article"
import { ArticleView } from "../../model/consts/ArticleConsts"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton"

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.LIST ? 3 : 16)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ArticleList = memo(
  ({
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.TILE,
  }: ArticleListProps) => {
    const { t } = useTranslation("article")
    const renderArticle = (article: Article) => (
      <ArticleListItem
        className={cls.card}
        key={article.id}
        article={article}
        view={view}
        target={target}
      />
    )

    if (!isLoading && !articles.length) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text title={t("Статья не найдена")} theme={TextTheme.ERROR} />
        </div>
      )
    }

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    )
  }
)
