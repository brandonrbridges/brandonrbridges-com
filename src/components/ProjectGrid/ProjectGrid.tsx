// Next
import Link from 'next/link'

type ProjectTagProps = {
	text: string
}

const ProjectGrid = () => {
	const ProjectTag = (props: ProjectTagProps) => {
		return (
			<div className='border border-zinc-300 text-zinc-600 px-4 py-0.5 rounded-full text-sm'>
				<span>{props.text}</span>
			</div>
		)
	}

	const Project = () => {
		return (
			<Link href='/'>
				<div className='group'>
					<h6 className='font-semibold text-lg mb-1'>Project Title</h6>
					<p className='text-zinc-600 mb-4 md:w-4/5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
						dolor obcaecati, vel ratione aliquid beatae inventore ab eaque iste.
					</p>
					<div className='flex items-center space-x-4'>
						<ProjectTag text='React' />
						<ProjectTag text='React' />
						<ProjectTag text='React' />
					</div>

					<div className='h-64 bg-zinc-100 rounded-lg mt-6 transition-transform group-hover:scale-105'></div>
				</div>
			</Link>
		)
	}

	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	)
}

export default ProjectGrid
