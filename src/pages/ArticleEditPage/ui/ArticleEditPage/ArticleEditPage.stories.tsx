import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import ArticleEditPage from "./ArticleEditPage"

export default {
  title: "page/ArticleEditPage",
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
