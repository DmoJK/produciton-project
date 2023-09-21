import { CSSProperties, useMemo } from "react"

import AvatarIcon from "@/shared/assets/icons/avatar.svg"
import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./Avatar.module.scss"

import { AppImage } from "../AppImage"
import { Icon } from "../Icon"
import { Skeleton } from "../Skeleton"

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean
}

export const Avatar = ({ className, src, size, alt, fallbackInverted }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <AppImage
      src={src}
      style={styles}
      alt={alt}
      className={classNames(cls.Avatar, {}, [className])}
      fallback={<Skeleton width={size} height={size} border="50%" />}
      errorFallback={
        <Icon
          inverted={fallbackInverted}
          width={size}
          height={size}
          Svg={AvatarIcon}
        />
      }
    />
  )
}
