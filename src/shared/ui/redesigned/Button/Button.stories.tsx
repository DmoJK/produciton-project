import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { Button } from "./Button"

export default {
  title: "shared/redesigned/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Outline",
}

export const OutlineSizeS = Template.bind({})
OutlineSizeS.args = {
  children: "Outline",
  variant: "outline",
  size: "s",
}

export const OutlineSizeM = Template.bind({})
OutlineSizeS.args = {
  children: "Outline",
  variant: "outline",
  size: "m",
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: "Outline",
  variant: "outline",
  size: "l",
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: "Outline",
  variant: "outline",
  size: "xl",
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: "Outline",
  variant: "outline",
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearPrimary = Template.bind({})
ClearPrimary.args = {
  children: "Text",
  variant: "clear",
}

export const ClearSizeS = Template.bind({})
ClearSizeS.args = {
  children: "clear",
  variant: "clear",
  size: "s",
}

export const ClearSizeM = Template.bind({})
ClearSizeS.args = {
  children: "clear",
  variant: "clear",
  size: "m",
}

export const ClearSizeL = Template.bind({})
ClearSizeL.args = {
  children: "clear",
  variant: "clear",
  size: "l",
}

export const ClearSizeXL = Template.bind({})
ClearSizeXL.args = {
  children: "clear",
  variant: "clear",
  size: "xl",
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  children: "clear",
  variant: "clear",
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
  children: ">",
  variant: "outline",
  square: true,
}

export const SquareSizeS = Template.bind({})
SquareSizeS.args = {
  children: ">",
  variant: "outline",
  square: true,
  size: "s",
}

export const SquareSizeM = Template.bind({})
SquareSizeS.args = {
  children: ">",
  variant: "outline",
  square: true,
  size: "m",
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: ">",
  variant: "outline",
  square: true,
  size: "l",
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: ">",
  variant: "outline",
  square: true,
  size: "xl",
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: ">",
  disabled: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: "Text",
  fullWidth: true,
}
