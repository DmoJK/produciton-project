import { Fragment, ReactNode, memo } from "react"
import { Listbox as HListbox } from "@headlessui/react"
import { classNames } from "@/shared/lib/classNames/classNames"
import SelectSvg from "@/shared/assets/icons/done.svg"
import { HStack } from "../../../Stack"
import { Icon } from "../../../Icon/Icon"
import { Button } from "../../../Button/Button"
import { DropdownDirection } from "../../../../types/ui"
import cls from "./ListBox.module.scss"
import popupStyle from "../../styles/Popups.module.scss"
import { mapDirectionClass } from "../../styles/mapClasses"

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
    const optionClasses = [mapDirectionClass[direction]]

    return (
      <HStack gap="4">
        {label && <span>{label}</span>}
        <HListbox
          as="div"
          className={classNames('', {}, [className, popupStyle.Popup])}
          value={value}
          onChange={onChange}
          disabled={readonly}
        >
          <HListbox.Button as="div" className={popupStyle.trigger}>
            <Button disabled={readonly}>{value ?? defaultValue}</Button>
          </HListbox.Button>
          <HListbox.Options
            className={classNames(cls.options, {}, optionClasses)}
          >
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
                      {
                        [popupStyle.active]: active,
                        [popupStyle.disabled]: option.disabled,
                      },
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
