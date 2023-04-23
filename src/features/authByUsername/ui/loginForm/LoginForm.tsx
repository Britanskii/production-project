import s from "./loginForm.module.sass"

import { FC, useCallback } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui"
import { Input } from "shared/ui/input/Input"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../../model/slice/loginSlice"
import { getLoginState } from "entities/user/model/selectors/getLoginState/getLoginState"
import { loginByUsername } from "../../model/services/loginByUsername"
import { Text, TextTheme } from "shared/ui/text/Text"

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
	const { className = "" } = props

	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { username, password, isLoading, error } = useSelector(getLoginState)

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value))
	}, [])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [])

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [username, password])

	return (
		<form className={classNames([s.loginForm, className])}>
			<Text title={t("Форма авторизации")}/>
			{error &&
				<Text theme={TextTheme.ERROR} text={t("Введён неправильный логин или пароль")}/>
			}
			<Input autofocus placeholder={t("Введите username")} type="text" onChange={onChangeUsername} value={username}/>
			<Input placeholder={t("Введите пароль")} type="password" onChange={onChangePassword} value={password}/>
			<Button disabled={isLoading} onClick={onLoginClick} className={s.button} theme={ButtonTheme.OUTLINE}>
				{t("Войти")}
			</Button>
		</form>
	)
}
