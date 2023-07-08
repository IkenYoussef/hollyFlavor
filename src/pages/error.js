import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
	return (
		<section>
			<h2>Oops! it's a Dead End</h2>
			<button className="home-btn">
				<Link to="/">Back Home</Link>
			</button>
		</section>
	)
}

export default ErrorPage