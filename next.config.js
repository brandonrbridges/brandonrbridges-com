/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['media.graphassets.com', 'user-images.trustpilot.com'],
	},
	experimental: {
		esmExternals: 'loose',
	},
}

module.exports = nextConfig
