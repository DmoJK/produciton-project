import { Flex, FlexProps } from "../Flex/Flex"

type HStackProps = Omit<FlexProps, "direction">

/**
 * use redesigned ui components
 * @deprecated
 */

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />
}
