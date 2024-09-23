import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

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
