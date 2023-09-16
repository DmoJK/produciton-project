import { ComponentStory, ComponentMeta } from "@storybook/react"

import AvatarImg from "@/shared/assets/tests/storybook.jpg"
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
    src: AvatarImg
}

export const Dark = Template.bind({})
Dark.args = {
    size: 150,
    src: AvatarImg
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Small = Template.bind({})
Small.args = {
    size: 50,
    src: AvatarImg
}