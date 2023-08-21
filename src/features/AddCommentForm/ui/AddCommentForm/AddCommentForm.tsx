import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Input } from "shared/ui/Input/Input"
import { Button } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { HStack } from "shared/ui/Stack"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import cls from "./AddCommentForm.module.scss"
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors"
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice"

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value))
      },
      [dispatch]
    )

    const onSendHandler = useCallback(() => {
      onSendComment(text || "")
      onCommentTextChange("")
    }, [onCommentTextChange, onSendComment, text])

    return (
      <DynamicModuleLoader reducers={reducers}>
        <HStack
          justify="between"
          max
          className={classNames(cls.AddCommentForm, {}, [className])}
        >
          <Input
            className={cls.input}
            placeholder={t("Введите текст комментария")}
            placeholderInline
            value={text}
            onChange={onCommentTextChange}
          />
          <Button onClick={onSendHandler}>{t("Отправить")}</Button>
        </HStack>
      </DynamicModuleLoader>
    )
  }
)

export default AddCommentForm
