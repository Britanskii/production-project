import s from "./navbar.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui"
import { useCallback, useState } from "react"
import { LoginModal } from "features/authByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserAuthData, userActions } from "entities/user"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false)

	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onOpenModal = () => {
		setIsAuthModal(true)
	}

	const onLogout = () => {
		dispatch(userActions.logout)
	}

	const { t } = useTranslation()

	if (authData) {
		return (
			<div className = {classNames([s.navbar, className])}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onLogout}>
					{t("Выйти")}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
			</div>
		)
	}

	return (
		<div className = {classNames([s.navbar, className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onOpenModal}>
				{t("Войти")}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
		</div>
	)
}
