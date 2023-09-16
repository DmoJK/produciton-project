import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import {ArticlesPageFilters} from "./ArticlesPageFilters"

export default {
  title: "page/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]
