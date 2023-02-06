import s from "./sidebar.module.sass"

import { FC, useState } from "react"

import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "widgets/themeSwitcher"
import { LangSwitcher } from "shared/ui"

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
	const { className } = props

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(collapsed => !collapsed)
	}

	return (
		<div className = {classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
			<button type={"button"} onClick={onToggle}>toggle</button>
			<div className={s.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	)
}
