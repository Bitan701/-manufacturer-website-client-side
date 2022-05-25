import React from 'react'
import banner1 from '../../assets/banner_1.jpeg'
import banner2 from '../../assets/banner_2.jpeg'
import banner3 from '../../assets/banner_3.jpeg'
import banner4 from '../../assets/banner_4.jpeg'

const Carousel = () => {
	return (
		<div className='carousel w-full'>
			<div id='slide1' className='carousel-item relative w-full'>
				<img src={banner1} className='w-full' alt='msi with rtx' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide4' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide2' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide2' className='carousel-item relative w-full'>
				<img src={banner2} className='w-full' alt='msi radeon promotion' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide1' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide3' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide3' className='carousel-item relative w-full'>
				<img src={banner3} className='w-full' alt='msi with amd' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide2' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide4' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide4' className='carousel-item relative w-full'>
				<img src={banner4} className='w-full' alt='msi gamepass promotion' />
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide3' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide1' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</div>
	)
}

export default Carousel
