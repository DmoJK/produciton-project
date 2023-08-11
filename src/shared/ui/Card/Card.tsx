import { HTMLAttributes, ReactNode, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Card.module.scss"

export enum CardTheme {
  PRIMARY = "primary",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card = memo(
  ({ className, children, theme = CardTheme.PRIMARY, ...otherProps }: CardProps) => {
    return (
      <div {...otherProps} className={classNames(cls.Card, {}, [className, cls[theme]])}>
        {children}
      </div>
    )
  }
)
