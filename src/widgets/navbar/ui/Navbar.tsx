import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui"
import { useCallback, useState } from "react"
import { LoginModal } from "features/authByUsername"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onOpenModal = () => {
		setIsAuthModal(true)
	}

	const { t } = useTranslation()

	return (
		<div className = {classNames([s.navbar, className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onOpenModal}>
				{t("Войти")}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
		</div>
	)
}
