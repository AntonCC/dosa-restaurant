import React from 'react'
import './menu-items.scss'
import MenuItem from '../menu-item/menu-item'

const MenuItems = ({ menuItemsInfo }) => {
  return (
    <div className='menu-items'>
      <div className="container">
        {
          menuItemsInfo.map(info => (
            <MenuItem {...info}/>
          ))
        }
      </div>
    </div>
  )
}
export default MenuItems