import { useState } from 'react'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import EventDetails from './components/EventDetails'
import RSVPForm from './components/RSVPForm'
import Gallery from './components/Gallery'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'
import BackgroundMusic from './components/BackgroundMusic'
// import FloatingButton from './components/FloatingButton'
import './styles/App.css'

function App() {
  const [isOpening, setIsOpening] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    // Smooth transition with fade out effect
    setTimeout(() => {
      setShowContent(true)
    }, 800) // Quick smooth transition
  }

  return (
    <div className="app">
      <BackgroundMusic />
      
      <Hero onOpen={handleOpen} isOpening={isOpening} showContent={showContent} />
      
      {showContent && (
        <main className="main-content main-content--fade-in">
          <Invitation />
          <EventDetails />
          <RSVPForm />
          <Gallery />
          <ContactInfo />
          <Footer />
          {/* <FloatingButton /> */}
        </main>
      )}
    </div>
  )
}

export default App

