import React from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ openSidebar, handleSidebar }) => {
  return (
    <div className={`sidebar ${openSidebar ? 'sidebar-active' : ''}`}>
      <ul>
        <li><NavLink activeClassName='active' exact to='/' onClick={handleSidebar}>Home</NavLink></li>
        <li><NavLink activeClassName='active' to='/about' onClick={handleSidebar}>About</NavLink></li>
        <li><NavLink activeClassName='active' to='/menu' onClick={handleSidebar}>Menu</NavLink></li>
        <li><NavLink activeClassName='active' to='/location' onClick={handleSidebar}>Location</NavLink></li>
      </ul>
      <div className="close" onClick={handleSidebar}>
        X
      </div>
    </div>
  )
}
export default Sidebar