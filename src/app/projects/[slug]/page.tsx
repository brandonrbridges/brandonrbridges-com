// Types
import type { Project } from '@/types/project.types'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

export default async function Project({
	params,
}: {
	params: {
		slug: string
	}
}) {
	const project = await getProject(params.slug)

	console.log({ project })

	return (
		<div>
			<div className='container'>
				<code>
					<pre>{JSON.stringify(project, null, 2)}</pre>
				</code>
			</div>
			<p>This is the Project Page.</p>
		</div>
	)
}

const getProject = async (slug: string) => {
	const QUERY = query`
    query GetProject($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
        description
        tags
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
