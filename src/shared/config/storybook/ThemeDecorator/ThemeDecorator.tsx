import { Story } from "@storybook/react"
import { Theme, ThemeProvider } from "app/providers/ThemeProvider"

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}