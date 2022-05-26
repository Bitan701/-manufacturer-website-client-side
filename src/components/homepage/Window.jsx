import React from 'react'
import gpu from '../../assets/download.png'

const Window = () => {
	return (
		<div className='mockup-window border bg-base-300 mb-12'>
			<div className='flex justify-center px-4 py-16 bg-base-200'>
				<img src={gpu} className='w-full' alt='msi with rtx' />
			</div>
		</div>
	)
}

export default Window
