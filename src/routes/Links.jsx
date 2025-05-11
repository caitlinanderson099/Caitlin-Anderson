import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleProject from '../pages/SingleProject'
import MyArticles from '../pages/MyArticles'
import MyProjects from '../pages/MyProjects'
import Contact from '../pages/Contact'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/my-articles' element={<MyArticles/>}/>
        <Route exact path='/my-projects' element={<MyProjects/>}/>
        <Route exact path='/get-in-touch' element={<Contact/>}/>
        <Route path="/singleproject/:id" element={<SingleProject />} />
    </Routes>
      
    </>
  )
}

export default Links
