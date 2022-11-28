import './App.css';
import housefooter from "./Imagenes/housefooter.png";
import facebook from "./Imagenes/facebook.png";
import twitter from "./Imagenes/twitter.png";
import instagram from "./Imagenes/instagram.png";
import whatsapp from "./Imagenes/whatsapp.png";
import Card from "./Componentes/Card.js"
import Items from './Componentes/ObjetoCard.js';

function App() {
  return (
    <div className="App">
      <header className="header">  
        <img
          src={housefooter}
          className="house"
          alt= "Logo"
        />
        <div className="text-header">
        How-We-Work
        Services
        Free-Quote
        Contact
        </div>
      </header>

      <main className="principal">
        <h1>What items to store?</h1>
        <p>Select which items you wish to store before moving to</p>
        <p>your new home. We will keep them safe!</p>
        <div className="tarjetas">
          <Card
            nombre={Items[0].nombre}
            imagen={Items[0].imagen}
            descripcionImagen={Items[0].descripcionImagen}
          />
          <Card
            nombre={Items[1].nombre}
            imagen={Items[1].imagen}
            descripcionImagen={Items[1].descripcionImagen}
          />
          <Card
            nombre={Items[2].nombre}
            imagen={Items[2].imagen}
            descripcionImagen={Items[2].descripcionImagen}
          />
          <Card
            nombre={Items[3].nombre}
            imagen={Items[3].imagen}
            descripcionImagen={Items[3].descripcionImagen}
          />
          <Card
            nombre={Items[4].nombre}
            imagen={Items[4].imagen}
            descripcionImagen={Items[4].descripcionImagen}
          />
          <Card
            nombre={Items[5].nombre}
            imagen={Items[5].imagen}
            descripcionImagen={Items[5].descripcionImagen}
          />
          <Card
            nombre={Items[6].nombre}
            imagen={Items[6].imagen}
            descripcionImagen={Items[6].descripcionImagen}
          />
          <Card
            nombre={Items[7].nombre}
            imagen={Items[7].imagen}
            descripcionImagen={Items[7].descripcionImagen}
          />
          <Card
            nombre={Items[8].nombre}
            imagen={Items[8].imagen}
            descripcionImagen={Items[8].descripcionImagen}
          />
          <Card
            nombre={Items[9].nombre}
            imagen={Items[9].imagen}
            descripcionImagen={Items[9].descripcionImagen}
          />
        </div>
        <div className="botonesC">
          <button className="clear">
            Clear
          </button>
          <button className="calculate">
            Calculate
          </button>
        </div>
        <h2>Summary</h2>
        <div className="summary">
           <p>Total items:  X</p>
           <p>Total M<sup>2</sup>:  X</p>
           <p>Subtotal: X</p>
           <p>Tax:  X</p>
           <p><b>Total:  X</b></p>
           <p><b>Due today 50%:  X</b></p>
        </div>
      </main>
  
      <footer className="footer">
        <div className="general-data">
          <div>
            <img
              src={housefooter}
              className="house"
              alt= "Logo"
            />
            <p className="txt">
              It is a long established fact that a 
              reader will be distracted by the
              readable content of a page
              whenters.
            </p>
            <div className="socialmedia">
              <div className="border">
                <img
                  src={twitter}
                  className="twitter"
                  alt= "Logo-twitter"
                />
              </div>
              <div className="border">
              <img
                src={facebook}
                className="facebook"
                alt= "Logo-facebook"
              />
              </div>
              <div className="border">
              <img
                src={instagram}
                className="instagram"
                alt= "Logo-instagram"
              />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footertitles"><p>About US</p></div>
          <p>About</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
          <p>Faq</p>
        </div>
        <div>
          <div className="footertitles"><p>Navigate</p></div>
          <p>How we work</p>
          <p>Services</p>
          <p>Faq</p>
          <p>Contact</p>
          <p>Free Quote</p>
        </div>
        <div>
          <div className="footertitles"><p>Contact Us</p></div>
          <p>Ricardo Margain 44</p>
          <p>Call: +52 81 1234 5678</p>
          <p>Email: info@challenge.com</p>
          <img
            src={whatsapp}
            className="Whatsapp"
            alt="Logo-whatsapp"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
