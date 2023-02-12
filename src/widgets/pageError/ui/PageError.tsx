import s from "./pageError.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui"

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
	const { className = "" } = props

	const { t } = useTranslation()

	const onReload = () => {
		window.location.reload()
	}

	return (
		<div className = {classNames([s.pageError, className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button onClick={onReload}>
				{t("Обновить страницу")}
			</Button>
		</div>
	)
}
