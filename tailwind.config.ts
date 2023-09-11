import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				trustpilot: '#63d793',
			},
		},
	},
	plugins: [],
	important: true,
}
export default config
