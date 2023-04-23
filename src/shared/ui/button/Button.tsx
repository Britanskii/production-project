import s from "./button.module.sass"

import { ButtonHTMLAttributes, FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"

export enum ButtonTheme {
	CLEAR = "clear",
	CLEAR_INVERTED = "clearInverted",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export enum ButtonSize {
	M = "medium",
	L = "large",
	XL = "extraLarge"
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, square, size, disabled = false, ...otherProps } = props

	const mods: Record<string, boolean> = {
		[s.square]: square,
		[s.disabled]: disabled
	}

	return (
		<button
			type={"button"}
			disabled={disabled}
			{...otherProps}
			className={classNames([s.button, s[theme], s[size], className,], mods)}>
			{children}
		</button>
	)
}
