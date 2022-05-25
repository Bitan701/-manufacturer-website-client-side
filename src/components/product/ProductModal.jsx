import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const ProductModal = ({ productModal }) => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		if (data.amount < productModal.minimumPurchaseQuantity) {
			toast.warning('Please order above the minimun order amount')
		} else if (data.amount > productModal.availableQuantity) {
			toast.warning('We do not have that amount. Please lower order amount')
		} else {
			console.log(data)
			const afterOrderAmount = {
				amount:
					parseInt(productModal.availableQuantity) - parseInt(data.amount),
			}

			handleOrderSubmit(afterOrderAmount)
		}
	}

	const handleOrderSubmit = (data) => {
		fetch(`http://localhost:5000/products/${productModal._id}`, {
			method: 'PUT',
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
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold'>{productModal.name}</h3>
					<p className='py-4'>
						Price: ${productModal.price} <br />
						Available: {productModal.availableQuantity} <br />
						Minimum Order: {productModal.minimumPurchaseQuantity} <br />
					</p>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='form-control gap-3'>
							<label className='input-group'>
								<span className='w-32'>Order Amount</span>
								<input
									{...register('amount', { required: true })}
									type='number'
									placeholder='Enter Amount'
									className='input input-bordered'
								/>
							</label>
						</div>
						<input type='submit' />
					</form>
				</div>
			</div>
		</div>
	)
}

export default ProductModal
// setOrderAmount(e.target.value)
