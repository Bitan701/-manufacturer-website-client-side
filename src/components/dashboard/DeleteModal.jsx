import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const DeleteModal = ({ userData, reviewModal, refetch }) => {
	const { register, handleSubmit } = useForm()

	const submitDelete = (data) => {
		fetch(`http://localhost:5000/orders/${reviewModal._id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				refetch()
				toast.success('Order Deleted')
				document.getElementById('deleteModal').click()
				console.log('success', data)
			})

		console.log(reviewModal)
	}
	return (
		<div>
			<input type='checkbox' id='delete-modal' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='delete-modal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold mb-4'>
						Delete: {reviewModal.product}
					</h3>
					<button
						onClick={() => submitDelete(reviewModal)}
						className='btn btn-primary btn-sm'
					>
						Confirm Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default DeleteModal
