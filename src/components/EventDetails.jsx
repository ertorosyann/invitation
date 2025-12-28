import '../styles/EventDetails.css'

const EventDetails = () => {
  return (
    <section className="event-details">
      <div className="container">
        {/* Date */}
        <div className="event-details__date">
          <h2 className="event-details__date-text">17 Փետրվարի 2026</h2>
        </div>

        {/* Ceremony */}
        <div className="event-details__event">
          <h3 className="event-details__time">14։30</h3>
          <div className="event-details__info">
            <h4 className="event-details__name">Պսակադրություն</h4>
            <p className="event-details__venue">Սբ. Գայանե</p>
            <p className="event-details__address">
              Արմավիրի մարզ,<br />
              ք․ Էջմիածին
            </p>
          </div>
          <a 
            href="https://yandex.com/maps/-/CLH~7VMC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="event-details__directions-btn"
          >
            Ինչպես հասնել
          </a>
        </div>

        <div className="event-details__divider" />

        {/* Reception */}
        <div className="event-details__event">
          <h3 className="event-details__time">17։30</h3>
          <div className="event-details__info">
            <h4 className="event-details__name">Հարսանյաց հանդիսություն</h4>
            <p className="event-details__venue">Morena ռեստորան</p>
            <p className="event-details__address">
              ք․ Մասիս, Մխիթար Հերացի 7/8
            </p>
          </div>
          <a 
            href="https://yandex.com/maps/-/CLH~76iI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="event-details__directions-btn"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>
    </section>
  )
}

export default EventDetails

