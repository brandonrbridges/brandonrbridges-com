'use client'

// Packages
import { Tooltip } from 'react-tooltip'

// Icons
import {
	IconBrandReact,
	IconBrandNextjs,
	IconBrandGraphql,
	IconBrandMysql,
	IconDatabase,
	IconBrandTailwind,
	IconBrandDocker,
	IconBrandFirebase,
	IconBrandMongodb,
	IconBrandPrisma,
} from '@tabler/icons-react'

const Technologies = () => {
	return (
		<div>
			<div className='mb-4'>
				<p className='font-medium'>
					Technologies
					<span className='ml-4 text-xs text-zinc-500'>
						Hover for more information
					</span>
				</p>
			</div>
			<div className='flex items-start justify-start py-2 space-x-4 overflow-x-scroll sm:py-0 md:overflow-x-auto scrollbar-hide'>
				<a data-tooltip-id='tooltip' data-tooltip-content='React'>
					<IconBrandReact stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Next.js'>
					<IconBrandNextjs stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='GraphQL'>
					<IconBrandGraphql stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='MongoDB'>
					<IconBrandMongodb stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Firebase'>
					<IconBrandFirebase stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Prisma'>
					<IconBrandPrisma stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='MySQL'>
					<IconBrandMysql stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Databases'>
					<IconDatabase stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Tailwind CSS'>
					<IconBrandTailwind stroke={1.25} />
				</a>
				<a data-tooltip-id='tooltip' data-tooltip-content='Docker'>
					<IconBrandDocker stroke={1.25} />
				</a>

				<Tooltip id='tooltip' className='-translate-x-4' place='bottom' />
			</div>

			<p className='mt-4 text-xs sm:hidden text-zinc-500'>
				On mobile? Swipe to see more technologies.
			</p>
		</div>
	)
}

export default Technologies
