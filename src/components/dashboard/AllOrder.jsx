import React from 'react'

const AllOrder = ({ datum }) => {
	return (
		<tr>
			<td>{datum?.email}</td>
			<td>{datum?.orderAmount}</td>
			<td>{datum?.product}</td>
			<td>{datum?.payment}</td>
			<td>{datum?.isPaid === 'paid' ? 'Paid' : 'Unpaid'}</td>
		</tr>
	)
}

export default AllOrder
