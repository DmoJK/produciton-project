import { useContext } from "react"

import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage"
import { Theme } from "@/shared/const/theme"

import { ThemeContext } from "../context/ThemeContext"

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.PURPLE
        break
      case Theme.PURPLE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme: theme || Theme.LIGHT, toggleTheme }
}
