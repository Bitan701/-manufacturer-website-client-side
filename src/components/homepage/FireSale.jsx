import React from 'react'
import banner1 from '../../assets/banner_1.jpeg'
import banner3 from '../../assets/banner_3.jpeg'

const FireSale = () => {
	return (
		<div className='my-20'>
			<h3 className='text-3xl text-center bold text-secondary '>
				NVIDIA vs AMD
			</h3>
			<p className='text-xl text-center bold my-4'>
				We can't help you decide. But with us you can find the best of both
				worlds
			</p>
			<div className='flex flex-col w-full lg:flex-row'>
				<div className='grid flex-grow card bg-base-300 rounded-box place-items-center'>
					<img src={banner1} className='w-full' alt='msi with rtx' />
				</div>
				<div className='divider lg:divider-horizontal'>OR</div>
				<div className='grid flex-grow card bg-base-300 rounded-box place-items-center'>
					<img src={banner3} className='w-full' alt='msi with amd' />
				</div>
			</div>
		</div>
	)
}

export default FireSale
