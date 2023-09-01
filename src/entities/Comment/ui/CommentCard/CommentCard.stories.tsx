import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { CommentCard } from "./CommentCard"

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  comment: {
    id: "1",
    text: "fdsfsdf",
    user: { id: "1", username: "user1" },
  },
}

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
