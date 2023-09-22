import { ComponentStory, ComponentMeta } from "@storybook/react"

import { UserRole } from "@/entities/User"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import { AvatarDropdown } from "./AvatarDropdown"

export default {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
)

export const Admin = Template.bind({})
Admin.args = {}
Admin.decorators = [
  StoreDecorator({
    user: { authData: { id: "1", avatar: "", role: [UserRole.ADMIN] } },
  }),
]

export const Manager = Template.bind({})
Manager.args = {}
Manager.decorators = [
  StoreDecorator({
    user: { authData: { id: "1", avatar: "", role: [UserRole.MANAGER] } },
  }),
]

export const User = Template.bind({})
User.args = {}
User.decorators = [
  StoreDecorator({
    user: { authData: { id: "1", avatar: "", role: [UserRole.USER] } },
  }),
]
