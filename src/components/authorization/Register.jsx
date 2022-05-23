import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'

const Register = () => {
	const { register, handleSubmit } = useForm()

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)

	const onSubmit = (data) => {
		console.log(data)
		createUserWithEmailAndPassword(data.email, data.password)
	}

	if (error) {
		return (
			<div>
				<p>Error: {error.message}</p>
			</div>
		)
	}

	if (loading) {
		return <Loading />
	}

	if (user) {
		console.log(user.user.email)
	}

	return (
		<div className='text-center'>
			<h1 className='text-3xl'>Register</h1>
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

			<Link to='/register'>Register</Link>
		</div>
	)
}

export default Register
