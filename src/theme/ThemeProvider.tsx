import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const initialTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    const initialProps = useMemo(() => ({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={initialProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
