import { useContext, useState } from 'react'
import React from 'react'

import { changeCss } from '../services/ChangeCss'

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'
export const ThemeContext = React.createContext()
export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState(null)
	const change = name => {
		setTheme(name)
		changeCss(name)
	}
	return (
		<ThemeContext.Provider
			value={{
				theme,
				change
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
