import s from "./sidebar.module.sass"

import { FC, useState } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "features/themeSwitcher"
import { AppLink, Button, ButtonTheme, LangSwitcher } from "shared/ui"
import { useTranslation } from "react-i18next"
import { ButtonSize } from "shared/ui/button/Button"
import { AppLinkTheme } from "shared/ui/appLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import AboutIcon from "shared/assets/icons/about.svg"
import MainIcon from "shared/assets/icons/main.svg"

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { className } = props

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(collapsed => !collapsed)
	}

	const { t } = useTranslation()

	return (
		<div
			data-testid={"sidebar"}
			className = {classNames([s.sidebar, className], { [s.collapsed]: collapsed })}>
			<Button
				square={true}
				size={ButtonSize.L}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				className={s.button}
				data-testid={"sidebar-toggle"} type={"button"} onClick={onToggle}>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={s.items}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath.about}>
					<MainIcon className={s.icon}/>
					<span className={s.link}>{t("О сайте")}</span>
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath.main}>
					<AboutIcon className={s.icon}/>
					<span  className={s.link}>{t("Главная")}</span>
				</AppLink>
			</div>
			<div className={s.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</div>
		</div>
	)
}
