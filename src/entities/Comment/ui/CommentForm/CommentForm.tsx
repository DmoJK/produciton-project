import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { Button } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { HStack } from "@/shared/ui/Stack"

import cls from "./CommentForm.module.scss"

import {
  useCommentFormText,
  useCommentFormError,
} from "../../model/selectors/commentFormSelectors"
import {
  useCommentFormActions,
  commentFormReducer,
} from "../../model/slice/commentFormSlice"

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
    const text = useCommentFormText()
    const error = useCommentFormError()
    const { setText } = useCommentFormActions()

    const onCommentTextChange = useCallback(
      (value: string) => {
        setText(value)
      },
      [setText]
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
