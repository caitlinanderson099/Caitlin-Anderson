import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Projects from '../pages/projects/Projects'
import SingleProject from '../pages/single-project/SingleProject'

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
