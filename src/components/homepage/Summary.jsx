import React from 'react'
import { IconContext } from 'react-icons'
import { BsFlagFill, BsCpuFill } from 'react-icons/bs'
import { ImHappy2 } from 'react-icons/im'

const Summary = () => {
	return (
		<div className='card bg-base-100 shadow-xl gap-5 my-12 py-8 max-w-[900px] mx-auto'>
			<h3 className='text-3xl uppercase text-center'>
				We are the heart of Million Computers
			</h3>
			<IconContext.Provider value={{ size: '8rem' }}>
				<div className='flex justify-evenly'>
					<div className='flex justify-center items-center flex-col gap-2'>
						<BsFlagFill />
						<p>120 Countries</p>
					</div>
					<div className='flex justify-center items-center flex-col gap-2'>
						<BsCpuFill />
						<p>Over 10 million computers</p>
					</div>
					<div className='flex justify-center items-center flex-col gap-2'>
						<ImHappy2 />
						<p>Millions of happy Users</p>
					</div>
				</div>
			</IconContext.Provider>
			<h4 className='text-2xl text-center'>
				Do you have a query? Contact us &nbsp;
				<a
					href='http://gsmarena.com'
					rel='noreferrer'
					target='_blank'
					className='link link-hover'
				>
					here
				</a>
			</h4>
		</div>
	)
}

export default Summary
