import { ReactNode, useMemo, useState } from "react"
import { ThemeContext } from "@/shared/lib/context/ThemeContext"
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage"
import { Theme } from "@/shared/const/theme"

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
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
