import { memo, useCallback } from "react"

import { saveJsonSettings } from "@/entities/User"
import ThemeIconDeprecated from "@/shared/assets/icons/theme-light.svg"
import ThemeIcon from "@/shared/assets/newIcons/SwapThemeDefault.svg"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ToggleFeaturesComponents } from "@/shared/lib/features"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useTheme } from "@/shared/lib/hooks/useTheme"
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from "@/shared/ui/deprecated/Button"
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon"
import { Icon } from "@/shared/ui/redesigned/Icon"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <ToggleFeaturesComponents
      feature="isAppRedesigned"
      on={
        <Icon
          clickable
          Svg={ThemeIcon}
          onClick={toggleThemeHandler}
          className={classNames("", {}, [className])}
        />
      }
      off={
        <ButtonDeprecated
          className={classNames("", {}, [className])}
          onClick={toggleThemeHandler}
          theme={ButtonTheme.CLEAR}
        >
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </ButtonDeprecated>
      }
    />
  )
})
