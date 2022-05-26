import React from 'react'

const MyOrder = ({ datum, user }) => {
	return (
		<tr>
			<th>{user?.displayName}</th>
			<td>{datum.product}</td>
			<td>{datum.orderAmount}</td>
			<td>{datum?.payment}</td>
		</tr>
	)
}

export default MyOrder
