import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import {Card} from "./Card"
import { Text } from "../Text/Text"

export default {
  title: "shared/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: <Text title="TITLE" text="text" /> 
}

export const Dark = Template.bind({})
Dark.args = {
  children: <Text title="TITLE" text="text" />
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]