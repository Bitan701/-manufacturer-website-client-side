import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const ReviewModal = ({ userData, reviewModal, refetch }) => {
	const { register, handleSubmit } = useForm()

	const submitReview = (data) => {
		order(data)
	}

	const order = (data) => {
		fetch(`https://rocky-garden-01336.herokuapp.com/orders/${userData._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				refetch()
				toast.success('review added')
				document.getElementById('reviewModal').click()
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
					<h3 className='text-lg font-bold mb-4'>
						Review: {reviewModal.product}{' '}
					</h3>
					<form onSubmit={handleSubmit(submitReview)}>
						<div className='form-control gap-3'>
							<label className='input-group'>
								<span className='w-32'>Rating</span>
								<select
									{...register('rating', { required: true })}
									className='text-2xl mx-3'
								>
									<option value='*****'>*****</option>
									<option value='****'>****</option>
									<option value='***'>***</option>
									<option value='**'>**</option>
									<option value='*'>*</option>
								</select>
							</label>
							<label className='input-group'>
								<span className='w-32'>Review</span>
								<input
									{...register('review')}
									type='text'
									placeholder='Add a review'
									className='input input-bordered'
								/>
							</label>
							<input className='btn btn-primary btn-sm' type='submit' />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ReviewModal
