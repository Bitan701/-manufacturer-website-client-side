import React, { useEffect } from 'react'
import {
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import useToken from '../custom/useToken'
import Loading from '../shared/Loading'

const Login = () => {
	const { register, handleSubmit } = useForm()

	const navigate = useNavigate()

	const location = useLocation()
	const from = location?.state?.from?.pathname || '/'

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth)

	const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
	let signInError

	const [token] = useToken(guser)

	if (error || gerror) {
		signInError = (
			<p className='text-red-500'>
				<small>{error?.message || gerror?.message}</small>
			</p>
		)
	}

	if (loading || gloading) {
		return <Loading />
	}

	if (token) {
		navigate(from, { replace: true })
	}

	if (user) {
		navigate(from, { replace: true })
	}

	const onSubmit = async (data) => {
		signInWithEmailAndPassword(data.email, data.password)
		// await navigate(from, { replace: true })
	}

	return (
		<div className='flex justify-center items-center flex-col h-screen gap-8'>
			<h1 className='text-3xl'>Login</h1>
			<button onClick={() => signInWithGoogle()} className='btn btn-wide'>
				sign in with google
			</button>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-control gap-3'>
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
			{signInError}

			<Link to='/register'>Register</Link>
		</div>
	)
}

export default Login
