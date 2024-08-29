import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
        <HashRouter>
        <Navbar/>
        <Links/>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App
