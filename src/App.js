import { Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Home from './components/homepage/Home'
import Products from './components/product/Products'
import Navbar from './components/shared/Navbar'

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	)
}

export default App
