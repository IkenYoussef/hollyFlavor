import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import ErrorPage from './pages/error'
import SingleDrink from './pages/singleDrink'
import Navbar from './components/navbar'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="cocktails/:id" element={<SingleDrink/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
