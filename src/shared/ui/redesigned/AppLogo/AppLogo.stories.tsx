import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { AppLogo } from "./AppLogo"

export default {
  title: "shared/redesigned/AppLogo",
  component: AppLogo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppLogo>

const Template: ComponentStory<typeof AppLogo> = (args) => <AppLogo {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
