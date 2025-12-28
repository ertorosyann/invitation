import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__credits">Կայքը պատրաստել է</p>
        
        <a href="/" className="footer__logo-link">
          <img 
            src="https://static.tildacdn.one/tild3536-6432-4261-b564-333765613130/hraver_logo_centre.svg"
            alt="Hraver.am"
            className="footer__logo"
          />
        </a>

        <div className="footer__copyright">
          <p className="footer__warning-title">Ուշադրություն</p>
          <p className="footer__warning-text">
            Այս կայքի բոլոր նյութերը ունեն հեղինակային իրավունք (ներառյալ դիզայնը). 
            Արգելվում է տեղեկատվության և դետալների պատճենումը, տարածումը կամ ցանկացած այլ օգտագործում՝ 
            առանց հեղինակային իրավունքի սեփականատիրոջ նախնական համաձայնության:
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

