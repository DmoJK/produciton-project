import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { Input } from "./Input"

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: "Type text",
  value: "123123",
}

export const Dark = Template.bind({})
Dark.args = {
  placeholder: "Type text",
  value: "123123",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const WithoutPlaceholder = Template.bind({})
WithoutPlaceholder.args = {
  value: "123123",
}

export const Focused = Template.bind({})
Focused.args = {
  autofocus: true,
  placeholder: "Type text",
  value: "123123",
}

export const PlaceholderInline = Template.bind({})
PlaceholderInline.args = {
  placeholder: "Type text",
  value: "123123",
  placeholderInline: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  placeholder: "Type text",
  value: "123123",
  fullWidth: true,
}