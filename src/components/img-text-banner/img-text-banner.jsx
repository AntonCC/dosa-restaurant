import React from 'react'
import './img-text-banner.scss'
import Button from '../button/button'
import Diner from '../../imgs/dining-hall.jpg'

const ImgTextBanner = ({ title, body, img, btnText }) => {
  return (
    <div className="img-text-banner">
      <div className="side-a">
        <h2>{ title }</h2>
        <p>{ body }</p>
        <Button btnText={btnText}/>
      </div>
      <div className="side-b" style={{ backgroundImage: `url(${Diner})`}}>
      </div>
    </div>
  )
}
export default ImgTextBanner