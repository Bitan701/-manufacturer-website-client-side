import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(
	'pk_test_51L3gHvCqQ6Dbii56KYEBvPbzAgh4Q92UOUmIjlI1uPcxJujAlsUIVhNpBsDwVKJK3RRmLWvH7hqdWRiwDwGFBkaw00lP8XbWbA'
)

const Payment = ({ userData, reviewModal, refetch }) => {
	return (
		<div>
			<input type='checkbox' id='pay-now' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='pay-now'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<h3 className='text-lg font-bold mb-4'>
						Hello, {reviewModal?.email} <br />
						Please pay: {reviewModal?.payment}
					</h3>
					{/* <Elements stripe={stripePromise}>
						<CheckoutForm reviewModal={reviewModal} />
					</Elements> */}
				</div>
			</div>
		</div>
	)
}

export default Payment
