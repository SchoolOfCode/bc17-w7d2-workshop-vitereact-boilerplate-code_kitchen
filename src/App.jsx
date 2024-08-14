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
          
        </footer>
      </div>
    </body>
    </>
  )
}

export default App
