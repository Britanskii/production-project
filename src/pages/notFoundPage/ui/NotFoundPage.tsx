import s from "./notFoundPage.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
	const { className = "" } = props

	const { t } = useTranslation()

	return (
		<div className = {classNames([s.notFoundPage, className])}>
			{t("Страница не найдена")}
		</div>
	)
}
