import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../shared/Loading'
import User from './User'

const Users = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const url = 'http://localhost:5000/users'
		axios.get(url).then((response) => {
			setUsers(response.data)
		})
	}, [])

	// if (isLoading) {
	// 	return <Loading></Loading>
	// }

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
							<User key={user._id} user={user} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Users
