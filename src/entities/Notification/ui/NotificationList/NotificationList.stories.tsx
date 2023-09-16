import { ComponentStory, ComponentMeta } from "@storybook/react"
import withMock from "storybook-addon-mock"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import { NotificationList } from "./NotificationList"

export default {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
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
