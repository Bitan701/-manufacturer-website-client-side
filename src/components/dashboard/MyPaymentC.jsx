import React from 'react'
import { Link } from 'react-router-dom'

const MyPaymentC = ({ datum, user, setReviewModal }) => {
	return (
		<tr>
			<td>{datum.product}</td>
			<td>{datum.orderAmount}</td>
			<td>{datum?.payment}</td>
			<td>{datum?.isPaid}</td>

			<td>
				{datum?.isPaid === 'unpaid' ? (
					<>
						<label
							onClick={() => setReviewModal(datum)}
							htmlFor='pay-now'
							className='btn modal-button btn-sm'
							id='reviewModal2'
						>
							Pay Now
						</label>
					</>
				) : (
					<p>Paid</p>
				)}
			</td>
		</tr>
	)
}

export default MyPaymentC
