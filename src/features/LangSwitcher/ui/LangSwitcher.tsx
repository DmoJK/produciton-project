import { memo } from "react"

import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button"
import { Button } from "@/shared/ui/redesigned/Button"

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  }

  return (
    <ToggleFeaturesComponents
      feature="isAppRedesigned"
      on={
        <Button variant="clear">{t(short ? "Язык коротко" : "Язык")}</Button>
      }
      off={
        <ButtonDeprecated
          className={classNames("", {}, [className])}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={toggle}
        >
          {t(short ? "Язык коротко" : "Язык")}
        </ButtonDeprecated>
      }
    />
  )
})
