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
	// 	const url = 'https://rocky-garden-01336.herokuapp.com/products'
	// 	axios.get(url).then((response) => {
	// 		setProducts(response.data)
	// 	})
	// }, [])

	const {
		data: products,
		isLoading,
		refetch,
	} = useQuery('users', () =>
		fetch('https://rocky-garden-01336.herokuapp.com/products', {
			method: 'GET',
		}).then((res) => res.json())
	)
	if (isLoading) {
		return <Loading></Loading>
	}

	return (
		<div className=''>
			<div className='flex justify-center items-center flex-col xl:flex-row xl:flex-wrap xl:gap-6'>
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
