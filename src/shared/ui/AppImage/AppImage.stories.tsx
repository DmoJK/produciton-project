import { ComponentStory, ComponentMeta } from "@storybook/react"

import {AppImage} from "./AppImage"

export default {
  title: "page/AppImage",
  component: AppImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  errorFallback: <h2>no image</h2>
}
