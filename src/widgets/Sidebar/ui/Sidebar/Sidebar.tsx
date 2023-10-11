import { memo, useMemo, useState } from "react"

import { useSelector } from "react-redux"

import { LangSwitcher } from "@/features/LangSwitcher"
import { ThemeSwitcher } from "@/features/ThemeSwitcher"
import ArrowIcon from "@/shared/assets/newIcons/ArrowDefault.svg"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button"
import { VStack } from "@/shared/ui/deprecated/Stack"
import { AppLogo } from "@/shared/ui/redesigned/AppLogo"
import { Icon } from "@/shared/ui/redesigned/Icon"

import cls from "./Sidebar.module.scss"

import { getSidebarItems } from "../../model/selectors/getSidebarItems"
import { SidebarItem } from "../SidebarItem/SidebarItem"


interface SidebarProps {
  className?: string
}

interface DeprecatedSidebarProps {
  collapsed: boolean
  className?: string
  onToggle: () => void
  itemsList: any[]
}

const DeprecatedSidebar = ({
  collapsed,
  className,
  onToggle,
  itemsList,
}: DeprecatedSidebarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemsList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  )
}

interface RedesignedSidebarProps {
  collapsed: boolean
  className?: string
  onToggle: () => void
  itemsList: any[]
}

const RedesignedSidebar = ({
  collapsed,
  className,
  onToggle,
  itemsList,
}: DeprecatedSidebarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.SidebarRedesigned,
        { [cls.collapsedRedesigned]: collapsed },
        [className]
      )}
    >
      <AppLogo size={collapsed ? 40 : 80} className={cls.appLogo} />
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemsList}
      </VStack>
      <Icon
        clickable
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        Svg={ArrowIcon}
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </aside>
  )
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  )

  return (
    <ToggleFeaturesComponents
      feature="isAppRedesigned"
      on={
        <RedesignedSidebar
          className={className}
          collapsed={collapsed}
          itemsList={itemsList}
          onToggle={onToggle}
        />
      }
      off={
        <DeprecatedSidebar
          className={className}
          collapsed={collapsed}
          itemsList={itemsList}
          onToggle={onToggle}
        />
      }
    />
  )
})
