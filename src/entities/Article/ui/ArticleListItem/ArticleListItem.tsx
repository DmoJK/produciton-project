import { HTMLAttributeAnchorTarget, memo } from "react"

import { useTranslation } from "react-i18next"

import EyeIcon from "@/shared/assets/icons/eye.svg"
import { routes } from "@/shared/const/router"
import { classNames } from "@/shared/lib/classNames/classNames"
import { AppImage } from "@/shared/ui/AppImage"
import { AppLink } from "@/shared/ui/AppLink"
import { Avatar } from "@/shared/ui/Avatar"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { Card } from "@/shared/ui/Card"
import { Icon } from "@/shared/ui/Icon"
import { Skeleton } from "@/shared/ui/Skeleton"
import { Text } from "@/shared/ui/Text"

import cls from "./ArticleListItem.module.scss"

import { ArticleBlockType, ArticleView } from "../../model/consts/ArticleConsts"
import { Article, ArticleTextBlock } from "../../model/types/article"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo(
  ({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation("article")

    const types = <Text text={article.type.join(", ")} className={cls.types} />
    const views = (
      <>
        <Text text={String(article.views)} className={cls.views} />
        <Icon Svg={EyeIcon} />
      </>
    )

    if (view === ArticleView.LIST) {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock

      return (
        <div
          data-testid="ArticleListItem"
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={cls.username} />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <Text
              data-testid="ArticleListItem.Title"
              title={article.title}
              className={cls.title}
            />
            {types}
            <AppImage
              src={article.img}
              className={cls.img}
              alt={article.title}
              fallback={<Skeleton width="100%" height={250} />}
            />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
            <div className={cls.footer}>
              <AppLink to={routes.ARTICLE_DETAILS(article.id)}>
                <Button theme={ButtonTheme.OUTLINE}>
                  {t("Читать далее...")}
                </Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      )
    }

    return (
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={routes.ARTICLE_DETAILS(article.id)}
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <AppImage
              src={article.img}
              alt={article.title}
              className={cls.img}
              fallback={<Skeleton width={200} height={200} />}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <div>
            <Text
              data-testid="ArticleListItem.Title"
              title={article.title}
              className={cls.title}
            />
          </div>
        </Card>
      </AppLink>
    )
  }
)
