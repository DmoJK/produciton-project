import { Story } from "@storybook/react"
import { Suspense } from "react"

export const SuspenseDecorator = (Story: Story) => {
  return (
    <Suspense>
      <Story />
    </Suspense>
  )
}
