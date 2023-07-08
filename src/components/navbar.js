import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<h2 className="brand-name">
				<Link to="/">HollyFlavor</Link>
			</h2>
			<ul className="nav-links">
				<li><Link to="/">home</Link></li>
				<li><Link to="about">about</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar