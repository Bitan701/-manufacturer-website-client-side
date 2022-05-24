import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'
import { toast } from 'react-toastify'
import useToken from '../custom/useToken'

const Register = () => {
	const { register, handleSubmit } = useForm()

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth)

	const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)

	const navigate = useNavigate()

	const [token] = useToken(user || guser)

	if (error || gerror) {
		return (
			<div>
				<p>
					Error: {error && error.message} {gerror && gerror.message}
				</p>
			</div>
		)
	}

	if (loading || gloading) {
		return <Loading />
	}

	if (token) {
		navigate('/products')
	}

	const onSubmit = (data) => {
		console.log(data)
		createUserWithEmailAndPassword(data.email, data.password)
		toast.success('Sign up Successful!')
	}

	return (
		<div className='flex justify-center items-center flex-col h-screen gap-8'>
			<h1 className='text-3xl'>Register</h1>
			<button onClick={() => signInWithGoogle()} className='btn btn-wide'>
				sign up with google
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
					<input type='submit' />
				</div>
			</form>

			<Link to='/login'>Login</Link>
		</div>
	)
}

export default Register
