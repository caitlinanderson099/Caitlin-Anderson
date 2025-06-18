import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleProject from '../pages/SingleProject'
import MyProjects from '../pages/MyProjects'
import Contact from '../pages/Contact'
import MyServices from '../pages/MyServices'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/my-services' element={<MyServices/>}/>
        <Route exact path='/my-work' element={<MyProjects/>}/>
        <Route exact path='/get-in-touch' element={<Contact/>}/>
        <Route path="/singleproject/:id" element={<SingleProject />} />
    </Routes>
      
    </>
  )
}

export default Links
