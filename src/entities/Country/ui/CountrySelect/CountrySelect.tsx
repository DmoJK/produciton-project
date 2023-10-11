import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"
import { ListBox } from "@/shared/ui/deprecated/Popups"

import { Country } from "../../model/types/Country"

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
]

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation("profile")

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country)
      },
      [onChange]
    )

    return (
      <ListBox
        readonly={readonly}
        options={options}
        onChange={onChangeHandler}
        label={t("Укажите страну")}
        defaultValue={t("Валюта")}
        value={value}
        direction="top-right"
        className={classNames("", {}, [className])}
      />
    )
  }
)
