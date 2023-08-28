import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { CommentForm } from "./CommentForm"

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
Primary.decorators = [
  StoreDecorator({ commentForm: { text: "I am comment text" } }),
]
