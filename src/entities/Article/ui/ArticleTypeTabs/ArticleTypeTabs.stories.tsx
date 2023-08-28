import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { ArticleTypeTabs } from "./ArticleTypeTabs"
import { ArticleType } from "../../model/types/article"

export default {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
  <ArticleTypeTabs {...args} />
)

export const Primary = Template.bind({})
Primary.args = { value: ArticleType.IT }

export const Dark = Template.bind({})
Dark.args = { value: ArticleType.IT }
Dark.decorators = [ThemeDecorator(Theme.DARK)]
