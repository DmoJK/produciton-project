import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Flex } from "./Flex"

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const justifyCenter = Template.bind({})
justifyCenter.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  justify: "center",
}
export const justifyStart = Template.bind({})
justifyStart.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  justify: "start",
}
export const justifyEnd = Template.bind({})
justifyEnd.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  justify: "end",
}
export const justifyBetween = Template.bind({})
justifyBetween.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  justify: "between",
}
export const alignCenter = Template.bind({})
alignCenter.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  align: "center",
}
export const alignStart = Template.bind({})
alignStart.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  align: "start",
}
export const alignEnd = Template.bind({})
alignEnd.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  align: "end",
}
export const directionRow = Template.bind({})
directionRow.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  direction: "row",
}
export const directionColumn = Template.bind({})
directionColumn.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  direction: "column",
}
export const gap4 = Template.bind({})
gap4.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  gap: "4",
}
export const gap8 = Template.bind({})
gap8.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  gap: "8",
}
export const gap16 = Template.bind({})
gap16.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  gap: "16",
}
export const gap32 = Template.bind({})
gap32.args = {
  children: (
    <>
      <div>Some div</div>
      <div>Some div</div>
      <div>Some div</div>
    </>
  ),
  gap: "32",
}
