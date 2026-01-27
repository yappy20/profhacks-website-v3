import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">ProfHacks 2026</span>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#schedule" onClick={() => setMenuOpen(false)}>Schedule</a></li>
          <li><a href="#prizes" onClick={() => setMenuOpen(false)}>Prizes</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

