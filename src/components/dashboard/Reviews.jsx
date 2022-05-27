import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'
import Review from './Review'

const Reviews = () => {
	const [user, loading] = useAuthState(auth)
	const [data, setData] = useState([])

	useEffect(() => {
		if (user) {
			fetch(`https://rocky-garden-01336.herokuapp.com/orders/${user.email}`)
				.then((res) => res.json())
				.then((data) => {
					setData(data)
				})
		}
	}, [user])

	if (loading) {
		return <Loading />
	}

	return (
		<div className='max-w-full'>
			<h3 className='text-3xl text-center mb-4'>Reviews</h3>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Order</th>
							<th>Review</th>
							<th>Review Details</th>
						</tr>
					</thead>
					<tbody>
						{data.map((datum) => (
							<Review key={datum._id} datum={datum} user={user} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Reviews
