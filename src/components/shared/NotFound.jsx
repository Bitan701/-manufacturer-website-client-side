import React from 'react'
import { IconContext } from 'react-icons'
import { FaRegSadCry } from 'react-icons/fa'

const NotFound = () => {
	return (
		<div className='flex justify-center items-center flex-col h-screen gap-12'>
			<IconContext.Provider
				value={{ className: 'global-class-name', size: '18rem' }}
			>
				<FaRegSadCry />
				<h1 className='text-4xl'>Sorry, the route was not found</h1>
			</IconContext.Provider>
		</div>
	)
}

export default NotFound
