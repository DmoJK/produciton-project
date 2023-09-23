import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "../../src/shared/const/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: Theme.LIGHT, color: "#9c7330" },
      { name: "dark", class: Theme.DARK, color: "#000" },
      { name: "purple", class: Theme.PURPLE, color: "#7287bb" },
    ],
  },
}
export const decorators = [
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
  RouteDecorator,
  SuspenseDecorator,
]
