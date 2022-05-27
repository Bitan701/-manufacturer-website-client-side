import React, { useEffect, useState } from 'react'
import AllOrder from './AllOrder'

const AllOrders = () => {
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
			<h3 className='text-3xl text-center mb-4'>All Orders</h3>
			<div className='overflow-x-auto'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th>Ordered by</th>
							<th>Order Quanity</th>
							<th>Product Name</th>
							<th>Payment</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{data.map((datum) => (
							<AllOrder key={datum._id} datum={datum} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default AllOrders
