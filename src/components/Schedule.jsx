import React from 'react'

function Schedule() {
  const schedule = [
    { day: 'Day 1', time: '5:00 PM - 6:30 PM', event: 'Check-in', icon: '📋' },
    { day: 'Day 1', time: '7:00 PM - 7:30 PM', event: 'Opening Ceremony', icon: '🚀' },
    { day: 'Day 1', time: '7:30 PM', event: 'Hacking Begins!', icon: '⚡' },
    { day: 'Day 2', time: '7:30 AM', event: 'Hacking Ends - Submissions Close', icon: '⏰' },
    { day: 'Day 2', time: '8:00 AM', event: 'Judging & Demos', icon: '🏆' },
    { day: 'Day 2', time: '9:00 AM', event: 'Awards Ceremony', icon: '🎉' },
  ]

  return (
    <section id="schedule" className="schedule">
      <h2 className="section-title">Mission Timeline</h2>
      <div className="schedule-container">
        <div className="timeline">
          {schedule.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-day">{item.day}</div>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-event">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule

