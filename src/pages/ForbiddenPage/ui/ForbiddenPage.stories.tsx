import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import ForbiddenPage from "./ForbiddenPage"

export default {
  title: "page/ForbiddenPage",
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = () => <ForbiddenPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
