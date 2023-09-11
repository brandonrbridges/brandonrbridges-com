// Components
import SocialProfiles from '@/components/SocialProfiles'
import Link from 'next/link'

const HomepageHeader = () => {
	return (
		<div className='py-10 md:py-20'>
			<div className='container'>
				<div className='md:w-4/5'>
					<p className='mb-4 text-xl font-semibold md:text-2xl'>
						Hello! I'm Brandon. 👋🏼
					</p>
					<h1 className='text-5xl font-bold md:text-6xl'>
						Building digital products with an emphasis on{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-800'>
							visual design
						</span>
						.
					</h1>

					<p className='my-10 text-lg md:w-3/5'>
						<span className='font-semibold'>
							Asberger's/ASD. Designer. Developer.
						</span>{' '}
						I'm a self-taught designer and developer with a passion for creating
						digital products that are accessible and inclusive.
					</p>

					<SocialProfiles className='my-10' />

					<p>
						Say{' '}
						<Link href='mailto:hello@brandonrbridges.com'>
							<span className='font-semibold text-pink-500'>hello</span>
							@brandonrbridges.com
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomepageHeader
