import { memo, useCallback, useState } from "react"
import { BrowserView, MobileView } from "react-device-detect"
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider"
import { classNames } from "@/shared/lib/classNames/classNames"
import { NotificationList } from "@/entities/Notification"
import { Popover } from "@/shared/ui/Popups"
import { Button, ButtonTheme } from "@/shared/ui/Button/Button"
import { Icon } from "@/shared/ui/Icon/Icon"
import NotificationIcon from "@/shared/assets/icons/notification.svg"
import { Drawer } from "@/shared/ui/Drawer/Drawer"
import cls from "./NotificationButton.module.scss"

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false)
    }, [])

    const trigger = (
      <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
        <Icon inverted Svg={NotificationIcon} />
      </Button>
    )

    return (
      <div>
        <BrowserView>
          <Popover trigger={trigger} direction="bottom-left">
            <NotificationList
              className={classNames(cls.NotificationButton, {}, [className])}
            />
          </Popover>
        </BrowserView>
        <MobileView>
          {trigger}
          <AnimationProvider>
            <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
        </MobileView>
      </div>
    )
  }
)
