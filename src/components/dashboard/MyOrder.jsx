import React from 'react'
import { Link } from 'react-router-dom'

const MyOrder = ({ datum, user, setReviewModal }) => {
	return (
		<tr>
			<td>{datum.product}</td>
			<td>{datum.orderAmount}</td>
			<td>{datum?.payment}</td>

			<td>
				{datum.rating ? (
					datum.rating
				) : (
					<label
						onClick={() => setReviewModal(datum)}
						htmlFor='my-modal-3'
						className='btn modal-button btn-sm'
						id='reviewModal'
					>
						Review
					</label>
				)}
			</td>
		</tr>
	)
}

export default MyOrder
