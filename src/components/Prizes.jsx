import React from 'react'

function Prizes() {
  const prizes = [
    { 
      rank: '1st Place', 
      reward: 'TBD', 
      icon: '🥇',
      color: '#256EFF',
      description: 'Grand Prize'
    },
    { 
      rank: '2nd Place', 
      reward: 'TBD', 
      icon: '🥈',
      color: '#3DDC97',
      description: 'Runner Up'
    },
    { 
      rank: '3rd Place', 
      reward: 'TBD', 
      icon: '🥉',
      color: '#46237A',
      description: 'Third Place'
    },
  ].slice(0, 3) // Explicitly limit to 3 prizes

  return (
    <section id="prizes" className="prizes">
      <h2 className="section-title">The Bounty</h2>
      {/* HMR test - if you see this comment, HMR is working */}
      <div className="prizes-grid">
        {prizes
          .filter(prize => {
            // Explicitly exclude BEST DESIGN prize
            const rank = (prize.rank || '').toLowerCase();
            const description = (prize.description || '').toLowerCase();
            const reward = (prize.reward || '').toLowerCase();
            const color = (prize.color || '').toLowerCase();
            const icon = prize.icon || '';
            
            if (rank.includes('best design') || 
                rank.includes('design') ||
                description.includes('most creative') ||
                description.includes('creative') ||
                reward.includes('best design') ||
                color.includes('cowboy-orange') ||
                icon.includes('🎨')) {
              return false;
            }
            return true;
          })
          .slice(0, 3) // Force limit to 3 prizes maximum
          .map((prize, index) => (
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

