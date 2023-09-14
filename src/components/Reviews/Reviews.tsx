'use client'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Icons
import { IconStarFilled } from '@tabler/icons-react'

// Assets
import TrustPilotStar from '@/assets/vectors/trustpilot-star.svg'

// Packages
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const reviews = [
	{
		title: 'Extremely highly dedicated and talented',
		text: "I've had the pleasure of working alongside Brandon Bridges for the past few weeks and it's clearly evident that they are a standout individual in the software engineering field. From the outset, I've been consistently impressed with their dedication to producing high-quality code, their genuine enthusiasm for problem-solving, and their ability to handle complex challenges and requests given by their clients with both grace and aptitude.",
		rating: 5,
		author: 'Azlan Ahmad',
		author_image:
			'https://user-images.trustpilot.com/64ff3857599be50011a08b46/73x73.png',
		company: 'Edumasters',
		trustpilot_url:
			'https://uk.trustpilot.com/reviews/64ff3917e33d19e6dd72001d',
	},
]

const Reviews = () => {
	return (
		<div>
			<Swiper
				spaceBetween={50}
				breakpoints={{
					320: {
						// sm
						slidesPerView: 1,
					},
					768: {
						// md
						slidesPerView: 2,
					},
				}}
			>
				{reviews.map((review, index) => (
					<SwiperSlide
						key={index}
						className='p-4 space-y-4 bg-white border rounded-lg dark:bg-transparent border-zinc-300 dark:text-zinc-100 dark:border-zinc-600'
					>
						<p className='font-semibold'>{review.title}</p>
						<div className='flex items-center space-x-1'>
							{[...Array(review.rating)].map((_, index) => (
								<IconStarFilled
									key={index}
									stroke={1.25}
									size={18}
									className='text-yellow-500'
								/>
							))}
						</div>
						<p>{review.text}</p>
						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-3'>
								<Image
									src={review.author_image}
									alt={review.author + "'s TrustPilot profile picture"}
									width={36}
									height={36}
									className='rounded-full'
								/>
								<p className='text-sm font-semibold leading-tight'>
									{review.author}
									<br />
									<span className='text-xs'>{review.company}</span>
								</p>
							</div>
							<div>
								<Link
									href={review.trustpilot_url}
									target='_blank'
									rel='
								noopener noreferrer'
								>
									<Image
										src={TrustPilotStar}
										alt='TrustPilot'
										height={30}
										width={30}
									/>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Reviews
