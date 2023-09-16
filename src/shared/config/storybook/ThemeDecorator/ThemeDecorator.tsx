import { Story } from "@storybook/react"
import { Theme } from "@/shared/const/theme"
// eslint-disable-next-line dmojk-plugin/layer-imports-checker
import { ThemeProvider } from "@/app/providers/ThemeProvider"

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
