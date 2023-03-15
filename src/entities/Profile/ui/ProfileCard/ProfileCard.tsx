import { useTranslation } from "react-i18next"
import { classNames, Mods } from "shared/lib/classNames/classNames"
import { Input } from "shared/ui/Input/Input"
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text"
import { Loader } from "shared/ui/Loader/Loader"
import { Profile } from "entities/Profile"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Currency, CurrencySelect } from "entities/Currency"
import { Country, CountrySelect } from "entities/Country"
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

export const ProfileCard = ({
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
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
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
      </div>
    </div>
  )
}
