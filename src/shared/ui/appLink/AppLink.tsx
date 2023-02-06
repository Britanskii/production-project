import s from "./appLink.module.sass"
import { classNames } from "shared/lib/classNames/classNames"
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
	className?: string,
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps } = props

	return (
		<Link
			{...otherProps}
			to={to}
			className={classNames(s.appLink, {}, [className, s[theme]])}
		>
			{children}
		</Link>
	)
}
