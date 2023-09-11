'use client'

// Icons
import { IconStarFilled } from '@tabler/icons-react'

// Packages
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const reviews = [
	{
		name: 'David Smith',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum.',
	},
	{
		name: 'David Smith',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum.',
	},
	{
		name: 'David Smith',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum.',
	},
]

const Reviews = () => {
	return (
		<div>
			<Swiper slidesPerView={2} spaceBetween={50}>
				{reviews.map((review) => (
					<SwiperSlide className='p-4 space-y-4 border rounded-lg border-zinc-300 dark:text-zinc-100'>
						<div className='flex items-center'>
							<IconStarFilled stroke={1.25} className='mr-2' />
							<p className='text-lg font-semibold'>Fantastic work ethic!</p>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Reviews
