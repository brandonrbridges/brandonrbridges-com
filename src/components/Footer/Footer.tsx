// Types
import type { Project } from '@/types/project.types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

// Assets
import Logo from '@/assets/brand/Logo_Square_Rounded.svg'

// Icons
import {
	IconBrandNextjs,
	IconBrandReact,
	IconBrandVercel,
	IconCode,
	IconCoffee,
	IconHeart,
	IconMail,
	IconMapPin,
} from '@tabler/icons-react'

const Footer = async () => {
	const projects = await getProjects()

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
			<div className='py-20 bg-zinc-900'>
				<div className='container'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
						<div className='flex flex-col justify-center'>
							<h2 className='mb-2 text-4xl font-semibold text-white'>
								Let's work together.
							</h2>
							<p className='text-zinc-400'>
								Simply enter your email. I'll do the rest.
							</p>
						</div>
						<div className='flex flex-col justify-center'>
							<form className='flex p-1.5 pl-4 bg-white rounded'>
								<input
									type='text'
									placeholder='Enter your email address'
									className='w-full bg-transparent focus:outline-none'
								/>

								<button
									type='submit'
									className='px-4 py-1 text-white rounded bg-zinc-900 shrink-0'
								>
									Let's begin
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='container py-20'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div>
						<Link href='/'>
							<Image
								src={Logo}
								alt='brandonrbridges.com logo'
								className='w-20 h-20'
							/>
						</Link>

						<div className='my-4 space-y-2'>
							<p className='flex items-center text-sm'>
								<IconCode stroke={1.25} className='mr-2' />
								Designed and developed by Brandon Bridges.
							</p>
							<p className='flex items-center text-sm'>
								<IconMapPin stroke={1.25} className='mr-2' />
								Based in Loughborough, United Kingdom.
							</p>
							<p className='flex items-center text-sm'>
								<IconMail stroke={1.25} className='mr-2' />
								<Link
									href='mailto:hello@brandonrbridges.com'
									className='transition-colors hover:text-pink-500'
								>
									hello@brandonrbridges.com
								</Link>
							</p>
						</div>
						<p className='text-xs text-zinc-500'>
							&copy; {new Date().getFullYear()} All rights reserved.
						</p>
					</div>
					<div>
						<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
							<div>
								<p className='mb-2 font-medium'>General</p>
								<ul>
									{generalLinks.map((link, index) => (
										<li key={index}>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<p className='mb-2 font-medium'>Projects</p>
								<ul>
									{projects.map((project, index) => (
										<li key={index}>
											<Link href={`/projects/${project.slug}`}>
												{project.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='py-4 text-zinc-500'>
				<div className='container flex items-center justify-center space-x-4 text-sm'>
					<p className='flex items-center space-x-1'>
						<IconBrandNextjs stroke={1.25} />
						<span>Built with Next.</span>
					</p>
					<p className='flex items-center space-x-1'>
						<IconBrandVercel stroke={1.25} />
						<span>Deployed with Vercel.</span>
					</p>
					<p className='flex items-center space-x-1'>
						<IconCoffee stroke={1.25} />
						<span>Fuelled by coffee.</span>
					</p>
				</div>
			</div>
		</div>
	)
}

const getProjects = async () => {
	const QUERY = query`
		query GetProjects {
			projects {
				title
				slug
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { projects } = data as { projects: Project[] }

	return projects
}

export default Footer
