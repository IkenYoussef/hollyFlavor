import React, {
	useContext,
	createContext,
	useState,
	useCallback
} from 'react'

const origin = 
 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const appContext = createContext(null)

const AppProvider = ({children}) => {
	// states values
	const [url, setUrl] = useState(origin)
	const [preserved, setPreserved] = useState('')

	// getInfo + useCallback
	const getInfo = useCallback((data) => {
		const cocktails = data.drinks || []
		const newCocktails = cocktails.map(drink => {
			// ingredients
			const drinkAsArray = Object.entries(drink)
			const drinkIngredients =
			 drinkAsArray.filter(([key, value]) => {
			 	return key.includes('strIngredient') && value
			 }).flat(100).filter(ingredient => {
			 	return !ingredient.includes('strIngredient')
			 }).join(', ');
			 
			const {
				idDrink,
				strDrink,
				strCategory,
				strAlcoholic,
				strGlass,
				strInstructions,
				strDrinkThumb
			} = drink
			return {
				id: idDrink,
				name: strDrink,
				category: strCategory,
				alcoholic: strAlcoholic,
				glass: strGlass,
				instructions: strInstructions,
				image: strDrinkThumb,
				ingredients: drinkIngredients
			}
		})
		return newCocktails
	}, [])
	
	// updateUrl
	const updateUrl = (value) => {
		setUrl(origin + value)
		setPreserved(value)
	}

	return (
		<appContext.Provider value={{
			updateUrl,
			url,
			getInfo,
			preserved
		}}>
			{children}
		</appContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(appContext)
}

export default AppProvider