import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import AvatarImg from "@/shared/assets/tests/storybook.jpg"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"

import ProfilePage from "./ProfilePage"

export default {
  title: "page/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...(args as object)} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    profile: {
      data: {
        id: "1",
      },
      form: {
        age: 20,
        avatar: AvatarImg,
        city: "Minsk",
        country: Country.Belarus,
        first: "Tima",
        lastname: "Araik",
        currency: Currency.RUB,
        username: "Timaik",
      },
    },
  }),
]
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings`,
      method: "GET",
      status: 200,
      response: [],
    },
  ],
}
