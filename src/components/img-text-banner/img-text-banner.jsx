import React from 'react'
import './img-text-banner.scss'
import { Link } from 'react-router-dom'
import Button from '../button/button'

const ImgTextBanner = ({ title, body, img, btnText, btnClass, btnLink, bgColor, switchSide }) => {
  return (
    <div className={`img-text-banner ${switchSide ? 'switch-side' : ''}`}>
      <div className="side-a" style={ bgColor ? {background: bgColor} : {}}>
        <h2>{ title }</h2>
        <p>{ body }</p>
        <Link to={btnLink}>
          <Button btnText={btnText} btnClass={btnClass}/>
        </Link>
      </div>
      <div className="side-b" style={{ backgroundImage: `url(${img})`}}>
      </div>
    </div>
  )
}
export default ImgTextBanner