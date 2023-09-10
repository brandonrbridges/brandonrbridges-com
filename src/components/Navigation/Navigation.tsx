// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import Logo from '@/assets/brand/Logo_Text_Dark.svg'

const Navigation = () => {
	return (
		<div className='py-2'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Link href='/'>
						<Image
							src={Logo}
							alt='brandonrbridges.com logo'
							className='h-10 w-20'
						/>
					</Link>
					<div>
						<button>Let's talk</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
