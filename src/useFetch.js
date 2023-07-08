import {useEffect, useState} from 'react'
export const useFetch = (url) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const fetchApi = async (url) => {
		setLoading(true)
		setError(false)
		try {
			const response = await fetch(url)
			const data = await response.json()
			setData(data)
			setLoading(false)
		}catch(error) {
			setLoading(false)
			setError(true)
		}
	}
	useEffect(()=> {
		fetchApi(url)
	}, [url])
	return {data, loading, error}
}