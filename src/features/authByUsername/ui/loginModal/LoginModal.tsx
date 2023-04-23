import s from "./loginModal.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/modal/Modal"
import { LoginForm } from "features/authByUsername/ui/loginForm/LoginForm"

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { isOpen, onClose, className = "" } = props

	return (
		<Modal isOpen={isOpen} onClose={onClose} className={classNames([s.loginModal, className])}>
			<LoginForm/>
		</Modal>
	)
}
