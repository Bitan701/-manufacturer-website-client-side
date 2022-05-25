import React from 'react'
import banner1 from '../../assets/banner_1.jpeg'
import banner2 from '../../assets/banner_2.jpeg'
import banner3 from '../../assets/banner_3.jpeg'
import banner4 from '../../assets/banner_4.jpeg'

const Carousel = () => {
	return (
		<div class='carousel w-full'>
			<div id='slide1' class='carousel-item relative w-full'>
				<img src={banner1} class='w-full' alt='msi with rtx' />
				<div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide4' class='btn btn-circle'>
						❮
					</a>
					<a href='#slide2' class='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide2' class='carousel-item relative w-full'>
				<img src={banner2} class='w-full' alt='msi radeon promotion' />
				<div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide1' class='btn btn-circle'>
						❮
					</a>
					<a href='#slide3' class='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide3' class='carousel-item relative w-full'>
				<img src={banner3} class='w-full' alt='msi with amd' />
				<div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide2' class='btn btn-circle'>
						❮
					</a>
					<a href='#slide4' class='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide4' class='carousel-item relative w-full'>
				<img src={banner4} class='w-full' alt='msi gamepass promotion' />
				<div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a href='#slide3' class='btn btn-circle'>
						❮
					</a>
					<a href='#slide1' class='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</div>
	)
}

export default Carousel
