import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/shared/const/theme"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Button, ButtonSize, ButtonTheme } from "./Button"

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Text",
}

export const Outline = Template.bind({})
Outline.args = {
  children: "Outline",
  theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeS = Template.bind({})
OutlineSizeS.args = {
  children: "Outline",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.S,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: "Outline",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: "Outline",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: "Outline",
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: "Text",
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: "Text",
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareSizeS = Template.bind({})
SquareSizeS.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.S,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  disabled: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: "Text",
  fullWidth: true,
}
