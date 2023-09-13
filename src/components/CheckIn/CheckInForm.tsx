'use client'

// Next
import { useRouter } from 'next/navigation'

// Packages
import { useForm } from 'react-hook-form'

const CheckInForm = () => {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			message: '',
		},
	})

	const onSubmit = handleSubmit(async (data) => {
		console.log(data)

		try {
			const response = await fetch('/api/checkin', {
				method: 'POST',
				body: JSON.stringify(data),
			})

			console.log(response)

			router.refresh()
		} catch (error) {
			console.error(error)
		}
	})

	return (
		<form className='form' id='checkin' onSubmit={onSubmit}>
			<div className='fields'>
				<div>
					<input
						type='text'
						placeholder={
							errors.name ? 'A name is required' : 'What is your name?'
						}
						className={errors.name && 'error'}
						{...register('name', { required: true })}
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder={
							errors.message ? 'A message is required' : 'Enter a message'
						}
						className={errors.message && 'error'}
						{...register('message', { required: true })}
					/>
				</div>
				<button type='submit' className='m-auto md:ml-2'>
					Say hello!
				</button>
			</div>
		</form>
	)
}

export default CheckInForm
