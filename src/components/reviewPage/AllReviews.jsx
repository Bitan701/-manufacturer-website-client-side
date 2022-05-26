import React from 'react'

const AllReviews = ({ datum }) => {
	return (
		<tr>
			<td>{datum.email}</td>
			<td>{datum.product}</td>
			<td>{datum?.rating}</td>
			<td>{datum?.review}</td>
		</tr>
	)
}

export default AllReviews
