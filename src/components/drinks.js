import React from 'react'
import {useGlobalContext} from '../context'
import {useFetch} from '../useFetch'
import Loading from './loading'
import {Link} from 'react-router-dom'

const Drinks = () => {
	const {url, getInfo, updateUrl} = useGlobalContext()
	const {data, loading, error} = useFetch(url)

	// getting drinks
	const drinks = getInfo(data)
	
	// in case loading
	if (loading) {
		return <Loading/>
	}

	// in case error
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
						<div className="photo-container">
							<img src={image} alt={name} />
						</div>
						<div className="info-wrap">
							<h2 className="name">{name}</h2>
							<p className="glass">{glass}</p>
							<p className="alcoholic">
								{alcoholic}
							</p>
							<button className="details-btn btn">
								<Link to={`cocktails/${id}`}>Details</Link>
							</button>
						</div>
					</article>
				})
				:
				<section className="empty">
					<h3>
						no matching cocktails found...
					</h3>
					<button 
						onClick={()=> updateUrl('')} 
						className="re-fetch btn"
					>
						Show Cocktails
					</button>
				</section>
			}
		</section>
	)
}

export default React.memo(Drinks)