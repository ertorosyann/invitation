import { useState } from 'react'
import '../styles/RSVPForm.css'

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    side: '',
    name: '',
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
    if (!formData.guestCount.trim()) {
      newErrors.guestCount = 'Խնդրում ենք նշել հյուրերի թիվը'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      // Send data to backend server
      // Use .env variable if exists, otherwise fallback to localhost
      const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3002'
      const API_URL = `${baseURL}/api/rsvp`
      
      console.log('🔗 API URL:', API_URL) // Debug log
      console.log('📝 VITE_API_URL:', import.meta.env.VITE_API_URL) // Shows what's in .env
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        console.log('✅ RSVP saved to Excel!', result)
        setSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            side: '',
            name: '',
            guestCount: ''
          })
        }, 3000)
      } else {
        console.error('❌ Failed to save RSVP:', result.message)
        setErrors({ submit: 'Սխալ է տեղի ունեցել. Խնդրում ենք փորձել նորից' })
      }

    } catch (error) {
      console.error('❌ Network error:', error)
      setErrors({ submit: 'Սերվերի հետ կապի խնդիր. Ստուգեք ինտերնետը' })
    }
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

  if (submitted) {
    return (
      <section className="rsvp-form">
        <div className="container">
          <div className="rsvp-form__success">
            <h2>Շնորհակալություն</h2>
            <p>Ձեր պատասխանը հաջողությամբ պահպանվել է Excel ֆայլում</p>
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
          եթե հաստատեք Ձեր ժամանումը<br />
          <span className="rsvp-form__subtitle">մինչև 10.02.2026</span>
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

          {/* Guest Count */}
          <div className="rsvp-form__field">
            <input
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="Հյուրերի թիվ"
              min="1"
              className="rsvp-form__input"
            />
            {errors.guestCount && <span className="rsvp-form__error">{errors.guestCount}</span>}
          </div>

          {errors.submit && (
            <div className="rsvp-form__error rsvp-form__error--submit">
              {errors.submit}
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

