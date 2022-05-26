import React from 'react'

const Product = ({ product, setProductModal }) => {
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
					<div className='card-actions justify-end'>
						<label
							htmlFor='my-modal-3'
							onClick={() => setProductModal(product)}
							id='modal'
							className='btn modal-button btn-primary'
						>
							Buy Now
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
