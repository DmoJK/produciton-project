import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { HStack } from "@/shared/ui/Stack"

import cls from "./CommentForm.module.scss"

import { getCommentFormError, getCommentFormText } from "../../model/selectors/commentFormSelectors"
import { commentFormActions, commentFormReducer } from "../../model/slice/commentFormSlice"

export interface CommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  commentForm: commentFormReducer,
}

export const CommentForm = memo(
  ({ className, onSendComment }: CommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getCommentFormText)
    const error = useSelector(getCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(commentFormActions.setText(value))
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
          className={classNames(cls.CommentForm, {}, [className])}
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
