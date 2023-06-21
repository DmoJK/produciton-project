import { classNames } from "shared/lib/classNames/classNames"
import { memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { Text, TextAlign, TextSize, TextTheme } from "shared/ui/Text/Text"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { Avatar } from "shared/ui/Avatar/Avatar"
import EyeIcon from "shared/assets/icons/eye.svg"
import CalendarIcon from "shared/assets/icons/calendar.svg"
import { Icon } from "shared/ui/Icon/Icon"
import cls from "./ArticleDetails.module.scss"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById"
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails"
import { ArticleBlock, ArticleBlockType } from "../../model/types/article"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation("article")
  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            block={block}
            key={block.id}
            className={cls.block}
          />
        )
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            block={block}
            key={block.id}
            className={cls.block}
          />
        )
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            block={block}
            key={block.id}
            className={cls.block}
          />
        )
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
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
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
