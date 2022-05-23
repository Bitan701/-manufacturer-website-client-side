import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const url = 'products.json'
		axios.get(url).then((response) => {
			setProducts(response.data)
		})
	}, [])

	return (
		<div>
			<div className=''>
				{products.map((product) => (
					<Product key={product.name} product={product} />
				))}
			</div>
		</div>
	)
}

export default Products
