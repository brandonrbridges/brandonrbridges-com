// Next
import Link from 'next/link'

// Icons
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

interface SocialProfilesProps {
	className?: string
}

const SocialProfiles = (props: SocialProfilesProps) => {
	const socialProfiles = [
		{
			name: 'GitHub',
			url: 'https://github.com/brandonrbridges',
			icon: <IconBrandGithub stroke={1.25} />,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/brandonrbridges0/',
			icon: <IconBrandLinkedin stroke={1.25} />,
		},
	]

	return (
		<div className={props.className}>
			<div className='flex items-center space-x-4'>
				{socialProfiles.map((profile) => (
					<Link
						href={profile.url}
						target='_blank'
						rel='noopener noreferrer'
						className='p-2 transition-colors border rounded hover:bg-zinc-900 hover:border-zinc-800 hover:text-yellow-400 group'
					>
						{profile.icon}
					</Link>
				))}
			</div>
		</div>
	)
}

export default SocialProfiles
