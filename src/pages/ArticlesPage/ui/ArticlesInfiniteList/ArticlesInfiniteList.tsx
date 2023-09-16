import { memo } from "react"
import { useSelector } from "react-redux"
import { Text, TextTheme } from "@/shared/ui/Text"
import { ArticleList } from "@/entities/Article"
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageIsView,
} from "../../model/selectors/articlesPageSelector"
import { getArticles } from "../../model/slice/articlesPageSlice"

interface ArticlesInfiniteListProps {
  className?: string
}

export const ArticlesInfiniteList = memo(
  ({ className }: ArticlesInfiniteListProps) => {
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageIsView)

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
