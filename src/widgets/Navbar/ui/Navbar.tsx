import { memo, useCallback, useState } from "react"

import { useTranslation } from "react-i18next"

import { useUserAuthData } from "@/entities/User"
import { LoginModal } from "@/features/AuthByUsername"
import { AvatarDropdown } from "@/features/AvatarDropdown"
import { NotificationButton } from "@/features/NotificationButton"
import { routes } from "@/shared/const/router"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { HStack } from "@/shared/ui/Stack"
import { Text, TextTheme } from "@/shared/ui/Text"

import cls from "./Navbar.module.scss"

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useUserAuthData()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <ToggleFeaturesComponents
        feature="isAppRedesigned"
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack className={cls.links} gap="16">
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
              className={cls.appName}
              theme={TextTheme.INVERTED}
              title={t("The ecclesia")}
            />
            <AppLink to={routes.ARTICLE_CREATE()} theme={AppLinkTheme.INVERTED}>
              {t("Создать статью")}
            </AppLink>
            <HStack className={cls.links} gap="16">
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})
