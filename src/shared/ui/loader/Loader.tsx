import s from "./loader.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
	const { className = "" } = props

	return (
		<div className={classNames(([s.ldsGrid, className]))}>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
			<div/>
		</div>
	)
}
