import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="stars-background">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
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

