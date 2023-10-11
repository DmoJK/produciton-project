import { ChangeEvent, useMemo } from "react"

import { typedMemo } from "@/shared/const/typedMemo"
import { classNames, Mods } from "@/shared/lib/classNames/classNames"

import cls from "./Select.module.scss"

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

/**
 * use redesigned ui components
 * @deprecated
 */

export const Select = typedMemo(
  <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  }: SelectProps<T>) => {
    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      ))
    }, [options])
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value as T)
    }
    const mods: Mods = {}
    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && (
          <span className={readonly ? cls.labelDisabled : cls.label}>
            {label}
          </span>
        )}
        <select
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    )
  }
)
