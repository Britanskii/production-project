import s from "./pageLoader.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { Loader } from "shared/ui"

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
	const { className = "" } = props

	return (
		<div className = {classNames([s.pageLoader, className])}>
			<Loader/>
		</div>
	)
}
