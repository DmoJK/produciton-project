import { memo } from "react"

import LogoIcon from "@/shared/assets/icons/logo.svg"
import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./AppLogo.module.scss"

import { HStack } from "../Stack"
// import { Icon } from "../Icon"

interface AppLogoProps {
  className?: string
}

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <LogoIcon className={cls.appLogo} />
      {/* <Icon /> */}
    </HStack>
  )
})
