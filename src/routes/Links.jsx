import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import SingleProject from '../pages/SingleProject'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route path="/singleproject/:id" element={<SingleProject />} />  
    </Routes>
      
    </>
  )
}

export default Links
