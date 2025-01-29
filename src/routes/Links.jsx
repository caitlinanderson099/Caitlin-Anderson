import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleProject from '../pages/SingleProject'
import MyWall from '../pages/MyWall'
import MyProjects from '../pages/MyProjects'
import Contact from '../pages/Contact'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/my-wall' element={<MyWall/>}/>
        <Route exact path='/my-projects' element={<MyProjects/>}/>
        <Route exact path='/get-in-touch' element={<Contact/>}/>
        <Route path="/singleproject/:id" element={<SingleProject />} />
    </Routes>
      
    </>
  )
}

export default Links
