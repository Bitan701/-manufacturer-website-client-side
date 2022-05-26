const Review = ({ datum, user }) => {
	return (
		<tr>
			<td>{datum.product}</td>
			<td>{datum?.rating}</td>
			<td>{datum?.review}</td>
		</tr>
	)
}

export default Review
