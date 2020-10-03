import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = ({ openSidebar, handleSidebar }) => {
  return (
    <div className={`sidebar ${openSidebar ? 'active' : ''}`}>
      <ul>
        <li><Link to='/' onClick={handleSidebar}>Home</Link></li>
        <li><Link to='/about' onClick={handleSidebar}>About</Link></li>
        <li><Link to='/menu' onClick={handleSidebar}>Menu</Link></li>
        <li><Link to='/location' onClick={handleSidebar}>Location</Link></li>
      </ul>
      <div className="close" onClick={handleSidebar}>
        X
      </div>
    </div>
  )
}
export default Sidebar