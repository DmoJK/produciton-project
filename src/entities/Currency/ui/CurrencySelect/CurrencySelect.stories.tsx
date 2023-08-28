import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CurrencySelect } from "./CurrencySelect"
import { Currency } from "../../model/types/Currency"

export default {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
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
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const WithValue = Template.bind({})
WithValue.args = {value: Currency.RUB}

export const ReadOnly = Template.bind({})
ReadOnly.args = {value: Currency.RUB, readonly: true}
