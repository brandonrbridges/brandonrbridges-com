// Next
import Link from 'next/link'

// Components
import Logo from '../Logo'

// Assets
import ThemeToggle from '../ThemeToggle'

const Navigation = () => {
	return (
		<div className='py-2'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Logo />
					<div className='flex items-center space-x-4'>
						<ThemeToggle />
						<button className='button'>Let's talk</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
