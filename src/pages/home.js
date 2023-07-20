import React, {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
import Drinks from '../components/drinks'

const Home = () => {
	const {updateUrl, preserved} = useGlobalContext()

	// state values
	const [value, setValue] = useState(preserved)
	const [isSurpassed, setIsSurpassed] = useState(false)

	// functions
	const handleChange = (e) => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		updateUrl(value)
	}

	const backTop = () => {
		window.scrollTo(0, 0)
	}

	// useEffect
	useEffect(()=> {
		window.addEventListener('scroll', () => {
			const offset = window.pageYOffset
			if (offset > 214) {
				setIsSurpassed(true)
			}else {
				setIsSurpassed(false)
			}
		})
	},[])

	return (
		<main className="page-container">
			<section className="home">
				<form 
					className="search-box" 
					onSubmit={handleSubmit}
				>
					<input 
						className="search-field"
						type="search"
						value={value} 
						onChange={handleChange}
					/>
					<button type="submit" className="search-btn btn">
						Search
					</button>
				</form>
				<Drinks/>
			</section>
			<button 
				className = {
					`back-top ${isSurpassed && 'show-back-top'}`
				}
				onClick={backTop}
			>
				<BsFillArrowUpSquareFill/>
			</button>
		</main>
	)
}

export default Home