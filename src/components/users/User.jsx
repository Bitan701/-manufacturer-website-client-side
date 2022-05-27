const User = ({ user, refetch, activeUser }) => {
	// activeUser is the user logged in. First fetch determines if the activeUser is an admin. If true then activeUser can make other users admin as well
	const makeAdmin = () => {
		fetch(`http://localhost:5000/users/${activeUser}`)
			.then((res) => res.json())
			.then((data) => {
				if (data[0].role) {
					fetch(`http://localhost:5000/users/admin/${user.email}`, {
						method: 'PUT',
					})
						.then((res) => res.json())
						.then((data) => {
							refetch()
						})
				} else {
					console.log('Unauthorized')
				}
			})

		// fetch(`http://localhost:5000/users/admin/${user.email}`, {
		// 	method: 'PUT',
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data)
		// 		refetch()
		// 	})
	}

	return (
		<tr>
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
		</tr>
	)
}

export default User
