import { ReactNode, memo } from "react"

import { Popover as HPopover } from "@headlessui/react"

import { classNames } from "@/shared/lib/classNames/classNames"
import { DropdownDirection } from "@/shared/types/ui"

import cls from "./Popover.module.scss"

import { mapDirectionClass } from "../../styles/mapClasses"
import popupStyle from "../../styles/Popups.module.scss"

interface PopoverProps {
  className?: string
  trigger: ReactNode
  children: ReactNode
  direction?: DropdownDirection
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const Popover = memo(
  ({
    className,
    trigger,
    children,
    direction = "bottom-right",
  }: PopoverProps) => {
    const panelClasses = [mapDirectionClass[direction]]

    return (
      <HPopover
        as="div"
        className={classNames("", {}, [className, popupStyle.Popup])}
      >
        <HPopover.Button as="div" className={popupStyle.trigger}>
          {trigger}
        </HPopover.Button>

        <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
          {children}
        </HPopover.Panel>
      </HPopover>
    )
  }
)
