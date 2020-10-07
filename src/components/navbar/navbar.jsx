import React from 'react'
import './navbar.scss'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ handleSidebar, showFixedNav, fixed }, ref) => {


  return (
    <div ref={ref} className={`navbar ${fixed ? 'fixed' : ''} ${showFixedNav ? 'show' : ''}`}>
      <div className="container">
        <Link to='/'>
          <div className="logo">Dosa</div>
        </Link>
        <ul>
          <li><NavLink tag={NavLink} activeClassName="active" exact to='/'>Home</NavLink></li>
          <li><NavLink tag={NavLink} activeClassName="active" to='/about'>About</NavLink></li>
          <li><NavLink tag={NavLink} activeClassName="active" to='/menu'>Menu</NavLink></li>
          <li><NavLink tag={NavLink} activeClassName="active" to='/location'>Location</NavLink></li>
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

const fowardedNav = React.forwardRef(Navbar)
export default fowardedNav