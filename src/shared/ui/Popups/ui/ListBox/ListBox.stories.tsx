import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ListBox } from "./ListBox"

export default {
  title: "shared/popups/ListBox",
  component: ListBox,
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
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: "default value",
  label: "some label",
  value: undefined,
  options: [
    { content: "First Section of Content", value: "first" },
    { content: "Second", value: "second" },
    { content: "Third", value: "third", disabled: true },
  ],
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  defaultValue: "default value",
  label: "some label",
  readonly: true,
}

export const DirectionTopLeft = Template.bind({})
DirectionTopLeft.args = {
  defaultValue: "default value",
  label: "some label",
  value: undefined,
  options: [
    { content: "First Section of Content", value: "first" },
    { content: "Second asdfasdfasdfasdfsadf", value: "second" },
    { content: "Third", value: "third", disabled: true },
  ],
  direction: "top-left",
}

export const DirectionTopRight = Template.bind({})
DirectionTopRight.args = {
  defaultValue: "default value",
  label: "some label",
  value: undefined,
  options: [
    { content: "First Section of Content", value: "first" },
    { content: "Second asdfasdfasdfasdfsadf", value: "second" },
    { content: "Third", value: "third", disabled: true },
  ],
  direction: "top-right",
}

export const DirectionBottomLeft = Template.bind({})
DirectionBottomLeft.args = {
  defaultValue: "default value",
  label: "some label",
  value: undefined,
  options: [
    { content: "First Section of Content", value: "first" },
    { content: "Second asdfasdfasdfasdfsadf", value: "second" },
    { content: "Third", value: "third", disabled: true },
  ],
  direction: "bottom-left",
}

export const DirectionBottomRight = Template.bind({})
DirectionBottomRight.args = {
  defaultValue: "default value",
  label: "some label",
  value: undefined,
  options: [
    { content: "First Section of Content", value: "first" },
    { content: "Second asdfasdfasdfasdfsadf", value: "second" },
    { content: "Third", value: "third", disabled: true },
  ],
  direction: "bottom-right",
}
