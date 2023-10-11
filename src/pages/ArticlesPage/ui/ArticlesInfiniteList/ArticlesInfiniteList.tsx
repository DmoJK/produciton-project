import { memo } from "react"

import { useSelector } from "react-redux"

import { ArticleList } from "@/entities/Article"
import { Text, TextTheme } from "@/shared/ui/deprecated/Text"

import {
  useArticlesPageError,
  useArticlesPageIsLoading,
  useArticlesPageIsView,
} from "../../model/selectors/articlesPageSelector"
import { getArticles } from "../../model/slice/articlesPageSlice"

interface ArticlesInfiniteListProps {
  className?: string
}

export const ArticlesInfiniteList = memo(
  ({ className }: ArticlesInfiniteListProps) => {
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useArticlesPageIsLoading()
    const error = useArticlesPageError()
    const view = useArticlesPageIsView()

    if (error) {
      return <Text theme={TextTheme.ERROR} title="Something went wrong" />
    }

    return (
      <div>
        <ArticleList
          className={className}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    )
  }
)
