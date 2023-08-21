import { Mods, classNames } from "shared/lib/classNames/classNames"
import { ReactNode } from "react"
import cls from "./Flex.module.scss"

export type FlexJustify = "start" | "center" | "end" | "between"
export type FlexAlign = "start" | "center" | "end"
export type FlexDirection = "row" | "column"
export type FlexGap = "4" | "8" | "16" | "32"

const JustifyClasses: Record<FlexJustify, string> = {
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  start: cls.justifyStart,
  between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  end: cls.alignEnd,
  start: cls.alignStart,
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
}

export interface FlexProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex = ({
  className,
  children,
  justify = "start",
  align = "center",
  direction = "row",
  gap,
  max,
}: FlexProps) => {
  const classes = [
    className,
    JustifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ]
  const mods: Mods = {
    [cls.max]: max,
  }

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}
