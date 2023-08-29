import { memo } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { NotificationList } from "entities/Notification"
import { Popover } from "shared/ui/Popups"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { Icon } from "shared/ui/Icon/Icon"
import NotificationIcon from "shared/assets/icons/notification.svg"
import cls from "./NotificationButton.module.scss"

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo(
  ({ className }: NotificationButtonProps) => {
    const { t } = useTranslation()
    return (
      <Popover
        trigger={
          <Button theme={ButtonTheme.CLEAR}>
            <Icon inverted Svg={NotificationIcon} />
          </Button>
        }
        direction="bottom-left"
      >
        <NotificationList
          className={classNames(cls.NotificationButton, {}, [className])}
        />
      </Popover>
    )
  }
)
