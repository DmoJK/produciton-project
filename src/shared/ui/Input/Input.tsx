import React, { InputHTMLAttributes, memo, useEffect, useRef } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Input.module.scss"

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholderInline?: boolean
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    placeholderInline = false,
    autofocus = false,
    readonly,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    useEffect(() => {
      if (autofocus) {
        ref.current?.focus()
      }
    }, [autofocus])

    const mods: Mods = {
      [cls.placeholderInline]: placeholderInline,
      [cls.readonly]: readonly
    }
    
    return (
      <div className={classNames(cls.Input, mods, [className])}>
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          readOnly={readonly}
          {...otherProps}
        />
      </div>
    )
  }
)
