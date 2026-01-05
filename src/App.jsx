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
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Background images - low quality thumbnails and high quality
  const backgroundImages = [
    {
      thumb: '/garush/thumb-1.JPG',
      full: '/garush/optimized-1.JPG'
    },
    {
      thumb: '/garush/thumb-2.JPG',
      full: '/garush/optimized-2.JPG'
    },
    {
      thumb: '/garush/thumb-3.JPG',
      full: '/garush/optimized-3.JPG'
    }
  ]

  // Preload high-quality images in background
  useEffect(() => {
    let loadedCount = 0
    const totalImages = backgroundImages.length

    backgroundImages.forEach((imageSet) => {
      const img = new Image()
      img.src = imageSet.full
      img.onload = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
          console.log('✅ All high-quality images loaded!')
        }
      }
    })
    console.log('⏳ Loading high-quality images in background...')
  }, [])

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
          {/* Background slideshow - Progressive loading */}
          <div className="main-content__background">
            {backgroundImages.map((imageSet, index) => (
              <div
                key={index}
                className={`main-content__bg-image ${index === currentBgIndex ? 'active' : ''}`}
                style={{ 
                  backgroundImage: `url(${imagesLoaded ? imageSet.full : imageSet.thumb})`,
                  filter: imagesLoaded ? 'none' : 'blur(20px)'
                }}
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

