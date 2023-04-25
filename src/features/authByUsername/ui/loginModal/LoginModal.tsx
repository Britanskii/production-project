import s from "./loginModal.module.sass"

import { FC, Suspense } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/modal/Modal"
import { Loader } from "shared/ui"
import { LoginFormAsync } from "../loginForm/LoginForm.async"

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
	const { isOpen, onClose, className = "" } = props

	return (
		<Modal isOpen={isOpen} onClose={onClose} className={classNames([s.loginModal, className])}>
			<Suspense fallback={<Loader/>}>
				<LoginFormAsync/>
			</Suspense>
		</Modal>
	)
}
