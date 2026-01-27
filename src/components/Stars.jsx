import React from 'react'

function Stars() {
  return (
    <div className="stars-background">
      {/* Small stars */}
      {[...Array(200)].map((_, i) => (
        <div
          key={`small-${i}`}
          className="star star-small"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 4}s`
          }}
        />
      ))}
      {/* Medium stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={`medium-${i}`}
          className="star star-medium"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 3}s`
          }}
        />
      ))}
      {/* Large stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="star star-large"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      ))}
      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="shooting-star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}

export default Stars
