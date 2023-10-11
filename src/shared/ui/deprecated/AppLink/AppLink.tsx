import { memo, ReactNode } from "react"

import { Link, LinkProps } from "react-router-dom"

import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./AppLink.module.scss"

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const AppLink = memo(
  ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  }: AppLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    )
  }
)
