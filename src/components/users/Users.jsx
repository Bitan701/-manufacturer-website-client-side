import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../shared/Loading'
import User from './User'

const Users = () => {
	// const [users, setUsers] = useState([])

	// useEffect(() => {
	// 	const url = 'http://localhost:5000/users'
	// 	axios.get(url).then((response) => {
	// 		setUsers(response.data)
	// 	})
	// }, [])

	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery('users', () =>
		fetch('http://localhost:5000/users', {
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
							<User key={user._id} user={user} refetch={refetch} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Users
