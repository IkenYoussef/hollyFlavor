import React from 'react'
import {useGlobalContext} from '../context'
import {useFetch} from '../useFetch'
import Loading from './loading'
import {Link} from 'react-router-dom'

const Drinks = () => {
	const {url, getInfo} = useGlobalContext()
	const {data, loading, error} = useFetch(url)

	// getting drinks
	const drinks = getInfo(data)
	// in case loading
	if (loading) {
		return <Loading/>
	}

	if (error) {
		return <section className="drinks-error">
			<h3>sorry! couldn't load cocktails...</h3>
		</section>
	}


	return (
		<section className="drinks">
			{
				drinks.length
				?	
				drinks.map(drink => {
					const {
						name,
						id,
						image,
						alcoholic,
						glass
					} = drink
					return <article key={id} className="drink">
						<img src={image} alt={name} />
						<h2 className="name">{name}</h2>
						<p className="glass">{glass}</p>
						<h4 className="alcoholic">
							{alcoholic}
						</h4>
						<button className="details-btn">
							<Link to={`cocktails/${id}`}>Details</Link>
						</button>
					</article>
				})
				:
				<h3 className="empty">
					no matching cocktails found...
				</h3>
			}
		</section>
	)
}

export default React.memo(Drinks)