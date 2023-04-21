import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/modal/Modal"
import { Button, ButtonTheme } from "shared/ui"
import { useCallback, useState } from "react"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	const { t } = useTranslation()

	return (
		<div className = {classNames([s.navbar, className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onToggleModal}>
				{t("Войти")}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal} >
				{t("Авторизация")}
			</Modal>
		</div>
	)
}
