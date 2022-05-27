import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CheckoutForm = ({ reviewModal }) => {
	const stripe = useStripe()
	const elements = useElements()
	const [cardError, setCardError] = useState('')
	const [success, setSuccess] = useState('')
	const [transactionId, setTransactionId] = useState('')
	const [clientSecret, setClientSecret] = useState('')

	const { payment, email, _id } = reviewModal
	// console.log(email, _id)

	useEffect(() => {
		if (payment) {
			fetch('http://localhost:5000/create-payment-intent', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({ payment }),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data?.clientSecret) {
						setClientSecret(data.clientSecret)
					}
				})
		}
	}, [payment])

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (!stripe || !elements) {
			return
		}
		const card = elements.getElement(CardElement)
		if (card === null) {
			return
		}
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		})
		setCardError(error?.message || '')

		const { paymentIntent, error: intentError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: email,
					},
				},
			})

		if (intentError) {
			setCardError(intentError?.message)
			// setProcessing(false)
		} else {
			setCardError('')
			setTransactionId(paymentIntent.id)
			setSuccess('Congrats! Your payment is completed.')
			const payment = {
				appointment: _id,
				transactionId: paymentIntent.id,
				isPaid: 'paid',
			}
			fetch(`http://localhost:5000/orders/${_id}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log('success', data)
					// document.getElementById('modal2').click()
					toast.success('Payment Successfull')
				})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className='btn btn-success btn-sm mt-4'
					type='submit'
					disabled={!stripe || !clientSecret}
				>
					Pay
				</button>
			</form>
			{cardError && <p className='text-red-500'>{cardError}</p>}
			{success && (
				<div className='text-green-500'>
					<p>{success} </p>
					<p>
						Your transaction Id:{' '}
						<span className='text-orange-500 font-bold'>{transactionId}</span>
					</p>
				</div>
			)}
		</>
	)
}

export default CheckoutForm
