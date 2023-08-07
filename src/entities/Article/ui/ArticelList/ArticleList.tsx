import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleList.module.scss"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton"

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
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
    view = ArticleView.TILE,
  }: ArticleListProps) => {
    const renderArticle = (article: Article) => (
      <ArticleListItem
        className={cls.card}
        key={article.id}
        article={article}
        view={view}
      />
    )

    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </div>
    )
  }
)
