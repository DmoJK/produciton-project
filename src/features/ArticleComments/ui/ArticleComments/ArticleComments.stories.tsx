import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { ArticleComments } from "./ArticleComments"

export default {
  title: "features/ArticleComments",
  component: ArticleComments,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleComments>

const Template: ComponentStory<typeof ArticleComments> = (args) => (
  <ArticleComments {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
