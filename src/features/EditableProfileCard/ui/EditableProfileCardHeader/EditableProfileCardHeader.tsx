import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { useUserAuthData } from "@/entities/User"
import { classNames } from "@/shared/lib/classNames/classNames"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button"
import { HStack } from "@/shared/ui/deprecated/Stack"
import { Text } from "@/shared/ui/deprecated/Text"

import {
  useProfileData,
  useProfileReadonly,
} from "../../model/selectors/profileSelectors"
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData"
import { useProfileActions } from "../../model/slice/profileSlice"

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { className } = props

    const { t } = useTranslation("profile")
    const { setReadonly, cancelEdit } = useProfileActions()
    const authData = useUserAuthData()
    const profileData = useProfileData()
    const canEdit = authData?.id === profileData?.id
    const readonly = useProfileReadonly()
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
      setReadonly(false)
    }, [setReadonly])

    const onCancelEdit = useCallback(() => {
      cancelEdit()
    }, [cancelEdit])

    const onSave = useCallback(() => {
      dispatch(updateProfileData())
    }, [dispatch])

    return (
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Text title={t("Профиль")} />
        {canEdit && (
          <div>
            {readonly ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t("Редактировать")}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t("Отменить")}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t("Сохранить")}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    )
  }
)
