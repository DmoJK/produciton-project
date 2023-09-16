import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import { Code } from "./Code"

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
