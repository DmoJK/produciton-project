import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ArticleType } from "@/entities/Article"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { ArticleTypeTabs } from "./ArticleTypeTabs"

export default {
  title: "features/ArticleTypeTabs",
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
