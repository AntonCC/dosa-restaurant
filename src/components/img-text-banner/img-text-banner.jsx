import React from 'react'
import './img-text-banner.scss'
import Button from '../button/button'

const ImgTextBanner = ({ title, body, img, btnText, btnClass, bgColor, switchSide }) => {
  return (
    <div className={`img-text-banner ${switchSide ? 'switch-side' : ''}`}>
      <div className="side-a" style={ bgColor ? {background: bgColor} : {}}>
        <h2>{ title }</h2>
        <p>{ body }</p>
        <Button btnText={btnText} btnClass={btnClass}/>
      </div>
      <div className="side-b" style={{ backgroundImage: `url(${img})`}}>
      </div>
    </div>
  )
}
export default ImgTextBanner