import './App.css';
import housefooter from "./Imagenes/housefooter.png";
import facebook from "./Imagenes/facebook.png";
import twitter from "./Imagenes/twitter.png";
import instagram from "./Imagenes/instagram.png";
import whatsapp from "./Imagenes/whatsapp.png";


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
