import React from 'react'
import { useQuery } from 'react-query'
import Product from '../product/Product'
import Loading from '../shared/Loading'
import ItemLink from './ItemLink'

const Items = () => {
	const { data: products, isLoading } = useQuery('users', () =>
		fetch('https://rocky-garden-01336.herokuapp.com/products', {
			method: 'GET',
		}).then((res) => res.json())
	)

	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div className='flex justify-center flex-col items-center gap-8 xl:flex-row'>
			{products.slice(0, 3).map((product) => (
				<ItemLink key={product._id} product={product} />
			))}
		</div>
	)
}

export default Items
