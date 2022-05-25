import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import ProductModal from './ProductModal'

const Products = () => {
	const [products, setProducts] = useState([])
	const [productModal, setProductModal] = useState([])

	useEffect(() => {
		const url = 'http://localhost:5000/products'
		axios.get(url).then((response) => {
			setProducts(response.data)
		})
	}, [])

	return (
		<div>
			<div className=''>
				{products.map((product) => (
					<Product
						key={product._id}
						product={product}
						setProductModal={setProductModal}
					/>
				))}
			</div>

			<ProductModal productModal={productModal} />
		</div>
	)
}

export default Products
