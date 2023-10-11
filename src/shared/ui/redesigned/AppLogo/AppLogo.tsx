import { memo } from "react"

import LogoIcon from "@/shared/assets/newIcons/Logo.png"
import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./AppLogo.module.scss"

import { AppImage } from "../../deprecated/AppImage"
import { Skeleton } from "../../deprecated/Skeleton"
import { HStack } from "../../deprecated/Stack"

interface AppLogoProps {
  className?: string
  size?: number
}

export const AppLogo = memo(({ className, size = 80 }: AppLogoProps) => {
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
        width={size}
        height={size}
        className={cls.appLogo}
        alt=""
        fallback={<Skeleton width={80} height={80} />}
      />
    </HStack>
  )
})
