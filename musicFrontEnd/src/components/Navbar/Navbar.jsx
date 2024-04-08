import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoW.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Instruments</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Contact us</li>
            <li><button className='btn'>Login</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
