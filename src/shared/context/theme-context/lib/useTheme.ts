import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../ui/ThemeContext"
import { useContext, useEffect } from "react"

interface UseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	useEffect(() => {
		document.body.className = theme
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		document.body.className = newTheme
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, toggleTheme }
}

