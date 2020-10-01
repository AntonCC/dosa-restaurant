import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = ({ handleSidebar }) => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to='/'>
          <div className="logo">Dosa</div>
        </Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/location'>Location</Link></li>
        </ul>
        <div className="hamburger" onClick={handleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}
export default Navbar