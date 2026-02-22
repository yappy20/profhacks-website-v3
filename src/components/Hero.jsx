import React from 'react'

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
        <div className="hero-date-time">
          <span className="hero-date">March 20–21, 2026</span>
          <span className="hero-checkin">Check-in: 5:00 PM – 6:30 PM</span>
        </div>
        <div className="hero-buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdumgUNuPOQbM0TsbCS0n6mQSwiDPvM8ZVfbzNFh5x118El0g/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            🚀 Register Now
          </a>
          <a href="#schedule" className="btn btn-secondary">
            📅 Schedule
          </a>
        </div>
        <p className="hero-volunteer">
          Don&apos;t wanna hack?{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4Hq7LqJCgmp-SYuQfYS0gp60PtkUVEjKHQNWHBEXvrSzwwQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            Volunteer
          </a>
        </p>
        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default Hero

