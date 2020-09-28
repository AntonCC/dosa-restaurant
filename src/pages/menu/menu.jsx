import React from 'react'
import { menuItemsInfo } from './menuInfo'
import MenuPasta from '../../imgs/menu-pasta.jpg'
import Landing from '../../components/landing/landing'
import TextBanner from '../../components/text-banner/text-banner'
import MenuItems from '../../components/menu-items/menu-items'

const Menu = () => {
  return (
    <div className="menu">
      <Landing bgImage={MenuPasta} small />
      <MenuItems menuItemsInfo={menuItemsInfo} />
    </div>
  )
}
export default Menu