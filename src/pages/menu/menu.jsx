import React, { useState, useEffect } from 'react'
import { dinnerItemsInfo, drinkItemsInfo, cafeItemsInfo } from './menuInfo'
import MenuPasta from '../../imgs/menu-pasta.jpg'
import Landing from '../../components/landing/landing'
import MenuSelector from '../../components/menu-selector/menu-selector'
import MenuItems from '../../components/menu-items/menu-items'

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('Dinner')

  const changeMenu = menu => {
    setActiveMenu(menu)
  }

  let renderMenu
  if(activeMenu === 'Dinner') {
    renderMenu = <MenuItems menuItemsInfo={dinnerItemsInfo}/>
  } else if(activeMenu === 'Drinks') {
    renderMenu = <MenuItems menuItemsInfo={drinkItemsInfo}/>
  } else if(activeMenu === 'Cafe') {
    renderMenu = <MenuItems menuItemsInfo={cafeItemsInfo}/>
  }

  return (
    <div className="menu">
      <Landing bgImage={MenuPasta} small />
      <MenuSelector activeMenu={activeMenu} changeMenu={changeMenu}/>
      {renderMenu}
    </div>
  )
}
export default Menu