import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import EventDetails from './components/EventDetails'
import RSVPForm from './components/RSVPForm'
import Gallery from './components/Gallery'
// import Footer from './components/Footer'
import BackgroundMusic from './components/BackgroundMusic'
// import FloatingButton from './components/FloatingButton'
import './styles/App.css'

function App() {
  const [isOpening, setIsOpening] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [currentBgIndex, setCurrentBgIndex] = useState(0)

  // Background images from garush folder
  const backgroundImages = [
    '/garush/1.JPG',
    '/garush/2.JPG',
    '/garush/3.JPG'
  ]

  // Auto-rotate background images
  useEffect(() => {
    if (!showContent) return

    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [showContent, backgroundImages.length])

  const handleOpen = () => {
    setIsOpening(true)
    // Smooth transition with fade out effect
    setTimeout(() => {
      setShowContent(true)
    }, 800) // Quick smooth transition
  }

  return (
    <div className="app">
      <BackgroundMusic shouldAutoPlay={isOpening} />
      
      <Hero onOpen={handleOpen} isOpening={isOpening} showContent={showContent} />
      
      {showContent && (
        <main className="main-content main-content--fade-in">
          {/* Background slideshow */}
          <div className="main-content__background">
            {backgroundImages.map((img, index) => (
              <div
                key={img}
                className={`main-content__bg-image ${index === currentBgIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
          <div className="main-content__wrapper ">
             <Invitation />
             <EventDetails />
             <RSVPForm />
             <Gallery />
          </div>
        </main>
      )}
    </div>
  )
}

export default App

