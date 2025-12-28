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
      <div className="invitation__content container">
        {/* <div className="invitation__icon bounce-animation">
          <img 
            src="https://static.tildacdn.one/tild3330-3664-4637-b664-616633616233/Stop.svg"
            alt="Music play"
            className="invitation__music-icon play-icon"
          />
          <img 
            src="https://static.tildacdn.one/tild3131-6131-4462-b966-646435363265/Play.svg"
            alt="Music stop"
            className="invitation__music-icon stop-icon"
          />
        </div> */}
        
        <h2 className="invitation__title text-fade-in">
          Հարսանյաց հրավեր
        </h2>
        
        <h1 className="invitation__names">
          Գարուշ &  Անի
        </h1>

        {/* Countdown Timer */}
        <div className="invitation__countdown">
          <p className="invitation__countdown-title">Հարսանիքին մնաց</p>
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


      
        <h2 className="invitation__title text-fade-in">
          Բարեկամներ & ընկերներ
        </h2>
        
        <p className="invitation__text text-fade-in">
          Մեր կյանքում կարևոր իրադարձություն է սպասվում՝ մենք ընտանիք ենք կազմում և ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի լուսավոր օրը։
          <br /><br /><br /><br /><br /><br />
          Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին։
        </p>
      </div>
    </section>
  )
}

export default Invitation

