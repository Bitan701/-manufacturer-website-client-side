import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'

const Profile = () => {
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		return <Loading />
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
					<p>Phone Number: {user?.phoneNumber}</p>
				</div>
			</div>
		</div>
	)
}

export default Profile
