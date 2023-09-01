import { memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Card, CardTheme } from "@/shared/ui/Card/Card"
import { Text } from "@/shared/ui/Text/Text"
import cls from "./NotificationItem.module.scss"
import { Notification } from "../../model/types/notificationSchema"

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <Card
        theme={CardTheme.OUTLINED}
        className={classNames(cls.NotificationItem, {}, [className])}
      >
        <Text title={notification.title} text={notification.description} />
      </Card>
    )

    if (notification.href) {
      return (
        <a
          className={cls.link}
          target="_blank"
          href={notification.href}
          rel="noreferrer"
        >
          {content}
        </a>
      )
    }

    return content
  }
)
