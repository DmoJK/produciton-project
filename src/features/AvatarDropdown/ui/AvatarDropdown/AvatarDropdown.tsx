import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User"
import { Dropdown } from "@/shared/ui/Popups"
import { RoutePath } from "@/shared/config/routeConfig/routeConfig"
import { Avatar } from "@/shared/ui/Avatar/Avatar"
import { classNames } from "@/shared/lib/classNames/classNames"

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailable = isAdmin || isManager

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      className={classNames("", {}, [className])}
      direction="bottom-left"
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t("Админка"), href: RoutePath.admin_panel }]
          : []),
        { content: t("Профиль"), href: RoutePath.profile + authData.id },
        { content: t("Выйти"), onClick: onLogout },
      ]}
      trigger={<Avatar size={40} src={authData.avatar} />}
    />
  )
})
