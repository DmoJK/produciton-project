import { ChangeEvent, memo, useMemo } from "react"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(
  ({ className, label, options, value, onChange, readonly }: SelectProps) => {
    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      ))
    }, [options])
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value)
    }
    const mods: Mods = {}
    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && <span className={readonly ? cls.labelDisabled : cls.label}>{label}</span>}
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
