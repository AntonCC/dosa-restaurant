import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Dosa</div>
        <ul>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Menu</Link></li>
          <li><Link to='/'>Cafe</Link></li>
          <li><Link to='/'>Hours & Location</Link></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar