import { Link } from 'react-router-dom'
import { useState } from 'react'
import './navbar.scss'


const Navbar = () => {
  return (
    <div id='top-nav'>
        <div className='nav-items'>
            <Link to='/'> <h4> Home </h4> </Link> 
            <Link to='/projects'> <h4> Projects </h4> </Link>
        </div>
        
        </div>
  )
}

export default Navbar
