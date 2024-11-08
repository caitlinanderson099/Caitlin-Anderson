import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleProject from '../pages/single-page/SingleProject'

const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/singleproject/:id" element={<SingleProject />} />
    </Routes>
      
    </>
  )
}

export default Links
