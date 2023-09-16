import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CommentList } from "./CommentList"

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    {
      id: "1",
      text: "fdsfsdf",
      user: { id: "1", username: "user1" },
    },
    {
      id: "2",
      text: "fahaha",
      user: { id: "2", username: "user2" },
    },
  ],
}

export const WithoutComments = Template.bind({})
WithoutComments.args = {comments: []}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
  comments: [],
}
