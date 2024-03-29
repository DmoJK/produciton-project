import { useTranslation } from "react-i18next"

import { useUserAuthData } from "@/entities/User"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from "@/shared/ui/deprecated/AppLink"
import { AppLink } from "@/shared/ui/redesigned/AppLink"
import { Icon } from "@/shared/ui/redesigned/Icon"

import cls from "./SidebarItem.module.scss"

import { SidebarItemType } from "../../model/types/sidebar"

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useUserAuthData()

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <ToggleFeaturesComponents
      feature="isAppRedesigned"
      on={
        <AppLink
          variant="primary"
          to={item.path}
          className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.INVERTED}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  )
}
