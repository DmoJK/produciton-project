import { memo } from "react"

import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./Icon.module.scss"

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">

interface IconBaseProps extends SvgProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

interface IconUnclickableProps extends IconBaseProps {
  clickable?: false
}

interface IconClickableProps extends IconBaseProps {
  clickable: true
  onClick: () => void
}

type IconProps = IconUnclickableProps | IconClickableProps

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      height={height}
      width={width}
      {...otherProps}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button
        type="button"
        style={{ height, width }}
        className={cls.button}
        onClick={props.onClick}
      >
        {icon}
      </button>
    )
  }

  return icon
})
