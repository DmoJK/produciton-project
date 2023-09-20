import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import {
  isUserAdmin,
  isUserManager,
  userActions,
  useUserAuthData,
} from "@/entities/User"
import { routes } from "@/shared/const/router"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Avatar } from "@/shared/ui/Avatar"
import { Dropdown } from "@/shared/ui/Popups"

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useUserAuthData()
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
          ? [{ content: t("Админка"), href: routes.ADMIN_PANEL() }]
          : []),
        { content: t("Профиль"), href: routes.PROFILE(authData.id) },
        { content: t("Выйти"), onClick: onLogout },
      ]}
      trigger={<Avatar size={40} src={authData.avatar} />}
    />
  )
})
