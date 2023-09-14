import {
	IconArrowUpSquare,
	IconBrain,
	IconBrandNextjs,
	IconCalendar,
	IconCloudComputing,
	IconDeviceLaptop,
	IconGridPattern,
} from '@tabler/icons-react'

interface USP {
	icon?: JSX.Element
	title: string
	description: string
}

const USPs: USP[] = [
	{
		icon: <IconCalendar stroke={1.25} />,
		title: '10+ Years of Experience',
		description:
			'Starting with WordPress and moving with the industry onto React, Next.js, and more.',
	},
	{
		icon: <IconArrowUpSquare stroke={1.25} />,
		title: 'Senior-Level Expertise',
		description:
			'I have the skills and experience to build your project from start to finish.',
	},
	{
		icon: <IconDeviceLaptop stroke={1.25} />,
		title: 'Full-Stack Proficiency',
		description:
			'I can bring your idea to life, from the frontend to the backend and everything between.',
	},
	{
		icon: <IconBrandNextjs stroke={1.25} />,
		title: 'React (Next.js) Specialisation',
		description:
			'I specialise in building fast, accessible, and SEO-friendly Next applications.',
	},
	{
		icon: <IconCloudComputing stroke={1.25} />,
		title: 'DevOps & Cloud Skills',
		description:
			'I can help you deploy your application to the cloud with ease.',
	},
	{
		icon: <IconBrain stroke={1.25} />,
		title: 'Autism Advocate',
		description:
			'I am an advocate for Autism and Neurodiversity in the workplace.',
	},
]

const UniqueSellingPoints = () => {
	const Item = (props: USP) => {
		return (
			<div className='p-4 border rounded-lg border-zinc-700 text-zinc-100'>
				<div className='flex flex-col space-y-2 md:items-center md:space-x-2 md:space-y-0 md:flex-row'>
					<span>{props.icon}</span>
					<p>{props.title}</p>
				</div>
				<p className='mt-2 text-sm'>{props.description}</p>
			</div>
		)
	}

	return (
		<div className='grid grid-cols-2 gap-8 md:grid-cols-3'>
			{USPs.map((usp, index) => (
				<Item key={index} {...usp} />
			))}
		</div>
	)
}

export default UniqueSellingPoints
