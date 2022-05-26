import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
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
					<li>
						<Link to='/dashboard/myorders'>My Orders</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Dashboard
