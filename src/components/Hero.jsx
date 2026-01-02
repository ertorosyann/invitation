import '../styles/Hero.css'

const Hero = ({ onOpen, isOpening, showContent }) => {
  const handleOpen = () => {
    if (!isOpening) {
      onOpen()
    }
  }

  // Hide hero after content is shown
  if (showContent) {
    return null
  }

  return (
    <div className={`hero ${isOpening ? 'hero--opening' : ''}`}>
      <div className="hero__background">
        <img 
          src="https://static.tildacdn.one/tild3136-6334-4237-b430-383539346665/83e58ccae46ef02c65fa.jpg"
          alt="Background"
          className="hero__bg-image"
        />
      </div>
      
      <div className="hero__content">
        {/* Title */}
        <h1 className="hero__title">
          Հարսանյաց
        </h1>
        <h2 className="hero__title2">
          հրավերք
        </h2>
        
        {/* Envelope container */}
        <div className="hero__envelope-container">
          {/* Envelope main body */}
          <div className="hero__envelope-body"></div>
          
          {/* Envelope top flap (separate image) */}
          <div className="hero__envelope-flap"></div>
          
          {/* Wax seal stamp */}
          <button 
            className="hero__stamp-button"
            onClick={handleOpen}
          >
            <img 
              src="/stamp.webp"
              alt="Open invitation"
              className="hero__stamp"
            />
          </button>
        </div>
        
        {/* Open text */}
        <p 
          className="hero__open-text"
          onClick={handleOpen}
        >
          Բացել
        </p>
        
        {/* Arrow */}
        <svg 
          className="hero__arrow" 
          viewBox="0 0 43.00 21.55" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="var(--primary-color)" 
            d="M21.4076 21.5538C21.4045 21.5538 21.4015 21.5538 21.3984 21.5538C20.4108 21.5511 19.485 21.1632 18.7907 20.4623C12.6288 14.2391 6.467 8.0158 0.3051 1.7926C-0.1039 1.3797 -0.0999 0.7129 0.313 0.3053C0.7259 -0.1037 1.3913 -0.0998 1.8003 0.3132C7.9626 6.5364 14.1249 12.7596 20.2872 18.9829C20.5844 19.284 20.9815 19.4497 21.405 19.451C21.4063 19.451 21.4076 19.451 21.4089 19.451C21.8311 19.451 22.2269 19.2866 22.5241 18.9881C28.7504 12.7614 34.9767 6.5346 41.203 0.3079C41.6133 -0.1024 42.28 -0.1024 42.6903 0.3079C43.1006 0.7182 43.1006 1.3849 42.6903 1.7952C36.464 8.0215 30.2377 14.2478 24.0114 20.4741"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero

