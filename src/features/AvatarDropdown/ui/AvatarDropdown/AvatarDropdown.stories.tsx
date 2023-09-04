import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { AvatarDropdown } from "./AvatarDropdown"
import { UserRole } from "@/entities/User"

export default {
  title: "page/AvatarDropdown",
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
