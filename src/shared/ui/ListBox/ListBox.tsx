import { Fragment, ReactNode, memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Listbox as HListbox } from "@headlessui/react"
import SelectSvg from "shared/assets/icons/done.svg"
import { HStack } from "../Stack"
import cls from "./ListBox.module.scss"
import { Icon } from "../Icon/Icon"
import { Button } from "../Button/Button"
import { DropdownDirection } from "../../types/ui"

interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  options: ListBoxItem[]
  value?: string
  defaultValue: string
  onChange: (value: string) => void
  label?: string
  readonly?: boolean
  direction?: DropdownDirection
}

export const ListBox = memo(
  ({
    className,
    label,
    options,
    onChange,
    defaultValue,
    value,
    readonly,
    direction = "bottom-right",
  }: ListBoxProps) => {
    const optionClasses = [
      cls[direction]
    ]

    return (
      <HStack gap="4">
        {label && <span>{label}</span>}
        <HListbox
          as="div"
          className={classNames(cls.ListBox, {}, [className])}
          value={value}
          onChange={onChange}
          disabled={readonly}
        >
          <HListbox.Button disabled={readonly} className={cls.trigger}>
            <Button disabled={readonly}>{value ?? defaultValue}</Button>
          </HListbox.Button>
          <HListbox.Options className={classNames(cls.options, {}, optionClasses)}>
            {options?.map((option) => (
              <HListbox.Option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                as={Fragment}
              >
                {({ active, selected }) => (
                  <li
                    className={classNames(
                      cls.option,
                      { [cls.active]: active, [cls.disabled]: option.disabled },
                      []
                    )}
                  >
                    {selected && <Icon Svg={SelectSvg} />}
                    {option.content}
                  </li>
                )}
              </HListbox.Option>
            ))}
          </HListbox.Options>
        </HListbox>
      </HStack>
    )
  }
)
