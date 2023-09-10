// Components
import HomepageHeader from '@/components/HomepageHeader'
import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
	return (
		<main>
			<HomepageHeader />

			<div className='container py-20'>
				<div className='mb-8'>
					<h2 className='font-bold text-4xl'>My Projects</h2>
				</div>

				<ProjectGrid />
			</div>
		</main>
	)
}
