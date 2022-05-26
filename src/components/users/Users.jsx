import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'
import User from './User'

const Users = () => {
	// const [users, setUsers] = useState([])

	// useEffect(() => {
	// 	const url = 'https://rocky-garden-01336.herokuapp.com/users'
	// 	axios.get(url).then((response) => {
	// 		setUsers(response.data)
	// 	})
	// }, [])

	const [user] = useAuthState(auth)

	let activeUser

	if (user) {
		activeUser = user.email
	}

	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery('users', () =>
		fetch('https://rocky-garden-01336.herokuapp.com/users', {
			method: 'GET',
		}).then((res) => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Admin</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<User
								key={user._id}
								user={user}
								refetch={refetch}
								activeUser={activeUser}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Users
