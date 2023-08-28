import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CountrySelect } from "./CountrySelect"
import { Country } from "../../model/types/Country"

export default {
  title: "entities/CountrySelect",
  component: CountrySelect,
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
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const WithValue = Template.bind({})
WithValue.args = {value: Country.Russia}

export const ReadOnly = Template.bind({})
ReadOnly.args = {value: Country.Russia, readonly: true}
