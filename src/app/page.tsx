// Components
import HomepageHeader from '@/components/HomepageHeader'
import ProjectGrid from '@/components/ProjectGrid'
import Reviews from '@/components/Reviews'
import TrustPilotReviewBadge from '@/components/TrustPilotReviewBadge'
import { IconGridPattern, IconStarFilled } from '@tabler/icons-react'

export default function Home() {
	return (
		<main>
			<HomepageHeader />

			<div className='container py-20'>
				<div className='mb-8'>
					<h2 className='mb-2 text-4xl font-bold'>Projects</h2>
					<p className='text-lg text-zinc-400 md:w-3/5'>
						Some of the projects I've worked on in the past.
					</p>
				</div>

				<ProjectGrid />
			</div>

			<div className='py-20 bg-zinc-900 dark:bg-zinc-800'>
				<div className='container'>
					<div className='mb-8'>
						<h3 className='mb-2 text-4xl font-bold text-white'>
							Why work with me?
						</h3>
						<p className='text-lg text-zinc-400 md:w-3/5'>
							I'm passionate about building beautiful, functional websites and
							applications that are fast, accessible, and easy to use.
						</p>
					</div>

					<div className='grid grid-cols-2 gap-8 md:grid-cols-3'>
						<div className='p-4 border rounded-lg border-zinc-700 text-zinc-100'>
							<div className='flex items-center'>
								<IconGridPattern stroke={1.25} className='mr-2' />
								<p>Title</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container py-20'>
				<div className='mb-8'>
					<h3 className='mb-2 text-4xl font-bold'>Experience</h3>
					<p className='text-lg'>
						Where I gained my skills and how I can help you.
					</p>
				</div>
			</div>

			<div className='py-20 bg-zinc-100 dark:bg-zinc-800'>
				<div className='container'>
					<div className='mb-8'>
						<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
							<div>
								<h3 className='mb-2 text-4xl font-bold'>
									Don't just take it from me, though
								</h3>
								<p className='text-lg'>
									Here's what some of my past clients have to say about working
									with me.
								</p>
							</div>
							<div className='flex items-center justify-end'>
								<TrustPilotReviewBadge />
							</div>
						</div>
					</div>

					<Reviews />
				</div>
			</div>
		</main>
	)
}
