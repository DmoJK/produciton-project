import { Fragment, ReactNode, memo } from "react"
import { Menu } from "@headlessui/react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { DropdownDirection } from "@/shared/types/ui"
import { Button } from "../../../Button/Button"
import { AppLink } from "../../../AppLink/AppLink"
import cls from "./Dropdown.module.scss"
import popupStyle from "../../styles/Popups.module.scss"
import { mapDirectionClass } from "../../styles/mapClasses"

export interface DropdownItems {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItems[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = memo(
  ({
    className,
    trigger,
    items,
    direction = "bottom-right",
  }: DropdownProps) => {
    const menuClasses = [mapDirectionClass[direction]]

    return (
      <Menu
        as="div"
        className={classNames('', {}, [className, popupStyle.Popup])}
      >
        <Menu.Button className={classNames(cls.btn, {}, [popupStyle.trigger])}>
          {trigger}
        </Menu.Button>
        <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
          {items.map((item, index) => {
            const content = ({ active }: { active: boolean }) => (
              <Button
                type="button"
                onClick={item.onClick}
                disabled={item.disabled}
                className={classNames(
                  cls.item,
                  { [popupStyle.active]: active, },
                  []
                )}
              >
                {item.content}
              </Button>
            )

            if (item.href) {
              return (
                <Menu.Item
                  as={AppLink}
                  key={index}
                  to={item.href}
                  disabled={item.disabled}
                >
                  {content}
                </Menu.Item>
              )
            }

            return (
              <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          })}
        </Menu.Items>
      </Menu>
    )
  }
)
