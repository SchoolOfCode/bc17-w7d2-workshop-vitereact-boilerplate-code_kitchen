import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header.jsx'
import Hero from "./Hero.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div className="wrapper">
      <Header />
        <main>
          <Hero />
          <hr className="separator" />

          <section id="how-it-works" className="how-it-works-section">
            <h2 className="how-it-works-text">How It Works</h2>
            <div className="tiles">
              <article className="tile">
                <img
                  src="/images/how-it-works-1.png"
                  alt="Phone call illustration"
                  className="tile-image"
                />
                <h3>Give us a call...</h3>
                <p>
                  Call us and book in a "Design Consultation" on a date and time
                  that suits you.
                </p>
              </article>
              <article className="tile">
                <img
                  src="/images/how-it-works-2.png"
                  alt="Home visit illustration"
                  className="tile-image"
                />
                <h3>We come to you...</h3>
                <p>
                  We come to your home to do an assessment of the space and to
                  your style preference.
                </p>
              </article>
              <article className="tile">
                <img
                  src="/images/how-it-works-3.png"
                  alt="Fireplace recommendation illustration"
                  className="tile-image"
                />
                <h3>We recommend...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </article>
            </div>
          </section>
        </main>
        
        <footer className="footer">
          <div className="colunms-container">
            <div className="footer-column">
              <p>Find us on:</p>
              <ul className="footer-nav">
                <li>
                  <a href="https://www.facebook.com" className="socials-link"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com" className="socials-link"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.tiktok.com" className="socials-link">TikTok</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <p>Contact us:</p>
              <address>
                <a href="mailto:info@firepalace.co.uk" className="email-link"
                  >info@firepalace.co.uk</a
                >
              </address>
            </div>
          </div>
        </footer>
      </div>
    </body>
    </>
  )
}

export default App
