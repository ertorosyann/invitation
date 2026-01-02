import { useState, useEffect } from 'react'
import '../styles/Invitation.css'

const Invitation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-02-17T00:00:00')
      const now = new Date()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="invitation">
      <div className="invitation__content">
        
        <h1 className="invitation__names">
          Գարուշ  և Անի
        </h1>

        {/* Countdown Timer */}
        <div className="invitation__countdown">
          {/* <p className="invitation__countdown-title">Հարսանիքին մնաց</p> */}
          <p className="invitation__text text-fade-in">
              Հարգելի’ հարազատներ, բարեկամներ և ընկերներ
              Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց արարողությանը
              Հարսանիքին մնացել է
            <br /><br /><br />
          </p>
          <div className="invitation__countdown-timer">
            <div className="invitation__countdown-item">
              <span className="invitation__countdown-number">{timeLeft.days}</span>
              <span className="invitation__countdown-label">օր</span>
            </div>
            <div className="invitation__countdown-item">
              <span className="invitation__countdown-number">{timeLeft.hours}</span>
              <span className="invitation__countdown-label">ժամ</span>
            </div>
            <div className="invitation__countdown-item">
              <span className="invitation__countdown-number">{timeLeft.minutes}</span>
              <span className="invitation__countdown-label">րոպե</span>
            </div>
            <div className="invitation__countdown-item">
              <span className="invitation__countdown-number">{timeLeft.seconds}</span>
              <span className="invitation__countdown-label">վայրկյան</span>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}

export default Invitation

