import React from 'react'
import ReviewPage from '../reviewPage/ReviewPage'
import Carousel from './Carousel'
import Items from './Items'
import Summary from './Summary'

const Home = () => {
	return (
		<div>
			<Carousel />
			<Items />
			<Summary />
			<ReviewPage />
		</div>
	)
}

export default Home
