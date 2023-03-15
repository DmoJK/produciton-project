import { memo, useMemo, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { LangSwitcher } from "widgets/LangSwitcher"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import cls from "./Sidebar.module.scss"
import { SidebarItemsList } from "../../model/items"
import { SidebarItem } from "../SidebarItem/SidebarItem"

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path}/>
      )),
    [collapsed]
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
