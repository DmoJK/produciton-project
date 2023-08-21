import { memo } from "react"
import { useTranslation } from "react-i18next"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import { Input } from "shared/ui/Input/Input"
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { Loader } from "shared/ui/Loader/Loader"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Currency, CurrencySelect } from "entities/Currency"
import { Country, CountrySelect } from "entities/Country"
import { HStack, VStack } from "shared/ui/Stack"
import { Profile } from "../../model/types/ProfileSchema"
import cls from "./ProfileCard.module.scss"

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency?: Currency) => void
  onChangeCountry?: (country?: Country) => void
}

export const ProfileCard = memo(
  ({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  }: ProfileCardProps) => {
    const { t } = useTranslation("profile")

    if (isLoading) {
      return (
        <HStack
          max
          justify="center"
          className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
        >
          <Loader />
        </HStack>
      )
    }

    if (error) {
      return (
        <HStack
          max
          justify="center"
          className={classNames(cls.ProfileCard, {}, [className, cls.error])}
        >
          <Text
            theme={TextTheme.ERROR}
            title={t("Произошла ошибка при загрузке профиля")}
            text={t("Попробуйте обновить страницу")}
            align={TextAlign.CENTER}
          />
        </HStack>
      )
    }

    const mods: Mods = {
      [cls.editing]: !readonly,
    }

    return (
      <VStack
        max
        gap="8"
        className={classNames(cls.ProfileCard, mods, [className])}
      >
        {data?.avatar && (
          <HStack justify="center" max className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </HStack>
        )}
        <Input
          placeholder={t("Ваше имя")}
          value={data?.first}
          className={cls.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          placeholder={t("Ваша фамилия")}
          value={data?.lastname}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          placeholder={t("Ваш возраст")}
          // @ts-ignore strange ts error
          value={data?.age}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          placeholder={t("Имя пользователя")}
          value={data?.username}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          placeholder={t("Ваш город")}
          value={data?.city}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          placeholder={t("Ссылка на аватар")}
          value={data?.avatar}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    )
  }
)
