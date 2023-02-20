import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

	const { t } = useTranslation()

	return (
		<div className = {classNames([s.navbar, className])}>
			<div className={s.links}>

			</div>
		</div>
	)
}
