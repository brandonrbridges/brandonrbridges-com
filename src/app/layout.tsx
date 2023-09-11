// Types
import type { Metadata } from 'next'

// Fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Vercel
import { Analytics } from '@vercel/analytics/react'

// Styles
import '@/styles/main.scss'

// Components
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

// Providers
import Providers from './providers'
import Head from 'next/head'

export const metadata: Metadata = {
	title: "Brandon Bridges' Portfolio",
	description: 'Full Stack Developer based in the United Kingdom.',
	openGraph: {
		title: "Brandon Bridges' Portfolio",
		description: 'Full Stack Developer based in the United Kingdom.',
		url: 'https://brandonrbridges.com',
		siteName: "Brandon Bridges' Portfolio",
		images: [
			{
				url: 'https://brandonrbridges.com/og_800x600.png',
				width: 800,
				height: 600,
				alt: "Brandon Bridges' Portfolio - 800x600",
			},
			{
				url: 'https://brandonrbridges.com/og_1800x1600.png',
				width: 1800,
				height: 1600,
				alt: "Brandon Bridges' Portfolio - 1800x1600",
			},
		],
		type: 'website',
		locale: 'en_GB',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.svg' sizes='any' />

				<meta property='og:title' content='iPhone' />
				<meta property='og:image' content='/og_1800x1600.png' />
			</Head>

			<body className={inter.className}>
				<Providers>
					<Navigation />
					{children}
					<Footer />
					<Analytics />
				</Providers>
			</body>
		</html>
	)
}
