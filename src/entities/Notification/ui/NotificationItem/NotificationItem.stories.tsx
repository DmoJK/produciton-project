import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/shared/const/theme"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { NotificationItem } from "./NotificationItem"

export default {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
)

const notification = {
  id: "1",
  title: "TITLE",
  description: "description",
  userId: "1",
}

export const Primary = Template.bind({})
Primary.args = {
  notification,
}
