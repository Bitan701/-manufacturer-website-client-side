import React from 'react'

const MyOrder = ({ datum, user, setReviewModal }) => {
	return (
		<tr>
			<th>{user?.displayName}</th>
			<td>{datum.product}</td>
			<td>{datum.orderAmount}</td>
			<td>{datum?.payment}</td>

			<td>
				{datum.review ? (
					datum.rating
				) : (
					<label
						onClick={() => setReviewModal(datum)}
						htmlFor='my-modal-3'
						className='btn modal-button btn-sm'
					>
						Review
					</label>
				)}
			</td>
		</tr>
	)
}

export default MyOrder
