import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	return (
		<div className = {classNames([s.navbar, className])}>
			<div className={s.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.link} to={"/"}>
                    Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} className={s.link_main} to={"/about"}>
                    О сайте
				</AppLink>
			</div>
		</div>
	)
}
