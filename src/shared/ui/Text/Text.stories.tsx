import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Text, TextSize, TextTheme } from "./Text"

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "The title",
  text: "the text",
}

export const Error = Template.bind({})
Error.args = {
  title: "The title",
  text: "the text",
  theme: TextTheme.ERROR,
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: "The title",
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: "the text",
}

export const Dark = Template.bind({})
Dark.args = {
  title: "The title",
  text: "the text",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Purple = Template.bind({})
Purple.args = {
  title: "The title",
  text: "the text",
}
Purple.decorators = [ThemeDecorator(Theme.PURPLE)]

export const SizeS = Template.bind({})
SizeS.args = {
  title: "The title",
  text: "the text",
  size: TextSize.S,
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: "The title",
  text: "the text",
  size: TextSize.M,
}

export const SizeL = Template.bind({})
SizeL.args = {
  title: "The title",
  text: "the text",
  size: TextSize.L,
}
