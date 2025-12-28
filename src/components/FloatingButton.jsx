// import { useState, useEffect } from 'react'
// import '../styles/FloatingButton.css'

// const FloatingButton = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show button after scrolling 100px
//       setIsVisible(window.scrollY > 100)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const scrollToOrder = () => {
//     const orderSection = document.getElementById('order')
//     if (orderSection) {
//       orderSection.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <button 
//       className={`floating-button ${isVisible ? 'visible' : ''}`}
//       onClick={scrollToOrder}
//       aria-label="Order invitation"
//     >
//       Արժեքը 36․900 դրամ
//     </button>
//   )
// }

// export default FloatingButton

