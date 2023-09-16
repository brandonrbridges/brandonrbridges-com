'use client'

// React
import { useEffect, useState } from 'react'

// Next Theme
import { useTheme } from 'next-themes'

// Icons
import { IconMoon, IconSun } from '@tabler/icons-react'

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false)

	const { systemTheme, theme, setTheme } = useTheme()

	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleThemeToggle = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<button onClick={handleThemeToggle} aria-label='Theme Toggle'>
			{currentTheme === 'dark' ? <IconMoon /> : <IconSun />}
		</button>
	)
}

export default ThemeToggle
