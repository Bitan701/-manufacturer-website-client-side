import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loading from '../shared/Loading'
import MyOrder from './MyOrder'
import ReviewModal from './ReviewModal'

const MyOrders = () => {
	const [user, loading] = useAuthState(auth)
	const [data, setData] = useState([])

	const [reviewModal, setReviewModal] = useState([])

	useEffect(() => {
		fetch(`http://localhost:5000/orders/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
			})
	}, [])

	if (loading) {
		return <Loading />
	}

	return (
		<div className='max-w-full'>
			<h3 className='text-3xl text-center mb-4'> My Orders</h3>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Order</th>
							<th>Order Amount</th>
							<th>Payment($)</th>
							<th>Review</th>
						</tr>
					</thead>
					<tbody>
						{data.map((datum) => (
							<MyOrder
								key={datum._id}
								datum={datum}
								user={user}
								setReviewModal={setReviewModal}
							/>
						))}
					</tbody>
				</table>
			</div>
			<ReviewModal reviewModal={reviewModal} userData={reviewModal} />
		</div>
	)
}

export default MyOrders
