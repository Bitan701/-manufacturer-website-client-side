import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'

const Dashboard = () => {
	const [user, loading, error] = useAuthState(auth)
	const [logged, setLogged] = useState('')

	useEffect(() => {
		if (user) {
			const { email } = user
			fetch(`http://localhost:5000/users/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setLogged(data)
				})
		}
	}, [user])

	return (
		<div className='drawer drawer-mobile'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col items-center'>
				{/* <!-- Page content here --> */}
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary btn-s btn-outline drawer-button lg:hidden mb-8'
				>
					Dashboard
				</label>
				<Outlet />
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
					{/* <!-- Sidebar content here --> */}
					<li>
						<Link to='/dashboard'>Profile</Link>
					</li>
					<li>
						<Link to='/dashboard/reviews'>Reviews</Link>
					</li>
					{logged[0]?.role !== 'admin' ? (
						<li>
							<Link to='/dashboard/myorders'>My Orders</Link>
						</li>
					) : (
						<li>
							<Link to='/dashboard/addproduct'>Add a Product</Link>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Dashboard
