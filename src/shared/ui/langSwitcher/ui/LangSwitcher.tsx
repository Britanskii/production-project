import s from "./langSwitcher.module.sass"

import { FC } from "react"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "shared/ui"
import { classNames } from "shared/lib"

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
	const { className } = props

	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
	}

	return (
		<Button className={classNames(s.langSwitcher)}
			theme={ThemeButton.CLEAR}
			onClick={toggle}>
			{t("Язык")}
		</Button>
	)
}
