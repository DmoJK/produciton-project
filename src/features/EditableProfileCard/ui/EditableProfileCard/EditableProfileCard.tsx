import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { ProfileCard } from "@/entities/Profile"
import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { VStack } from "@/shared/ui/deprecated/Stack"
import { Text, TextTheme } from "@/shared/ui/deprecated/Text"

import { ValidateProfileError } from "../../model/consts/ValidateProfileError"
import {
  useProfileError,
  useProfileForm,
  useProfileIsLoading,
  useProfileReadonly,
  useProfileValidateErrors,
} from "../../model/selectors/profileSelectors"
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData"
import {
  profileReducer,
  useProfileActions,
} from "../../model/slice/profileSlice"
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader"

interface EditableProfileCardProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
}

export const EditableProfileCard = memo(
  ({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation("profile")

    const dispatch = useAppDispatch()
    const { updateProfile } = useProfileActions()
    const formData = useProfileForm()
    const isLoading = useProfileIsLoading()
    const error = useProfileError()
    const readonly = useProfileReadonly()
    const validateErrors = useProfileValidateErrors()

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
      [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        "Имя и фамилия обязательны"
      ),
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
        updateProfile({ first: value || "" })
      },
      [updateProfile]
    )
    const onChangeLastname = useCallback(
      (value?: string) => {
        updateProfile({ lastname: value || "" })
      },
      [updateProfile]
    )
    const onChangeCity = useCallback(
      (value?: string) => {
        updateProfile({ city: value || "" })
      },
      [updateProfile]
    )
    const onChangeUsername = useCallback(
      (value?: string) => {
        updateProfile({ username: value || "" })
      },
      [updateProfile]
    )
    const onChangeAvatar = useCallback(
      (value?: string) => {
        updateProfile({ avatar: value || "" })
      },
      [updateProfile]
    )
    const onChangeCurrency = useCallback(
      (currency?: Currency) => {
        updateProfile({ currency })
      },
      [updateProfile]
    )
    const onChangeCountry = useCallback(
      (country?: Country) => {
        updateProfile({ country })
      },
      [updateProfile]
    )
    const onChangeAge = useCallback(
      (value?: string) => {
        const validatedValue = value?.replace(/\D+/gm, "")

        updateProfile({ age: Number(validatedValue || 0) })
      },
      [updateProfile]
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
                data-testid="EditableProfileCard.Error"
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
  }
)
