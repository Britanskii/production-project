import { createContext, FC, useMemo, useState } from "react"

export enum Theme {
	LIGHT= "light",
	DARK = "dark"
}

export interface ThemeContextProps {
	theme?: Theme,
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(initialTheme)

	const initialProps = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={initialProps}>
			{children}
		</ThemeContext.Provider>
	)
}


