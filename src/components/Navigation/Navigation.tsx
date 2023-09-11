// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Logo from '@/assets/brand/Logo_Text_Dark.svg'
import ThemeToggle from '../ThemeToggle'

const Navigation = () => {
	return (
		<div className='py-2'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Link href='/'>
						<Image
							src={Logo}
							alt='brandonrbridges.com logo'
							className='w-20 h-10'
						/>
					</Link>
					<div className='flex items-center space-x-4'>
						<ThemeToggle />
						<button className='button'>Let's talk</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
