import { memo } from "react"

import { useParams } from "react-router-dom"

import { ArticleDetails } from "@/entities/Article"
import { commentFormReducer } from "@/entities/Comment"
import { ArticleComments } from "@/features/ArticleComments"
import { ArticleRating } from "@/features/ArticleRating"
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList"
import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { toggleFeatures } from "@/shared/lib/features"
import { VStack } from "@/shared/ui/Stack"
import { Page } from "@/widgets/Page"

import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  commentForm: commentFormReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>()
  const articleRating = toggleFeatures({
    name: "isArticleRatingEnabled",
    // eslint-disable-next-line react/no-unstable-nested-components
    on: () => <ArticleRating articleId={id} />,
    // eslint-disable-next-line react/no-unstable-nested-components, i18next/no-literal-string
    off: () => <div>Rate article coming soon</div>
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames("", {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRating}
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
