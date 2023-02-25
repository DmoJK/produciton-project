import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Text, TextTheme } from "./Text"

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
  theme: TextTheme.ERROR
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

export const ErrorDark = Template.bind({})
ErrorDark.args = {
  title: "The title",
  text: "the text",
  theme: TextTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: "The title",
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: "the text",
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
