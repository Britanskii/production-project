import s from "./themeSwitcher.module.sass"

import { FC } from "react"

import { classNames } from "shared/lib"
import { Theme, useTheme } from "shared/context"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import LightIcon from "shared/assets/icons/theme-light.svg"
import { Button, ButtonTheme } from "shared/ui"

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button theme={ButtonTheme.CLEAR} onClick={toggleTheme} className = {classNames([s.themeSwitcher, className])}>
			{theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
		</Button>
	)
}

