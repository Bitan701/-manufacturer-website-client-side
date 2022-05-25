import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from './components/about/About'
import Login from './components/authorization/Login'
import Register from './components/authorization/Register'
import Blog from './components/blog/Blog'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/dashboard/Profile'
import Reviews from './components/dashboard/Reviews'
import Home from './components/homepage/Home'
import Products from './components/product/Products'
import Navbar from './components/shared/Navbar'
import Users from './components/users/Users'

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='products' element={<Products />} />
				<Route path='dashboard' element={<Dashboard />}>
					<Route index element={<Profile />} />
					<Route path='reviews' element={<Reviews />} />
				</Route>
				<Route path='users' element={<Users />} />
				<Route path='blog' element={<Blog />} />
				<Route path='about' element={<About />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>

			<ToastContainer />
		</div>
	)
}

export default App
