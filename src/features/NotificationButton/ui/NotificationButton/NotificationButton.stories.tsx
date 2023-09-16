import { ComponentStory, ComponentMeta } from "@storybook/react"
import withMock from "storybook-addon-mock"
import { Theme } from "@/shared/const/theme"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { NotificationButton } from "./NotificationButton"

export default {
  title: "features/NotificationButton",
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
)

const notification = {
  id: "1",
  title: "TITLE",
  description: "description",
  userId: "1",
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: "GET",
      status: 200,
      response: [
        { ...notification, id: "1" },
        { ...notification, id: "2" },
        { ...notification, id: "3" },
        { ...notification, id: "4" },
      ],
    },
  ],
}
