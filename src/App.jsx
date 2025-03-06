import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  return (
    <>
        <HashRouter>
        <Analytics />
        <Links/>
      </HashRouter>
    </>
  )
}

export default App
