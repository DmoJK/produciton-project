import { memo, useEffect, useState } from "react"

import { isMobile } from "react-device-detect"
import { useTranslation } from "react-i18next"

import { saveJsonSettings, useUserJsonSettings } from "@/entities/User"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Drawer } from "@/shared/ui/Drawer"
import { Modal } from "@/shared/ui/Modal"
import { Text } from "@/shared/ui/Text"

export const ArticlesPageGreeting = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlesPageWasOpened } = useUserJsonSettings()

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
    }
  }, [dispatch, isArticlesPageWasOpened])

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Text
          title={t("Добро пожаловать на страницу статей")}
          text={t(
            "Здесь вы можете просматривать и искать статьи на различные темы"
          )}
        />
      </Drawer>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Text
        title={t("Добро пожаловать на страницу статей")}
        text={t(
          "Здесь вы можете просматривать и искать статьи на различные темы"
        )}
      />
    </Modal>
  )
})
