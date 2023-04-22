import s from "./modal.module.sass"

import { FC, ReactNode, MouseEvent, useState, useRef, useEffect } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { Portal } from "shared/ui/portal/Portal"
import { useTheme } from "shared/context"

interface ModalProps {
    className?: string
    children: ReactNode
	isOpen: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const { children, isOpen, onClose, className = "" } = props

	const [isClosing, setIsClosing] = useState(false)

	const { theme } = useTheme()

	const timeRef = useRef<ReturnType<typeof setTimeout>>()

	const mods: Record<string, boolean> = {
		[s.opened]: isOpen,
		[s.isClosing]: isClosing
	}

	const closeHandler = () => {
		if (onClose) {
			setIsClosing(true)
			timeRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}

	const onContentClick = (event: MouseEvent) => {
		event.stopPropagation()
	}

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			closeHandler()
		}
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown)
		}

		return () => {
			clearTimeout(timeRef.current)
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [])

	return (
		<Portal>
			<div className = {classNames([s.modal, theme, className], mods)}>
				<div className={s.overlay} onClick={closeHandler}>
					<div className={s.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
