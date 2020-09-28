import React from 'react'
import './menu-item.scss'

const MenuItem = ({ title, subTitle, items}) => {
  return (
    <div className='menu-item'>
      <div className="side-a">
        <h2>{ title }</h2>
        <h5>{ subTitle }</h5>
      </div>
      <div className="side-b">
        <ul>
          {
            items.map(item => (
              <li>{ item }</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
export default MenuItem