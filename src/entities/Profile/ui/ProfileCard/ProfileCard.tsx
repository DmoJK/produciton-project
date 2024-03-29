import { memo } from "react"

import { useTranslation } from "react-i18next"

import { Country, CountrySelect } from "@/entities/Country"
import { Currency, CurrencySelect } from "@/entities/Currency"
import { classNames, Mods } from "@/shared/lib/classNames/classNames"
import { Avatar } from "@/shared/ui/deprecated/Avatar"
import { Input } from "@/shared/ui/deprecated/Input"
import { Loader } from "@/shared/ui/deprecated/Loader"
import { HStack, VStack } from "@/shared/ui/deprecated/Stack"
import { Text, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text"

import cls from "./ProfileCard.module.scss"

import { Profile } from "../../model/types/Profile"

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
          data-testid="ProfileCard.Firstname"
        />
        <Input
          placeholder={t("Ваша фамилия")}
          value={data?.lastname}
          className={cls.input}
          onChange={onChangeLastname}
          readonly={readonly}
          data-testid="ProfileCard.Lastname"
        />
        <Input
          placeholder={t("Ваш возраст")}
          // @ts-ignore strange ts error
          value={data?.age}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
          data-testid="ProfileCard.Age"
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
