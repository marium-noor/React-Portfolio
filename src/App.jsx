import React from 'react'
import HeroPortfolio from './components/HeroPortfolio'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Work2 from './components/Work2'
import Footer from './components/Footer'

function App() {
  return (
    <div className='unselectable'>
      <Header />
      <HeroPortfolio />
      <AboutMe />
      <TechStack />
      <Work2 />
      <Footer />
    </div>
  )
}

export default App
