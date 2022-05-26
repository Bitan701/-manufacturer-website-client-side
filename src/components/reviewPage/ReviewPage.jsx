import React, { useEffect, useState } from 'react'
import Review from '../dashboard/Review'
import AllReviews from './AllReviews'

const ReviewPage = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(`http://localhost:5000/orders`)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})
	}, [])

	return (
		<div className='max-w-full'>
			<h3 className='text-3xl text-center mb-4'>Reviews</h3>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Email</th>
							<th>Order</th>
							<th>Review</th>
							<th>Review Details</th>
						</tr>
					</thead>
					<tbody>
						{data.map((datum) => (
							<AllReviews key={datum._id} datum={datum} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ReviewPage
