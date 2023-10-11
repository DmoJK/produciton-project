import { memo } from "react"

import LogoIcon from "@/shared/assets/newIcons/Logo.png"
import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./AppLogo.module.scss"

import { AppImage } from "../AppImage"
import { Skeleton } from "../Skeleton"
import { HStack } from "../Stack"

interface AppLogoProps {
  className?: string
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.AppLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppImage
        src={LogoIcon}
        width={80}
        height={80}
        className={cls.appLogo}
        alt=""
        fallback={<Skeleton width={80} height={80} />}
      />
    </HStack>
  )
})
