import { memo, useMemo, useState } from "react"

import { useSelector } from "react-redux"

import { LangSwitcher } from "@/features/LangSwitcher"
import { ThemeSwitcher } from "@/features/ThemeSwitcher"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { AppLogo } from "@/shared/ui/AppLogo"
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button"
import { VStack } from "@/shared/ui/Stack"

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
        { [cls.collapsed]: collapsed },
        [className]
      )}
    >
      <AppLogo className={cls.appLogo} />
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
