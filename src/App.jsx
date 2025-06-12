import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
import { Analytics } from '@vercel/analytics/react';

const App = () => {

   setInterval(()=> {
      // eslint-disable-next-line no-undef
      clock.innerText = new Date().toLocaleTimeString();
    }, 1000)

  return (
    <>
        <HashRouter>
        <Analytics />
        <Links/>
        <p id='clock'></p>
        {/* <p id="donation">Support Us 💖</p> */}
      </HashRouter>
    </>
  )
}

export default App
