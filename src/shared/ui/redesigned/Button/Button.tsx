import { ButtonHTMLAttributes, memo, ReactNode } from "react"

import { classNames, Mods } from "@/shared/lib/classNames/classNames"

import cls from "./Button.module.scss"

export type ButtonVariant = "clear" | "outline"

export type ButtonSize = "s" | "m" | "l" | "xl"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
  fullWidth?: boolean
}

export const Button = memo(
  ({
    className,
    children,
    variant = "outline",
    square,
    disabled,
    size = "m",
    fullWidth,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
      [cls.fullWidth]: fullWidth,
    }

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, [
          className,
          cls[size],
          cls[variant],
        ])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
)
