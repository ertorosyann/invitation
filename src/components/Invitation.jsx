import '../styles/Invitation.css'

const Invitation = () => {
  return (
    <section className="invitation">
      <div className="invitation__background">
        <img 
          src="https://static.tildacdn.one/tild3437-6138-4037-a231-303931333062/Arca_gold_-_Copy.svg"
          alt="Decorative background"
          className="invitation__bg-image"
        />
      </div>
      
      <div className="invitation__content container">
        <div className="invitation__icon bounce-animation">
          <img 
            src="https://static.tildacdn.one/tild3330-3664-4637-b664-616633616233/Stop.svg"
            alt="Music play"
            className="invitation__music-icon play-icon"
          />
          <img 
            src="https://static.tildacdn.one/tild3131-6131-4462-b966-646435363265/Play.svg"
            alt="Music stop"
            className="invitation__music-icon stop-icon"
          />
        </div>
        
        <h2 className="invitation__title text-fade-in">
          Բարեկամներ &amp;ընկերներ
        </h2>
        
        <p className="invitation__text text-fade-in">
          Մեր կյանքում կարևոր իրադարձություն է սպասվում՝ մենք ընտանիք ենք կազմում և ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի լուսավոր օրը։
          <br /><br />
          Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին։
        </p>
      </div>
    </section>
  )
}

export default Invitation

