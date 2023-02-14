import { Story } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

export const RouteDecorator = (Story: Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}
