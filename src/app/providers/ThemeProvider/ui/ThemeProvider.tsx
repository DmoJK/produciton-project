import { ReactNode, useEffect, useMemo, useState } from "react"

import { useUserJsonSettings } from "@/entities/User"
// import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage"
import { Theme } from "@/shared/const/theme"
import { ThemeContext } from "@/shared/lib/context/ThemeContext"

// (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const { theme: defaultTheme } = useUserJsonSettings()
  const [isThemeInited, setIsThemeInited] = useState(false)
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT
  )

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )
  document.body.className = theme

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
