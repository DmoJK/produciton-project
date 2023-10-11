import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Dropdown } from "./Dropdown"
import { Button } from "../../../Button/Button"

export default {
  title: "shared/popups/Dropdown",
  component: Dropdown,
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
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    { content: "123123123" },
    { content: "32323232323" },
    { content: "Helloooo", disabled: true },
  ],
  trigger: <Button>Click me</Button>,
}

export const DirectionTopLeft = Template.bind({})
DirectionTopLeft.args = {
  trigger: <Button>Click me</Button>,
  items: [
    { content: "123123123" },
    { content: "32323232323" },
    { content: "Helloooo", disabled: true },
  ],
  direction: "top-left",
}

export const DirectionTopRight = Template.bind({})
DirectionTopRight.args = {
  trigger: <Button>Click me</Button>,
  items: [
    { content: "123123123" },
    { content: "32323232323" },
    { content: "Helloooo", disabled: true },
  ],
  direction: "top-right",
}

export const DirectionBottomLeft = Template.bind({})
DirectionBottomLeft.args = {
  trigger: <Button>Click me</Button>,
  items: [
    { content: "123123123" },
    { content: "32323232323" },
    { content: "Helloooo", disabled: true },
  ],
  direction: "bottom-left",
}

export const DirectionBottomRight = Template.bind({})
DirectionBottomRight.args = {
  trigger: <Button>Click me</Button>,
  items: [
    { content: "123123123" },
    { content: "32323232323" },
    { content: "Helloooo", disabled: true },
  ],
  direction: "bottom-right",
}
