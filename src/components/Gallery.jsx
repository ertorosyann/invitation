import '../styles/Gallery.css'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container"> 
        <img 
          src="/verj.svg" 
          alt="Decorative" 
          className="gallery__decorative-svg"
        />
        <h2 className="gallery__title">Սպասում ենք Ձեզ</h2>
      </div>
    </section>
  )
}

export default Gallery

