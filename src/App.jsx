import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from "./Components/header/header.jsx"
import Hero from "./Components/hero/hero.jsx"
import HowItWorks from './Components/how-it-works/howItWorks.jsx'
import WeRecommend  from './Components/how-it-works/weRecommend.jsx'
import WeComeToYou from './Components/how-it-works/weComeToYou.jsx'
import GiveUsACall from './Components/how-it-works/giveUsACall.jsx'

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

          <HowItWorks />

            <GiveUsACall />

            <WeComeToYou />

            <WeRecommend />

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
