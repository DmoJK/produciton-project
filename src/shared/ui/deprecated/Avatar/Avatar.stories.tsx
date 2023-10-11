import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { Avatar } from "./Avatar"

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    size: 150,
    src: "/tests/storybook.jpg",
}

export const Dark = Template.bind({})
Dark.args = {
    size: 150,
    src: "/tests/storybook.jpg",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Small = Template.bind({})
Small.args = {
    size: 50,
    src: "/tests/storybook.jpg",
}