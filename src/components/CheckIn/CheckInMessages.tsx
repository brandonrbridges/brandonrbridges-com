// GraphQL
import { hygraph, query } from '@/lib/graphql'

// Packages
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

interface CheckInMessage {
	name: string
	message: string
	date: string
}

const CheckInMessages = async () => {
	const messages = await getCheckInMessages()

	if (messages.length === 0) {
		return null
	}

	return (
		<div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
			{messages?.map(({ name, message, date }, index) => (
				<div className='space-y-2'>
					<div className='flex items-center justify-between '>
						<p>{name} said:</p>
						<p className='text-xs text-zinc-400 dark:text-zinc-500'>
							{dayjs(date).fromNow()}
						</p>
					</div>

					<p className='pl-4 border-l dark:border-zinc-500'>{message}</p>
				</div>
			))}
		</div>
	)
}

async function getCheckInMessages(): Promise<CheckInMessage[]> {
	const QUERY = query`
		query {
			checkInMessages(orderBy: date_DESC) {
				name
				message
				date
			}
		}
	`

	const messages: {
		checkInMessages: CheckInMessage[]
	} = await hygraph.request(QUERY)

	return messages.checkInMessages as CheckInMessage[]
}

export default CheckInMessages
