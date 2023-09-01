import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Button } from "../../../Button/Button"
import { Text } from "../../../Text/Text"
import { Popover } from "./Popover"

export default {
  title: "shared/popups/Popover",
  component: Popover,
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
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div>
      <Text text="Hello i am text 1" />
      <Text text="Hello i am text 2" />
      <Text text="Hello i am text 3" />
    </div>
  ),
  trigger: <Button>Click me</Button>,
}

export const DirectionTopLeft = Template.bind({})
DirectionTopLeft.args = {
  trigger: <Button>Click me</Button>,
  children: (
    <div>
      <Text text="Hello i am text 1" />
      <Text text="Hello i am text 2" />
      <Text text="Hello i am text 3" />
    </div>
  ),
  direction: "top-left",
}

export const DirectionTopRight = Template.bind({})
DirectionTopRight.args = {
  trigger: <Button>Click me</Button>,
  children: (
    <div>
      <Text text="Hello i am text 1" />
      <Text text="Hello i am text 2" />
      <Text text="Hello i am text 3" />
    </div>
  ),
  direction: "top-right",
}

export const DirectionBottomLeft = Template.bind({})
DirectionBottomLeft.args = {
  trigger: <Button>Click me</Button>,
  children: (
    <div>
      <Text text="Hello i am text 1" />
      <Text text="Hello i am text 2" />
      <Text text="Hello i am text 3" />
    </div>
  ),
  direction: "bottom-left",
}

export const DirectionBottomRight = Template.bind({})
DirectionBottomRight.args = {
  trigger: <Button>Click me</Button>,
  children: (
    <div>
      <Text text="Hello i am text 1" />
      <Text text="Hello i am text 2" />
      <Text text="Hello i am text 3" />
    </div>
  ),
  direction: "bottom-right",
}
