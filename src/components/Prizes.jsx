import React from 'react'

function Prizes() {
  const prizes = [
    { 
      rank: 'Galactic Games', 
      reward: '2 PS5s & 2 Sony Headphones', 
      icon: '🥇',
      color: '#256EFF',
      description: 'Track 1'
    },
    { 
      rank: 'Tools of the Frontier', 
      reward: 'Mechanical Keyboards', 
      icon: '🥈',
      color: '#3DDC97',
      description: 'Track 2'
    },
    { 
      rank: 'Outlaws & Automation', 
      reward: 'Selected Lego Sets', 
      icon: '🥉',
      color: '#9D4EDD',
      description: 'Track 3'
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
            <div key={index} className={`prize-card ${index === 2 ? 'prize-card-track3' : ''}`} style={{ '--prize-color': prize.color }}>
              <div className="prize-description">{prize.description}</div>
              <div className="prize-rank">{prize.rank}</div>
              <div className="prize-reward">{prize.reward}</div>
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

