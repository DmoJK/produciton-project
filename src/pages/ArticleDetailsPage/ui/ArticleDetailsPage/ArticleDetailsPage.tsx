import { memo } from "react"
import { useParams } from "react-router-dom"
import { Page } from "@/widgets/Page"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ArticleDetails } from "@/entities/Article"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList"
import { ArticleComments } from "@/features/ArticleComments"
import { commentFormReducer } from "@/entities/Comment"
import { VStack } from "@/shared/ui/Stack"
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"
import { ArticleRating } from "@/features/ArticleRating"

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  commentForm: commentFormReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames("", {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
