import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import AvatarImg from "@/shared/assets/tests/storybook.jpg"
import { ProfileCard } from "./ProfileCard"

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    age: 20,
    avatar: AvatarImg,
    city: "Minsk",
    country: Country.Belarus,
    first: "Tima",
    lastname: "Araik",
    currency: Currency.RUB,
    username: "Timaik",
  },
}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
  data: {
    age: 20,
    avatar: AvatarImg,
    city: "Minsk",
    country: Country.Belarus,
    first: "Tima",
    lastname: "Araik",
    currency: Currency.RUB,
    username: "Timaik",
  },
}

export const Dark = Template.bind({})
Dark.args = {
  data: {
    age: 20,
    avatar: AvatarImg,
    city: "Minsk",
    country: Country.Belarus,
    first: "Tima",
    lastname: "Araik",
    currency: Currency.RUB,
    username: "Timaik",
  },
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const WithError = Template.bind({})
WithError.args = {
  error: "true",
}
