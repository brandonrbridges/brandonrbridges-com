// Types
import { Experience } from '@/types/experience.types'

// GraphQL
import { hygraph, query } from '@/lib/graphql'

// Packages
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs'

const Experiences = async () => {
	const experiences = await getExperiences()

	return (
		<div className='flex flex-col space-y-8'>
			{experiences.map((experience) => {
				const startDate = dayjs(experience.startDate).format('MMMM YYYY')
				const endDate = dayjs(experience.endDate).format('MMMM YYYY')

				const difference = dayjs(experience.endDate).diff(
					dayjs(experience.startDate),
					'month'
				)

				return (
					<div key={experience.id}>
						<div className='flex items-end space-x-2 mb-2'>
							<p className='font-medium'>{experience.title}</p>
							<p className='italic text-zinc-500 text-sm'>
								{experience.jobTitle}
							</p>
						</div>
						<div className='flex items-end space-x-2 mb-2 text-xs'>
							<p>
								{startDate} till {endDate} ({difference} months)
							</p>
						</div>
						<ReactMarkdown className='markdown'>
							{experience.description}
						</ReactMarkdown>
					</div>
				)
			})}
		</div>
	)
}

async function getExperiences() {
	const QUERY = query`
    query {
      experiences(orderBy: startDate_DESC) {
        id
        title
        jobTitle
        startDate
        endDate
        description
        project {
          id
          title
          slug
        }
      }
    }
  `

	const data = await hygraph.request(QUERY)

	const { experiences } = data as { experiences: Experience[] }

	return experiences
}

export default Experiences
