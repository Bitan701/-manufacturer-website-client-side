import React, { useReducer } from 'react'

const User = ({ user, refetch }) => {
	const makeAdmin = () => {
		fetch(`http://localhost:5000/users/admin/${user.email}`, {
			method: 'PUT',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				refetch()
			})
	}

	return (
		<tr>
			<th>1</th>
			<td>{user.email}</td>
			<td>
				{user.role !== 'admin' ? (
					<button className='btn btn-xs' onClick={makeAdmin}>
						Make Admin
					</button>
				) : (
					<p className='font-bold'>admin</p>
				)}
			</td>
			<td>
				<button className='btn btn-xs'>Remove User</button>
			</td>
		</tr>
	)
}

export default User
