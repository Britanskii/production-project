import s from "./button.module.sass"

import { ButtonHTMLAttributes, FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, square, size, ...otherProps } = props

	const mods: Record<string, boolean> = {
		[s.square]: square,
	}

	return (
		<button
			type={"button"}
			{...otherProps}
			className={classNames([s.button, s[theme], s[size], className,], mods)}>
			{children}
		</button>
	)
}
