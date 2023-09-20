import { memo, useCallback } from "react"

import { useTranslation } from "react-i18next"

import { classNames } from "@/shared/lib/classNames/classNames"
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { Button, ButtonTheme } from "@/shared/ui/Button"
import { Input } from "@/shared/ui/Input"
import { Text, TextTheme } from "@/shared/ui/Text"

import cls from "./LoginForm.module.scss"

import {
  useLoginUsername,
  useLoginPassword,
  useLoginIsLoading,
  useLoginError,
} from "../../model/selectors/loginSelectors"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"
import { loginReducer, useLoginActions } from "../../model/slice/loginSlice"

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { setPassword, setUsername } = useLoginActions()
  const username = useLoginUsername()
  const password = useLoginPassword()
  const isLoading = useLoginIsLoading()
  const error = useLoginError()

  const onChangeUsername = useCallback(
    (value: string) => {
      setUsername(value)
    },
    [setUsername]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      setPassword(value)
    },
    [setPassword]
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess()
    }
  }, [onSuccess, dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text
            text={t("Вы ввели неверный логин или пароль")}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          className={cls.input}
          placeholder={t("Имя пользователя")}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          className={cls.input}
          placeholder={t("Пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
