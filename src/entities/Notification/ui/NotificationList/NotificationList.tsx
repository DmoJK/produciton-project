import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"
import { Skeleton } from "@/shared/ui/Skeleton"
import { VStack } from "@/shared/ui/Stack"
import { Text } from "@/shared/ui/Text"

import { useGetNotifications } from "../../api/notificationApi"
import { NotificationItem } from "../NotificationItem/NotificationItem"

interface NotificationListProps {
  className?: string
}

export const NotificationList = ({ className }: NotificationListProps) => {
  const { t } = useTranslation("")
  const { data, isLoading, error } = useGetNotifications(null, {
    pollingInterval: 5000,
  })

  if (error || !data) {
    return <Text title={t("Произошла ошибка при загрузке уведомлений")} />
  }

  if (isLoading) {
    return (
      <VStack gap="8" max className={classNames("", {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    )
  }

  return (
    <VStack gap="8" max className={classNames("", {}, [className])}>
      {data.map((item) => (
        <NotificationItem key={item.id} notification={item} />
      ))}
    </VStack>
  )
}
