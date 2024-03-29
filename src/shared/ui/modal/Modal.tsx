import s from "./modal.module.sass"

import { FC, ReactNode, MouseEvent, useState, useRef, useEffect } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { Portal } from "shared/ui/portal/Portal"

interface ModalProps {
    className?: string
    children: ReactNode
	isOpen: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const { children, isOpen, onClose, lazy = true, className = "" } = props

	const [isMounted, setIsMounted] = useState(false)
	const [isClosing, setIsClosing] = useState(false)

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
			setIsMounted(true)
			window.addEventListener("keydown", onKeyDown)
		}

		return () => {
			clearTimeout(timeRef.current)
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [isOpen])

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal>
			<div className = {classNames([s.modal, className], mods)}>
				<div className={s.overlay} onClick={closeHandler}>
					<div className={s.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
