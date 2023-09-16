import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "@/shared/const/theme"

import AdminPanelPage from "./AdminPanelPage"

export default {
  title: "page/AdminPanelPage",
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})]
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
