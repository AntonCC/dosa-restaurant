import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to='/'>
          <div className="logo">Dosa</div>
        </Link>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/'>Cafe</Link></li>
          <li><Link to='/'>Hours & Location</Link></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar