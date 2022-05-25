import React from 'react'
import { useQuery } from 'react-query'
import Product from '../product/Product'
import Loading from '../shared/Loading'

const Items = () => {
	const { data: products, isLoading } = useQuery('users', () =>
		fetch('http://localhost:5000/products', {
			method: 'GET',
		}).then((res) => res.json())
	)

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div className='flex justify-center flex-col items-center gap-8'>
			{products.slice(0, 3).map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	)
}

export default Items
