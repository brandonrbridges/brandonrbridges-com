// Types
import type { Project } from '@/types/project.types'

// React
import { Suspense } from 'react'

// Next
import Link from 'next/link'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

const ProjectGrid = async () => {
	const projects = await getProjects()

	const ProjectTag = (props: { text: string }) => {
		const text = props.text.replaceAll('_', ' ')

		return (
			<div className='border border-zinc-300 text-zinc-600 px-4 py-0.5 rounded-full text-sm'>
				<span>{text}</span>
			</div>
		)
	}

	const Project = (props: Project) => {
		return (
			<Link href='/'>
				<div className='group'>
					<h6 className='font-semibold text-lg mb-1'>{props.title}</h6>
					<p className='text-zinc-600 mb-4 md:w-4/5'>{props.description}</p>
					<div className='flex items-center space-x-4'>
						{props.tags.map((tag) => (
							<ProjectTag text={tag} />
						))}
					</div>

					<div className='h-64 bg-zinc-100 rounded-lg mt-6 transition-transform group-hover:scale-105'></div>
				</div>
			</Link>
		)
	}

	return (
		<Suspense fallback={<p>Loading..</p>}>
			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{projects.map((project) => (
						<Project {...project} />
					))}
				</div>
			</div>
		</Suspense>
	)
}

const getProjects = async () => {
	const QUERY = query`
		query GetProjects {
			projects {
				title
				slug
				description
				tags
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { projects } = data as { projects: Project[] }

	return projects
}

export default ProjectGrid
