import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import CustomLink from '../custom/CustomLink'

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth)

	return (
		<div>
			<div className='navbar bg-base-100 mb-8 font-bold'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex='0' className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex='0'
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<CustomLink to='/products'>Products</CustomLink>
							</li>
							{user && (
								<li>
									<CustomLink to='/dashboard'>Dashboard</CustomLink>{' '}
								</li>
							)}
							<li>
								<CustomLink to='/blog'>Blog</CustomLink>
							</li>
							<li>
								<CustomLink to='/about'>Portfolio</CustomLink>
							</li>
						</ul>
					</div>
					<CustomLink to='/' className='btn btn-ghost normal-case text-xl'>
						MSI
					</CustomLink>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal p-0'>
						<li>
							<CustomLink to='/products'>Products</CustomLink>
						</li>

						{user && (
							<li>
								<CustomLink to='/dashboard'>Dashboard</CustomLink>{' '}
							</li>
						)}

						<li>
							<CustomLink to='/blog'>Blog</CustomLink>
						</li>
						<li>
							<CustomLink to='/about'>Portfolio</CustomLink>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					{user ? (
						<button
							className='btn btn-primary btn-sm'
							onClick={() => signOut(auth)}
						>
							Log Out
						</button>
					) : (
						<CustomLink to='/login'>Login</CustomLink>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
