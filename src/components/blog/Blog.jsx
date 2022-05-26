import React from 'react'

const Blog = () => {
	return (
		<div className=' text-xl flex flex-col justify-center h-screen gap-4 mt-12'>
			<p>How will you improve the performance of a React Application?</p>
			<p>
				Answer: Using React.Fragment to avoid adding extra nodes to the DOM. Use
				react lazy loading. Use rect.memo for component memoization. Keeping
				component state local where it is necessary. using list virtualization
				in react
			</p>
			<p>
				What are the different ways to manage a state in a React application?
			</p>
			<p>
				Answer: Ther are four main types of state to manage in React app. local
				state can be managed using useState hook. We can manage server stage
				with React query. Also there is URL state and global state
			</p>
			<p>
				Why you do not set the state directly in React. For example, if you have
				`const [products, setProducts] = useState([])`. Why you do not set
				`products = [...]` instead, you use the `setProducts`
			</p>
			<p>
				Answer: Its because how data flow in a react app. Data flows down.
				useState can re-render the component. if we can not directly use
				products to set a state as react encapsulates data.{' '}
			</p>
			<p>
				You have an array of products. Each product has a name, price,
				description, etc. How will you implement a search to find products by
				name?{}
			</p>
			<p>
				Answer: I will use filter which will return an array of the name of the
				products
			</p>
			<p>What is a unit test? Why should write unit tests?</p>
			<p>
				Answer: Unit testing is testing a program's individual components that
				can be isolated from rest of the program. We should write unit testing
				because it ensures all code meets the quality standards before it is
				deployed.
			</p>
		</div>
	)
}

export default Blog
