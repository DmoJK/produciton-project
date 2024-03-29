import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Comment } from "@/entities/Comment"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import { ArticleComments } from "./ArticleComments"

const comment: Comment = {
  id: "1",
  user: {
    id: "1",
    username: "artem",
  },
  text: "Hi, i am comment",
}

export default {
  title: "features/ArticleComments",
  component: ArticleComments,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleComments>

const Template: ComponentStory<typeof ArticleComments> = (args) => (
  <ArticleComments {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: "1",
}
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/comments?articleId=1&_expand=user`,
      method: "GET",
      status: 200,
      response: [
        { ...comment, id: "1" },
        { ...comment, id: "2" },
        { ...comment, id: "3" },
      ],
    },
  ],
}
