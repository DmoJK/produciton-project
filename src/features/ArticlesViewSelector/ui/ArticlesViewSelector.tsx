import { memo } from "react"

import { ArticleView } from "@/entities/Article"
import ListIcon from "@/shared/assets/icons/list.svg"
import TiledIcon from "@/shared/assets/icons/tiled.svg"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { Icon } from "@/shared/ui/Icon"

import cls from "./ArticlesViewSelector.module.scss"

interface ArticlesViewSelectorProps {
  className?: string
  view: ArticleView
  onViewChange?: (view: ArticleView) => void
}

const viewTypes = [
  { view: ArticleView.LIST, icon: ListIcon },
  { view: ArticleView.TILE, icon: TiledIcon },
]

export const ArticlesViewSelector = memo(
  ({ className, view, onViewChange }: ArticlesViewSelectorProps) => {
    const onViewClick = (newView: ArticleView) => () => {
      onViewChange?.(newView)
    }

    return (
      <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            theme={ButtonTheme.CLEAR}
            onClick={onViewClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              width={24}
              height={24}
              className={classNames("", {
                [cls.notSelected]: viewType.view !== view,
              })}
            />
          </Button>
        ))}
      </div>
    )
  }
)
