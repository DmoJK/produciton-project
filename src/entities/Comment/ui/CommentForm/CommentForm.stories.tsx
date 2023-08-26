import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {CommentForm} from "./CommentForm"

export default {
  title: "entities/Comment/CommentForm",
  component: CommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = (args) => (
  <CommentForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
