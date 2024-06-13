import React from 'react'
import HeroPortfolio from './components/HeroPortfolio'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className='unselectable'>
      <Header />
      <HeroPortfolio />
      <AboutMe />
      <TechStack />
      <Work />
      <Footer />
    </div>
  )
}

export default App
