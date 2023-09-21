import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import {AppImage} from "./AppImage"

export default {
  title: "page/AppImage",
  component: AppImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
