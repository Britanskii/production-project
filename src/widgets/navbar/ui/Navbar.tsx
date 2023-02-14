import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	const { t } = useTranslation()

	return (
		<div className = {classNames([s.navbar, className])}>
			<div className={s.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.link} to={"/"}>
					{t("Главная")}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.link_main} to={"/about"}>
					{t("О сайте")}
				</AppLink>
			</div>
		</div>
	)
}
