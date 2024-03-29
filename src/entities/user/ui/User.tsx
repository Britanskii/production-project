import s from "./user.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"

interface UserProps {
	className?: string
}

export const User: FC<UserProps> = (props) => {
	const { className = "" } = props

	return (
		<div className={classNames([s.user, className])}>

		</div>
	)
}
