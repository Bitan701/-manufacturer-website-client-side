import React from 'react'
import { Link } from 'react-router-dom'

const ItemLink = ({ product }) => {
	return (
		<div className='my-8'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={product.image} alt={product.name} />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{product.name}</h2>
					<div>
						<p>GPU: {product?.description?.gpu} </p>
						<p>Cuda Count: {product?.description?.cuda} </p>
						<p>Core Clock: {product?.description?.coreClock} MHz</p>
						<p>Memory Speed: {product?.description?.memorySpeed} Gbps</p>
						<p>Memory Size: {product?.description?.memory} GB</p>
						<p>Memory Type: {product?.description?.memoryType} </p>
						<p>Rated Power: {product?.description?.powerConsumption} Watts</p>
					</div>
					<hr />
					<div>
						<p>Price: ${product.price}</p>
						<p>Product Available: {product.availableQuantity}</p>
						<p>Minimum Order: {product.minimumPurchaseQuantity}</p>
					</div>
					<div className='card-actions justify-end '>
						<Link to='/products' className='btn btn-primary btn-sm'>
							See All products...
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemLink
