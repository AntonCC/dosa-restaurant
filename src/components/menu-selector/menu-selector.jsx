import React from 'react'
import './menu-selector.scss'

const MenuSelector = ({ activeMenu, changeMenu }) => {
  return (
    <div className="menu-selector">
      <div className="container">
        <h2>Menus</h2>
        <ul>
          <li className={`${activeMenu === 'Dinner' ? 'active' : ''}`} onClick={() => changeMenu('Dinner')}>Dinner</li>
          <li className={`${activeMenu === 'Drinks' ? 'active' : ''}`} onClick={() => changeMenu('Drinks')}>Wine & Cocktails</li>
          <li className={`${activeMenu === 'Cafe' ? 'active' : ''}`} onClick={() => changeMenu('Cafe')}>Cafe</li>
        </ul>
      </div>
    </div>
  )
}
export default MenuSelector