import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => console.log(data)

	return (
		<div className='text-center'>
			<h1 className='text-3xl'>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-control'>
					<label className='input-group'>
						<span className='w-32'>Email</span>
						<input
							{...register('email', { required: true })}
							type='email'
							placeholder='info@site.com'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Password</span>
						<input
							{...register('password', { required: true })}
							type='password'
							placeholder='********'
							className='input input-bordered'
						/>
					</label>
					<input type='submit' />
				</div>
			</form>
		</div>
	)
}

export default Login
