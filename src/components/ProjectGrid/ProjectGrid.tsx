// Types
import type { Project } from '@/types/project.types'

// React
import { Suspense } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

const ProjectGrid = async () => {
	const projects = await getProjects()

	const column1 = projects.slice(0, Math.ceil(projects.length / 2))
	const column2 = projects.slice(
		Math.ceil(projects.length / 2),
		projects.length
	)

	const ProjectTag = (props: { text: string }) => {
		const text = props.text.replaceAll('_', ' ')

		return (
			<div className='border border-zinc-300 dark:border-zinc-500 dark:text-zinc-300 text-zinc-600 px-2 py-0.5 rounded-full text-xs whitespace-nowrap'>
				<span>{text}</span>
			</div>
		)
	}

	const Project = (props: Project) => {
		return (
			<Link href={`/projects/${props.slug}`}>
				<div className='group'>
					<p className='mb-1 text-lg font-semibold'>{props.title}</p>
					<p className='mb-4 text-zinc-600 dark:text-zinc-500 md:w-4/5'>
						{props.description}
					</p>
					<div className='flex items-center space-x-2'>
						{props.tags.map((tag, index) => (
							<ProjectTag key={index} text={tag} />
						))}
					</div>

					<div className='relative h-64 mt-6 overflow-hidden transition-transform rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105'>
						{props.mainImage && (
							<Image
								src={props.mainImage.url}
								alt={props.title}
								fill
								className='z-10 object-cover object-top'
							/>
						)}
					</div>
				</div>
			</Link>
		)
	}

	return (
		<Suspense fallback={<p>Loading..</p>}>
			<div>
				<div className='grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2'>
					<div className='flex flex-col gap-8'>
						{column1.map((project) => (
							<Project key={project.slug} {...project} />
						))}
					</div>
					<div className='flex flex-col gap-8'>
						{column2.map((project) => (
							<Project key={project.slug} {...project} />
						))}
					</div>
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
				mainImage {
					url
				}
			}
		}
	`

	const data = await hygraph.request(QUERY)

	const { projects } = data as { projects: Project[] }

	return projects
}

export default ProjectGrid
