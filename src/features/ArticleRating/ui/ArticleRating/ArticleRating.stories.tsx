import { ComponentStory, ComponentMeta } from "@storybook/react"
import withMock from "storybook-addon-mock"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import ArticleRating from "./ArticleRating"

export default {
  title: "features/ArticleRating",
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({ user: { authData: { id: "1" } } }), withMock],
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  articleId: "1",
}
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?articleId=1&userId=1`,
      method: "GET",
      status: 200,
      response: [{ rate: 4 }],
    },
  ],
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
  articleId: "1",
}
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?articleId=1&userId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
}
