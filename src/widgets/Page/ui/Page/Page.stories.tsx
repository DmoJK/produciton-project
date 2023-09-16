import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import {Page} from "./Page"

export default {
  title: "widget/Page",
  component: Page,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: <div>Wrapper</div>
}

export const Dark = Template.bind({})
Dark.args = {
  children: <div>Wrapper</div>
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]
