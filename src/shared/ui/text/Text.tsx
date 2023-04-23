import s from "./text.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { ValueOf } from "shared/lib"

export const TextTheme = {
	PRIMARY: "primary",
	ERROR: "error"
} as const
export type TextTheme = ValueOf<typeof TextTheme>

interface TextProps {
	theme?: TextTheme
	className?: string
	title?: string
	text?: string
}

export const Text: FC<TextProps> = (props) => {
	const { title, text, theme = TextTheme.PRIMARY, className = "" } = props

	return (
		<div className={classNames([s.textWrapper, s[theme], className])}>
			{title && <p className={s.title}>{title}</p>}
			{text && <p className={s.text}>{text}</p>}
		</div>
	)
}
