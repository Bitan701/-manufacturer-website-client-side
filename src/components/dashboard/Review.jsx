import React from 'react'

const Review = ({ datum, user }) => {
	return (
		<tr>
			<td>{datum.product}</td>
			<td>{datum?.review}</td>
			<td>{datum?.reviewDetails}</td>
		</tr>
	)
}

export default Review
