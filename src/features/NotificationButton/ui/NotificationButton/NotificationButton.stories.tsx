import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import { NotificationButton } from "./NotificationButton"

export default {
  title: "features/NotificationButton",
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
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
