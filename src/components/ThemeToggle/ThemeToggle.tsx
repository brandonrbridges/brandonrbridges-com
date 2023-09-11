'use client'

// Next Theme
import { useTheme } from 'next-themes'

// Icons
import { IconMoon, IconSun } from '@tabler/icons-react'

const ThemeToggle = () => {
	const { systemTheme, theme, setTheme } = useTheme()

	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleThemeToggle = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button onClick={handleThemeToggle}>
			{currentTheme === 'dark' ? <IconMoon /> : <IconSun />}
		</button>
	)
}

export default ThemeToggle
