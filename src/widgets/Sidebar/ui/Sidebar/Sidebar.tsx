import { memo, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { LangSwitcher } from "widgets/LangSwitcher"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import cls from "./Sidebar.module.scss"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { getSidebarItems } from "../../model/selectors/getSidebarItems"

interface SidebarProps {
  className?: string
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
    <div
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
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
})
