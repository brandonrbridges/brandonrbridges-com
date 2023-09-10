// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Logo from '@/assets/brand/Logo_Square.svg'
import { IconCode, IconMapPin } from '@tabler/icons-react'

const Footer = () => {
	const generalLinks = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: '/about',
		},
		{
			name: 'Contact',
			href: '/contact',
		},
		{
			name: 'Blog',
			href: '/blog',
		},
	]

	return (
		<div>
			<div className='bg-zinc-900 py-20'>
				<div className='container'>
					<h2 className='font-semibold text-white text-4xl'>
						Let's work together.
					</h2>
				</div>
			</div>
			<div className='container py-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='space-y-4'>
						<Image
							src={Logo}
							alt='brandonrbridges.com logo'
							className='h-20 w-20'
						/>

						<p className='text-sm flex items-center'>
							<IconCode stroke={1.25} className='mr-2' />
							Designed and developed by Brandon Bridges.
						</p>
						<p className='text-sm flex items-center'>
							<IconMapPin stroke={1.25} className='mr-2' />
							Based in Loughborough, United Kingdom.
						</p>
						<p className='text-xs text-zinc-500'>
							&copy; {new Date().getFullYear()} All rights reserved.
						</p>
					</div>
					<div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							<div>
								<h5 className='mb-2'>General</h5>
								<ul>
									{generalLinks.map((link, index) => (
										<li key={index}>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h5 className='mb-2'>Projects</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
