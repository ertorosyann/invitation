import '../styles/EventDetails.css'

const EventDetails = () => {
  return (
    <section className="event-details">
      <div className="container">
        {/* Date */}
        <div className="event-details__date">
          <h2 className="event-details__date-text">12 Հուլիսի 2026</h2>
        </div>

        {/* Ceremony */}
        <div className="event-details__event">
          <h3 className="event-details__time">14։30</h3>
          <div className="event-details__info">
            <h4 className="event-details__name">Պսակադրություն</h4>
            <p className="event-details__venue">Սաղմոսավանք</p>
            <p className="event-details__address">
              Արագածոտնի մարզ,<br />
              գ․ Սաղմոսավան
            </p>
          </div>
          <a 
            href="https://maps.app.goo.gl/Kfd5L7bS6TjRJoVe6" 
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
            <p className="event-details__venue">Florence ռեստորան</p>
            <p className="event-details__address">
              ք․ Երևան․ Բարբյուսի 64/2
            </p>
          </div>
          <a 
            href="https://maps.app.goo.gl/2z3WGE6uuS24c6LaA" 
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

