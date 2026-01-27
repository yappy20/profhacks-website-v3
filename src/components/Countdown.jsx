import React, { useState, useEffect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Calculate 10 days from today
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 10)
    targetDate.setHours(23, 59, 59, 999) // Set to end of day

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateCountdown()

    // Update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">Registration Opens In</h3>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{timeLeft.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
