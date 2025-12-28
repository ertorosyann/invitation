import { useState } from 'react'
import '../styles/RSVPForm.css'

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    side: '',
    name: '',
    attendance: 'Մենք կգանք',
    guestCount: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.side) newErrors.side = 'Խնդրում ենք ընտրել կողմը'
    if (!formData.name.trim()) newErrors.name = 'Խնդրում ենք լրացնել անունը'
    if (formData.attendance === 'Մենք կգանք' && !formData.guestCount.trim()) {
      newErrors.guestCount = 'Խնդրում ենք նշել հյուրերի թիվը'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        side: '',
        name: '',
        attendance: 'Մենք կգանք',
        guestCount: ''
      })
    }, 3000)
  }

  if (submitted) {
    return (
      <section className="rsvp-form">
        <div className="container">
          <div className="rsvp-form__success">
            <h2>Շնորհակալություն</h2>
            <p>Ձեր պատասխանը հաջողությամբ ուղարկվել է</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="rsvp-form" id="rsvp">
      <div className="container">
        <h2 className="rsvp-form__title">
          Շնորհակալ կլինենք,<br />
          եթե հաստատեք Ձեր ներկայությունը<br />
          <span className="rsvp-form__subtitle">մինչև 01.09.2025</span>
        </h2>

        <form onSubmit={handleSubmit} className="rsvp-form__form">
          {/* Side Selection */}
          <div className="rsvp-form__field">
            <div className="rsvp-form__radio-group">
              <label className="rsvp-form__radio">
                <input
                  type="radio"
                  name="side"
                  value="Հարսի կողմ"
                  checked={formData.side === 'Հարսի կողմ'}
                  onChange={handleChange}
                />
                <span className="rsvp-form__radio-indicator"></span>
                <span>Հարսի կողմ</span>
              </label>
              <label className="rsvp-form__radio">
                <input
                  type="radio"
                  name="side"
                  value="Փեսայի կողմ"
                  checked={formData.side === 'Փեսայի կողմ'}
                  onChange={handleChange}
                />
                <span className="rsvp-form__radio-indicator"></span>
                <span>Փեսայի կողմ</span>
              </label>
            </div>
            {errors.side && <span className="rsvp-form__error">{errors.side}</span>}
          </div>

          {/* Name Input */}
          <div className="rsvp-form__field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Անուն Ազգանուն"
              className="rsvp-form__input"
            />
            {errors.name && <span className="rsvp-form__error">{errors.name}</span>}
          </div>

          {/* Attendance */}
          <div className="rsvp-form__field">
            <div className="rsvp-form__radio-group">
              <label className="rsvp-form__radio">
                <input
                  type="radio"
                  name="attendance"
                  value="Մենք կգանք"
                  checked={formData.attendance === 'Մենք կգանք'}
                  onChange={handleChange}
                />
                <span className="rsvp-form__radio-indicator"></span>
                <span>Մենք կգանք</span>
              </label>
              <label className="rsvp-form__radio">
                <input
                  type="radio"
                  name="attendance"
                  value="Չենք կարող գալ :("
                  checked={formData.attendance === 'Չենք կարող գալ :('}
                  onChange={handleChange}
                />
                <span className="rsvp-form__radio-indicator"></span>
                <span>Չենք կարող գալ :(</span>
              </label>
            </div>
          </div>

          {/* Guest Count - conditional */}
          {formData.attendance === 'Մենք կգանք' && (
            <div className="rsvp-form__field slide-down">
              <input
                type="text"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="Հյուրերի թիվ"
                className="rsvp-form__input"
              />
              {errors.guestCount && <span className="rsvp-form__error">{errors.guestCount}</span>}
            </div>
          )}

          <button type="submit" className="rsvp-form__submit">
            Ուղարկել
          </button>
        </form>
      </div>
    </section>
  )
}

export default RSVPForm

