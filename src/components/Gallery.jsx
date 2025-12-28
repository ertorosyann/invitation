import '../styles/Gallery.css'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__decorative-bg">
          <img 
            src="https://static.tildacdn.one/tild6264-6538-4465-b730-306437336133/Arca_gold_-_Copy_-_C.svg"
            alt="Decorative"
            className="gallery__bg-image"
          />
        </div>
        
        <h2 className="gallery__title">Սպասում ենք Ձեզ</h2>
        
        <div className="gallery__image-container fade-in-up">
          <img 
            src="https://static.tildacdn.one/tild3663-6430-4166-b535-633132313433/d6de6d354ecba2ae00d5.jpg"
            alt="Wedding couple"
            className="gallery__main-image"
          />
        </div>

        <svg className="gallery__arrow bounce" viewBox="0 0 43.00 21.55" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="var(--primary-color)" 
            d="M21.4076 21.5538C21.4045 21.5538 21.4015 21.5538 21.3984 21.5538C20.4108 21.5511 19.485 21.1632 18.7907 20.4623C12.6288 14.2391 6.467 8.0158 0.3051 1.7926C-0.1039 1.3797 -0.0999 0.7129 0.313 0.3053C0.7259 -0.1037 1.3913 -0.0998 1.8003 0.3132C7.9626 6.5364 14.1249 12.7596 20.2872 18.9829C20.5844 19.284 20.9815 19.4497 21.405 19.451C21.4063 19.451 21.4076 19.451 21.4089 19.451C21.8311 19.451 22.2269 19.2866 22.5241 18.9881C28.7504 12.7614 34.9767 6.5346 41.203 0.3079C41.6133 -0.1024 42.28 -0.1024 42.6903 0.3079C43.1006 0.7182 43.1006 1.3849 42.6903 1.7952C36.464 8.0215 30.2377 14.2478 24.0114 20.4741"
          />
        </svg>
      </div>
    </section>
  )
}

export default Gallery

