import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import Stars from './components/Stars'

function App() {
  return (
    <div className="app">
      <Stars />
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Prizes />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App

