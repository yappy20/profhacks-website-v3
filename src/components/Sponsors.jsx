import React from 'react'

function Sponsors() {
  const sponsors = [
    { name: 'Rowan IEEE', tier: 'Platinum' },
    { name: 'Red Bull', tier: 'Gold' },
    { name: 'ECE Department', tier: 'Silver' },
  ]

  return (
    <section id="sponsors" className="sponsors">
      <h2 className="section-title">Our Partners</h2>
      <p className="sponsors-intro">
        Special thanks to our galactic partners who make this mission possible!
      </p>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <div className="sponsor-tier">{sponsor.tier}</div>
            <div className={`sponsor-name ${sponsor.name === 'ECE Department' ? 'ece-small' : ''}`}>
              {sponsor.name === 'ECE Department' ? (
                <>
                  <div style={{ display: 'block' }}>ECE</div>
                  <div style={{ display: 'block' }}>DEPARTMENT</div>
                </>
              ) : (
                sponsor.name
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors

