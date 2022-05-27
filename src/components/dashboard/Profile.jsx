import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'

const Profile = () => {
	const [user, loading, error] = useAuthState(auth)
	const [logged, setLogged] = useState('')

	const { register, handleSubmit } = useForm()

	useEffect(() => {
		if (user) {
			const { email } = user
			fetch(`https://rocky-garden-01336.herokuapp.com/users/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setLogged(data)
				})
		}
	}, [user])

	if (loading) {
		return <Loading />
	}

	const onSubmit = async (data) => {
		console.log(data)
		order(data)
	}

	const order = (data) => {
		fetch(
			`https://rocky-garden-01336.herokuapp.com/users/${logged[0]?.email}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log('success', data)
			})
	}

	return (
		<div>
			<div className='card card-compact w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={user?.photoURL} alt='ProfilePhoto Not Available' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Profile</h2>
					<p>Name: {user?.displayName}</p>
					<p>Email: {user?.email}</p>
					<p>Phone Number: {logged[0]?.phone}</p>
					<p>Role: {logged[0]?.role}</p>
					<p>Education: {logged[0]?.education}</p>
					<p>Location: {logged[0]?.location}</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='form-control gap-3 px-4'>
						<label className='input-group'>
							<span className='w-32'>Education</span>
							<input
								{...register('education')}
								type='text'
								placeholder={logged[0]?.education}
								className='input input-bordered'
							/>
						</label>
						<label className='input-group'>
							<span className='w-32'>Location</span>
							<input
								{...register('location')}
								type='text'
								placeholder={logged[0]?.location}
								className='input input-bordered'
							/>
						</label>
						<label className='input-group'>
							<span className='w-32'>LinkedID Profile</span>
							<input
								{...register('linked')}
								type='text'
								placeholder={logged[0]?.linked}
								className='input input-bordered'
							/>
						</label>
						<label className='input-group'>
							<span className='w-32'>Phone</span>
							<input
								{...register('phone')}
								type='number'
								placeholder={logged[0]?.phone}
								className='input input-bordered'
							/>
						</label>

						<input className='btn btn-primary btn-sm' type='submit' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile
