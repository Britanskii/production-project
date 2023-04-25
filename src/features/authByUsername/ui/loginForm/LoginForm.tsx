import s from "./loginForm.module.sass"

import { FC, useCallback } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui"
import { Input } from "shared/ui/input/Input"
import { useDispatch, useSelector } from "react-redux"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { loginByUsername } from "../../model/services/loginByUsername"
import { Text, TextTheme } from "shared/ui/text/Text"
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername"
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword"
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading"
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError"
import { ReducersList, useDynamicReducer } from "shared/lib/useDynamicReducer/useDynamicReducer"

interface LoginFormProps {
	className?: string
}

const initialReducers: ReducersList = {
	login: loginReducer
}

const LoginForm: FC<LoginFormProps> = (props) => {
	const { className = "" } = props

	const { t } = useTranslation()
	const dispatch = useDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	useDynamicReducer(initialReducers)

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

export default LoginForm
