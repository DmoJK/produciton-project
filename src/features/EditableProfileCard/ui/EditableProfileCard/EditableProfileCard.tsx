import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { memo, useCallback } from "react"
import { useSelector } from "react-redux"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { ProfileCard } from "entities/Profile"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { VStack } from "shared/ui/Stack"
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly"
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors"
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData"
import { profileActions, profileReducer } from "../../model/slice/profileSlice"
import { ValidateProfileError } from "../../model/types/editableProfileCardSchema"
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader"

interface EditableProfileCardProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation("profile")

  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Неккоректный регион"),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }))
    },
    [dispatch]
  )
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (value?: string) => {
      const validatedValue = value?.replace(/\D+/gm, "")
      dispatch(
        profileActions.updateProfile({ age: Number(validatedValue || 0) })
      )
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames("", {}, [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  )
})
