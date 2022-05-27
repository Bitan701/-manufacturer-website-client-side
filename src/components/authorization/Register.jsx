import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from 'react-firebase-hooks/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'
import { toast } from 'react-toastify'

const Register = () => {
	const { register, handleSubmit } = useForm()

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)

	const [updateProfile, updating, updateError] = useUpdateProfile(auth)

	const navigate = useNavigate()
	const location = useLocation()
	const from = location?.state?.from?.pathname || '/'

	if (error || updateError) {
		return (
			<div>
				<p>Error: {error && error.message}</p>
			</div>
		)
	}

	if (loading || updating) {
		return <Loading />
	}

	if (user) {
		navigate(from, { replace: true })
	}

	const onSubmit = async (data) => {
		console.log(data)
		await createUserWithEmailAndPassword(data.email, data.password)

		const displayName = data.name
		await updateProfile({ displayName })

		toast.success('Sign up Successful!')
	}

	return (
		<div className='flex justify-center items-center flex-col h-screen gap-8'>
			<h1 className='text-3xl'>Register</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-control gap-3'>
					<label className='input-group'>
						<span className='w-32'>Name</span>
						<input
							{...register('name', { required: true })}
							type='text'
							placeholder='John Doe'
							className='input input-bordered'
						/>
					</label>
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
					<input className='btn btn-primary btn-sm' type='submit' />
				</div>
			</form>

			<Link to='/login'>Login</Link>
		</div>
	)
}

export default Register
