import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
	return (
		<section className="error-page">
			<h2>Oops!</h2>
			<p>We can't seem to find the page you're looking for</p>
			<button className="home-btn btn">
				<Link to="/">Back Home</Link>
			</button>
		</section>
	)
}

export default ErrorPage