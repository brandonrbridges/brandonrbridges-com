// Types
import type { Project } from '@/types/project.types'

// Next
import Image from 'next/image'
import Link from 'next/link'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

// Packages
import ReactMarkdown from 'react-markdown'

// Icons
import { IconLink } from '@tabler/icons-react'

export default async function Project({
	params,
}: {
	params: {
		slug: string
	}
}) {
	const project = await getProject(params.slug)

	return (
		<div>
			<div className='container relative py-20'>
				<h1 className='mb-2 text-4xl font-bold'>{project.title}</h1>

				{project.description && <p>{project.description}</p>}

				{project.url && (
					<p className='flex items-center mt-2 space-x-2'>
						<IconLink size={20} />
						<Link
							href={project.url}
							target='_blank'
							className='transition-colors hover:text-pink-500'
						>
							{project.url}
						</Link>
					</p>
				)}

				{project.tags.length > 0 && (
					<div className='mt-4 space-x-2'>
						{project.tags.map((tag) => (
							<span
								key={tag}
								className='px-2 py-1 text-sm rounded-full text-zinc-900 dark:text-white md:px-4 bg-zinc-200 dark:bg-zinc-700'
							>
								{tag.replaceAll('_', ' ')}
							</span>
						))}
					</div>
				)}
			</div>

			{project.content && (
				<div className='container mb-20'>
					<ReactMarkdown className='markdown'>{project.content}</ReactMarkdown>
				</div>
			)}

			{project.thumbnailImage && (
				<div className='container'>
					<Image
						src={project.thumbnailImage?.url}
						alt={`${project.title} Thumbnail Image`}
						width={1920}
						height={1080}
						priority
					/>
				</div>
			)}
		</div>
	)
}

const getProject = async (slug: string) => {
	const QUERY = query`
    query GetProject($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
				url
				description
				tags
				thumbnailImage {
					url
				}
				mainImage {
					url
				}
				content
      }
    }
  `

	const variables = {
		slug,
	}

	const data = await hygraph.request(QUERY, variables)

	const { project } = data as { project: Project }

	return project
}
