import { ReactNode, memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./Tabs.module.scss"

import { Card, CardTheme } from "../Card/Card"

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo(
  ({ className, onTabClick, tabs, value }: TabsProps) => {
    const { t } = useTranslation()

    const onClickHandler = useCallback(
      (tab: TabItem) => () => {
        onTabClick(tab)
      },
      [onTabClick]
    )

    return (
      <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            className={cls.tab}
            theme={tab.value === value ? CardTheme.PRIMARY : CardTheme.OUTLINED}
            onClick={onClickHandler(tab)}
            key={tab.value}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    )
  }
)
