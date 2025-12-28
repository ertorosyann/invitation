import { useState, useRef, useEffect } from 'react'
import '../styles/BackgroundMusic.css'

const BackgroundMusic = ({ shouldAutoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4
    }
  }, [])

  // Auto-play when triggered from Hero
  useEffect(() => {
    if (shouldAutoPlay && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(error => {
          console.log('Auto-play prevented by browser:', error)
        })
    }
  }, [shouldAutoPlay])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source 
          src="https://dl.dropbox.com/scl/fi/2pudzzpkhy5w546f9hbpa/N42.mp3?rlkey=2sdw25frgk6m7nn5pj1aw2hpd&st=89bb3vwx&dl=0"
          type="audio/mpeg"
        />
      </audio>

      <button 
        className={`music-control ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <img 
            src="https://static.tildacdn.one/tild3330-3664-4637-b664-616633616233/Stop.svg"
            alt="Stop music"
          />
        ) : (
          <img 
            src="https://static.tildacdn.one/tild3131-6131-4462-b966-646435363265/Play.svg"
            alt="Play music"
          />
        )}
      </button>
    </>
  )
}

export default BackgroundMusic

