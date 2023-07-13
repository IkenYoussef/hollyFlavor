import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => { 
	return (
		<nav className="navbar">
			<h2 className="brand-name">
				<Link to="/">HollyFlavor</Link>
			</h2>
			<ul 
				className="nav-links"
			>
				<li>
				<NavLink className="nav-link" to="/">
					home
				</NavLink>
				</li>
				<li>
				<NavLink className="nav-link" to="about">
					about
				</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar