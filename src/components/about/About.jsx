import React from 'react'
import pic from '../../assets/pic.jpg'

const About = () => {
	return (
		<div className='hidden lg:block'>
			<p className='text-2xl relative top-60 left-10'>
				<span className=''>Hi, </span> <br />
				<span className='text-xl'>I am </span>
				<span className='text-3xl'>BITAN DEBNATH,</span> <br />
				<span>a freelance </span>
				<span className='text-3xl font-extrabold'>WEB DEVELOPER</span>
			</p>
			<img
				src={pic}
				className='w-auto max-w-[1024px]'
				alt='msi radeon promotion'
			/>
		</div>
	)
}

export default About
