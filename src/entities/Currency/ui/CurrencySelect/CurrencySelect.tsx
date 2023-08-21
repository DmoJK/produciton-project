import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { ListBox } from "shared/ui/ListBox/ListBox"
import { Currency } from "../../model/types/Currency"

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EUR, content: Currency.EUR },
]

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation("profile")

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency)
      },
      [onChange]
    )

    return (
      <ListBox
        readonly={readonly}
        options={options}
        onChange={onChangeHandler}
        label={t("Укажите валюту")}
        defaultValue={t("Валюта")}
        value={value}
        direction="top"
        className={classNames("", {}, [className])}
      />
    )
  }
)
