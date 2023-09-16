import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import {RatingCard} from "./RatingCard"

export default {
  title: "entities/RatingCard",
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => (
  <RatingCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK)
]
