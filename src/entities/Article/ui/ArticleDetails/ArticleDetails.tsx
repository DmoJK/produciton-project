import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import CalendarIcon from "@/shared/assets/icons/calendar.svg"
import EyeIcon from "@/shared/assets/icons/eye.svg"
import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { Avatar } from "@/shared/ui/Avatar"
import { Icon } from "@/shared/ui/Icon"
import { Skeleton } from "@/shared/ui/Skeleton"
import { HStack, VStack } from "@/shared/ui/Stack"
import { Text, TextAlign, TextSize, TextTheme } from "@/shared/ui/Text"

import cls from "./ArticleDetails.module.scss"

import { ArticleBlockType } from "../../model/consts/ArticleConsts"
import {
  useArticleDetailsData,
  useArticleDetailsIsLoading,
  useArticleDetailsError,
} from "../../model/selectors/articleDetailsSelectors"
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { ArticleBlock } from "../../model/types/article"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation("article")
  const dispatch = useAppDispatch()

  const isLoading = useArticleDetailsIsLoading()
  const article = useArticleDetailsData()
  const error = useArticleDetailsError()

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} key={block.id} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} key={block.id} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} key={block.id} />
      default:
        return null
    }
  }, [])

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content

  if (isLoading) {
    content = (
      <VStack gap="16" max>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        title={t("Произошла ошибка при загрузке статьи")}
      />
    )
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </HStack>
        <VStack data-testid="ArticleDetails.Info" gap="4" max>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        max
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
