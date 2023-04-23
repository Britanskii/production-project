import s from "./loginForm.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui"
import { Input } from "shared/ui/input/Input"

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
	const { className = "" } = props

	const { t } = useTranslation()

	return (
		<div className={classNames([s.loginForm, className])}>
			<Input autofocus placeholder={t("Введите username")} type="text"/>
			<Input placeholder={t("Введите пароль")} type="password"/>
			<Button className={s.button} theme={ButtonTheme.OUTLINE}>
				{t("Войти")}
			</Button>
		</div>
	)
}
