/* eslint-disable max-len */
import { addDecorator } from "@storybook/react"

import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator"
// import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
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
      { name: "light", class: ["app", Theme.LIGHT], color: "#9c7330" },
      { name: "dark", class: ["app", Theme.DARK], color: "#000" },
      { name: "purple", class: ["app", Theme.PURPLE], color: "#7287bb" },
    ],
  },
}

addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouteDecorator)
addDecorator(SuspenseDecorator)
