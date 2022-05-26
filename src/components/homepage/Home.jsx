import React from 'react'
import ReviewPage from '../reviewPage/ReviewPage'
import Carousel from './Carousel'
import FireSale from './FireSale'
import Items from './Items'
import Summary from './Summary'
import Window from './Window'

const Home = () => {
	return (
		<div>
			<Carousel />
			<Items />
			<Summary />
			<FireSale />
			<Window />
			<ReviewPage />
		</div>
	)
}

export default Home
