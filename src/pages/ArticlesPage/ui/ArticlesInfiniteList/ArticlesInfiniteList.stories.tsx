import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {ArticlesInfiniteList} from "./ArticlesInfiniteList"

export default {
  title: "page/ArticlesInfiniteList",
  component: ArticlesInfiniteList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesInfiniteList>

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => (
  <ArticlesInfiniteList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
