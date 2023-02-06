import s from "./button.module.sass"

import { ButtonHTMLAttributes, FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"

export enum ThemeButton {
    CLEAR = "clear"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props

	return (
		<button
			type={"button"}
			{...otherProps}
			className = {classNames([s.button, className, s[theme]])}>
			{children}
		</button>
	)
}
