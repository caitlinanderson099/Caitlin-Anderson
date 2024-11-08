import './App.css'
import { HashRouter } from 'react-router-dom'
import Links from './routes/Links'

const App = () => {

  return (
    <>
        <HashRouter>
        <Links/>
      </HashRouter>
    </>
  )
}

export default App
