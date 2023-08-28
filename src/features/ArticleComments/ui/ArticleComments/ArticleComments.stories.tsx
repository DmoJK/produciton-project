import { ComponentStory, ComponentMeta } from "@storybook/react"
import withMock from "storybook-addon-mock"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Comment } from "entities/Comment"
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
  decorators: [StoreDecorator({}), withMock],
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
