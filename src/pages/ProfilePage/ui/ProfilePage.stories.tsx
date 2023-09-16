import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/shared/const/theme"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import AvatarImg from "@/shared/assets/tests/storybook.jpg"
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

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
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
