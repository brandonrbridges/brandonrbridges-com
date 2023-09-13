// Components
import GitHubRepos from '@/components/GitHubRepos'
import HomepageHeader from '@/components/HomepageHeader'
import ProjectGrid from '@/components/ProjectGrid'
import Reviews from '@/components/Reviews'
import TrustPilotReviewBadge from '@/components/TrustPilotReviewBadge'
import UniqueSellingPoints from '@/components/UniqueSellingPoints'

// Icons
import { IconGridPattern } from '@tabler/icons-react'

export default function Home() {
	return (
		<main>
			<HomepageHeader />

			<div className='container py-20'>
				<div className='mb-8'>
					<h2 className='mb-2 text-4xl font-bold'>Projects</h2>
					<p className='text-lg text-zinc-500 md:w-3/5'>
						Some of the projects I've worked on in the past.
					</p>
				</div>

				<ProjectGrid />
			</div>

			<div className='container py-20'>
				<div className='mb-8'>
					<h3 className='mb-2 text-4xl font-bold'>GitHub</h3>
					<p className='text-lg text-zinc-500 md:w-3/5'>
						What I've been working on.
					</p>
				</div>

				<GitHubRepos />
			</div>

			<div className='py-20 bg-zinc-900 dark:bg-zinc-800'>
				<div className='container'>
					<div className='mb-8'>
						<h3 className='mb-2 text-4xl font-bold text-white'>
							Why work with me?
						</h3>
						<p className='text-lg text-zinc-300 md:w-3/5'>
							I'm passionate about building beautiful, functional websites and
							applications that are fast, accessible, and easy to use.
						</p>
					</div>

					<UniqueSellingPoints />
				</div>
			</div>

			<div className='container py-20'>
				<div className='mb-8'>
					<h3 className='mb-2 text-4xl font-bold'>Experience</h3>
					<p className='text-lg text-zinc-500 md:w-3/5'>
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
									See what my Clients say
								</h3>
								<p className='text-lg text-zinc-500'>
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
