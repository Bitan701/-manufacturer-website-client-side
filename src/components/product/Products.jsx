import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../shared/Loading'
import Product from './Product'
import ProductModal from './ProductModal'

const Products = () => {
	// const [products, setProducts] = useState([])
	const [productModal, setProductModal] = useState([])

	// useEffect(() => {
	// 	const url = 'http://localhost:5000/products'
	// 	axios.get(url).then((response) => {
	// 		setProducts(response.data)
	// 	})
	// }, [])

	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery('users', () =>
		fetch('http://localhost:5000/products', {
			method: 'GET',
		}).then((res) => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div className='flex justify-center items-center flex-col'>
			<div className=''>
				{products.map((product) => (
					<Product
						key={product._id}
						product={product}
						setProductModal={setProductModal}
					/>
				))}
			</div>

			<ProductModal productModal={productModal} refetch={refetch} />
		</div>
	)
}

export default Products
