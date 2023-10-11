import { ComponentStory, ComponentMeta } from "@storybook/react"

// import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator"
// import { Theme } from "@/shared/const/theme"

import { AppLink } from "./AppLink"

export default {
  title: "shared/redesigned/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Text",
  variant: "primary",
}

export const Red = Template.bind({})
Red.args = {
  children: "Text",
  variant: "red",
}

// export const Inverted = Template.bind({})
// Inverted.args = {
//     children: 'Text',
//     theme: AppLinkTheme.INVERTED
// }

// export const PrimaryDark = Template.bind({})
// PrimaryDark.args = {
//     children: 'Text',
//     theme: AppLinkTheme.PRIMARY
// }
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

// export const InvertedDark = Template.bind({})
// InvertedDark.args = {
//     children: 'Text',
//     theme: AppLinkTheme.INVERTED
// }
// InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
