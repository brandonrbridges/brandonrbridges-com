'use client'

// React
import { useEffect, useState } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import LogoLight from '@/assets/brand/Logo_Text_Light.svg'
import LogoDark from '@/assets/brand/Logo_Text_Dark.svg'

// Packages
import { useTheme } from 'next-themes'

const Logo = () => {
	const [mounted, setMounted] = useState(false)

	const { theme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	if (theme === 'light') {
		return (
			<Link href='/'>
				<Image
					src={LogoDark}
					alt='brandonrbridges.com logo'
					className='w-20 h-10'
				/>
			</Link>
		)
	}

	if (theme === 'dark') {
		return (
			<Link href='/'>
				<Image
					src={LogoLight}
					alt='brandonrbridges.com logo'
					className='w-20 h-10'
				/>
			</Link>
		)
	}
}

export default Logo
