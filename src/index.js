import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
import './index.css'
import AppProvider from './context'

const node = document.getElementById('root')
const root = ReactDOM.createRoot(node)

root.render(
	<AppProvider>
		<App/>
	</AppProvider>
)