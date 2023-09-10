const HomepageHeader = () => {
	return (
		<div className='py-10 md:py-40'>
			<div className='container'>
				<div className='md:w-4/5'>
					<p className='font-semibold text-2xl mb-4'>Hello! I'm Brandon. 👋🏼</p>
					<h1 className='font-bold text-6xl'>
						Building digital products with an emphasis on{' '}
						<span className='text-yellow-400'>visual design</span>.
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
						<div>
							<button className='lg'>Let's talk</button>
						</div>
						<div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Suscipit pariatur, nisi dolor quam cum veniam porro velit rerum.
								Odit deleniti doloribus reiciendis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomepageHeader
