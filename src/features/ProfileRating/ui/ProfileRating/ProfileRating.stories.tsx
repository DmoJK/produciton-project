import { ComponentStory, ComponentMeta } from "@storybook/react"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import ProfileRating from "./ProfileRating"

export default {
  title: "features/ProfileRating",
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: "1" } },
      profile: { data: { id: "1" } },
    }),
  ],
} as ComponentMeta<typeof ProfileRating>

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  profileId: "1",
}
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?profileId=1&userId=1`,
      method: "GET",
      status: 200,
      response: [{ rate: 4 }],
    },
  ],
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
  profileId: "1",
}
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?profileId=1&userId=1`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
}