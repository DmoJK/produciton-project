import { HTMLAttributes, ReactNode, memo } from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Card.module.scss"

export enum CardTheme {
  PRIMARY = "primary",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
  max?: boolean
}

export const Card = memo(
  ({ className, children, theme = CardTheme.PRIMARY, max, ...otherProps }: CardProps) => {
    return (
      <div {...otherProps} className={classNames(cls.Card, {[cls.max]: max}, [className, cls[theme]])}>
        {children}
      </div>
    )
  }
)
