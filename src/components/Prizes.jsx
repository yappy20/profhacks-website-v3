import React from 'react'
import './Prizes.css'

function Prizes() {
  const prizes = [
    { 
      rank: '1st Place', 
      reward: 'TBD', 
      icon: '🥇',
      color: 'var(--cowboy-gold)',
      description: 'Grand Prize'
    },
    { 
      rank: '2nd Place', 
      reward: 'TBD', 
      icon: '🥈',
      color: 'var(--neon-purple)',
      description: 'Runner Up'
    },
    { 
      rank: '3rd Place', 
      reward: 'TBD', 
      icon: '🥉',
      color: 'var(--neon-blue)',
      description: 'Third Place'
    },
  ]

  return (
    <section id="prizes" className="prizes">
      <h2 className="section-title">The Bounty</h2>
      <div className="prizes-grid">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card" style={{ '--prize-color': prize.color }}>
            <div className="prize-icon">{prize.icon}</div>
            <div className="prize-rank">{prize.rank}</div>
            <div className="prize-reward">{prize.reward}</div>
            <div className="prize-description">{prize.description}</div>
          </div>
        ))}
      </div>
      <p className="prizes-note">
        Plus swag, mentorship, and eternal glory in the space cowboy hall of fame!
      </p>
    </section>
  )
}

export default Prizes

