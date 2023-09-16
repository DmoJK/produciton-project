import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/shared/const/theme"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {StarRating} from "./StarRating"

export default {
  title: "shared/StarRating",
  component: StarRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => (
  <StarRating {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  
}
