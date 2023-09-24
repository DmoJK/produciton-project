import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

import { ProfileCard } from "./ProfileCard"

const data = {
  age: 20,
  avatar: "/tests/storybook.jpg",
  city: "Minsk",
  country: Country.Belarus,
  first: "Tima",
  lastname: "Araik",
  currency: Currency.RUB,
  username: "Timaik",
}

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
  data,
}

export const Readonly = Template.bind({})
Readonly.args = {
  readonly: true,
  data,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}

export const WithError = Template.bind({})
WithError.args = {
  error: "true",
}
