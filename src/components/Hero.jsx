import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">ProfHacks</span>
          <span className="title-line">2026</span>
        </h1>
        <p className="hero-subtitle">
          Saddle up, space rangers! The ultimate hackathon adventure awaits in the final frontier.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">
            🚀 Explore
          </a>
          <a href="#schedule" className="btn btn-secondary">
            ⚡ Schedule
          </a>
        </div>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <div className="hero-planets">
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
      </div>
    </section>
  )
}

export default Hero

