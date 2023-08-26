import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Page } from "widgets/Page"
import { useParams } from "react-router-dom"
import { ArticleDetails } from "entities/Article"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { ArticleRecommendationsList } from "features/ArticleRecommendationsList"
import { ArticleComments } from "features/ArticleComments"
import { commentFormReducer } from "entities/Comment/model/slice/commentFormSlice"
import { VStack } from "shared/ui/Stack"
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  commentForm: commentFormReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article")
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames("", {}, [className])}>
        {t("Статья не найдена")}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames("", {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
