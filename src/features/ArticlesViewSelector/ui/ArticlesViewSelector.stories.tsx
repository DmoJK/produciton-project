import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {ArticlesViewSelector} from "./ArticlesViewSelector"

export default {
  title: "features/ArticlesViewSelector",
  component: ArticlesViewSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesViewSelector>

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => (
  <ArticlesViewSelector {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]
