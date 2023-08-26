import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { ArticleRecommendationsList } from "./ArticleRecommendationsList"

export default {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
  <ArticleRecommendationsList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
