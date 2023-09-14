// Next
import Image from 'next/image'
import Link from 'next/link'

// Assets
import TrustPilotStar from '@/assets/vectors/trustpilot-star.svg'

const TrustPilotReviewBadge = () => {
	return (
		<Link
			href='https://uk.trustpilot.com/evaluate/brandonrbridges.com'
			target='_blank'
			rel='noopener noreferrer'
		>
			<button className='flex items-center w-full px-4 py-2 space-x-2 transition-colors border md:w-fit border-trustpilot hover:bg-trustpilot hover:text-white'>
				<Image src={TrustPilotStar} alt='TrustPilot' height={30} width={30} />
				<span>Review me on TrustPilot</span>
			</button>
		</Link>
	)
}

export default TrustPilotReviewBadge
