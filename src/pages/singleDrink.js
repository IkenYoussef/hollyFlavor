import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useGlobalContext} from '../context'
import {useFetch} from '../useFetch'
import Loading from '../components/loading'
const origin = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleDrink = () => {
	const {id} = useParams(null)
	const {loading, error, data} = useFetch(origin + id)
	const {getInfo} = useGlobalContext()

	if (loading) {
		return <Loading/>
	}

	if (error) {
		return <section className="single-drink-error">
			<h3>sorry! couldn't load cocktail...</h3>
			<button className="home-btn btn">
				<Link to="/">Back Home</Link>
			</button>
		</section>
	}

	const {
		name,
		image,
		alcoholic,
		glass,
		instructions,
		ingredients,
		category
	} = getInfo(data)[0]

	return (
		<section className="single-drink-page">
			<button className="home-btn btn">
				<Link to="/">Back Home</Link>
			</button>
			<h2 className="name">{name}</h2>
			<div className="single-drink">
				<img src={image} alt={name}/>
				<article className="single-drink-info">
					<aside className="property">
						<h3 className="prop-name">
							name :
						</h3>
						<h3 className="prop-value">
							{name}
						</h3>
					</aside>
					<aside className="property">
						<h3 className="prop-name">
							category :
						</h3>
						<h3 className="prop-value">
							{category}
						</h3>
					</aside>
					<aside className="property">
						<h3 className="prop-name">
							info :
						</h3>
						<h3 className="prop-value">
							{alcoholic}
						</h3>
					</aside>
					<aside className="property">
						<h3 className="prop-name">
							glass :
						</h3>
						<h3 className="prop-value">
							{glass}
						</h3>
					</aside>
					<aside className="property">
						<h3 className="prop-name">
							ingredients :
						</h3>
						<h3 className="prop-value">
							{ingredients}
						</h3>
					</aside>
					<aside className="property">
						<h3 className="prop-name">
							instructions :
						</h3>
						<h3 className="prop-value">
							{instructions}
						</h3>
					</aside>
				</article>
			</div>
		</section>
	)
}

export default SingleDrink