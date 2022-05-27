import React from 'react'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
	const { register, handleSubmit } = useForm()

	const submitProduct = (data) => {
		const structured = {
			name: `${data?.name}`,
			image: `${data?.image}`,
			minimumPurchaseQuantity: `${data?.minimumPurchaseQuantity}`,
			availableQuantity: `${data?.availableQuantity}`,
			price: `${data?.price}`,
			description: {
				gpu: `${data?.gpu}`,
				cuda: `${data?.cuda}`,
				coreClock: `${data?.coreClock}`,
				memorySpeed: `${data?.memorySpeed}`,
				memory: `${data?.memory}`,
				memoryType: `${data?.memoryType}`,
				powerConsumption: `${data?.powerConsumption}`,
			},
		}
		product(structured)
		// console.log(structured)
	}

	const product = (data) => {
		console.log(data)
		fetch(`http://localhost:5000/products`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('success', data)
			})
	}

	return (
		<div>
			<h1>Add product route</h1>
			<form onSubmit={handleSubmit(submitProduct)}>
				<div className='form-control gap-3'>
					<label className='input-group'>
						<span className='w-32'>Name</span>
						<input
							{...register('name')}
							type='text'
							placeholder='GeForce RTX™ 3070 GAMING TRIO PLUS 8G LHR'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Image Link</span>
						<input
							{...register('image')}
							type='text'
							placeholder='Direct image link'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>GPU</span>
						<input
							{...register('gpu')}
							type='text'
							placeholder='GeForce RTX™ 3070'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Cuda Count</span>
						<input
							{...register('cuda')}
							type='text'
							placeholder='5888'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Core Clock</span>
						<input
							{...register('coreClock')}
							type='text'
							placeholder='1770'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Memory Speed</span>
						<input
							{...register('memorySpeed')}
							type='text'
							placeholder='1770'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Memory Capacity</span>
						<input
							{...register('memory')}
							type='text'
							placeholder='8'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Memory Type</span>
						<input
							{...register('memoryType')}
							type='text'
							placeholder='GDDR6'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Power Consumption</span>
						<input
							{...register('powerConsumption')}
							type='text'
							placeholder='240'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Minimum Order Quantity</span>
						<input
							{...register('minimumPurchaseQuantity')}
							type='text'
							placeholder='240'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Available Quantity</span>
						<input
							{...register('availableQuantity')}
							type='text'
							placeholder='2400'
							className='input input-bordered'
						/>
					</label>
					<label className='input-group'>
						<span className='w-32'>Price</span>
						<input
							{...register('price')}
							type='number'
							placeholder='599'
							className='input input-bordered'
						/>
					</label>
					<input type='submit' />
				</div>
			</form>
		</div>
	)
}

export default AddProduct
