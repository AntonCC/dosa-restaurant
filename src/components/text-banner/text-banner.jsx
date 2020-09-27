import React from 'react'
import './text-banner.scss'
import Button from '../button/button'

const TextBanner = ({ title, body, btnText, btnClass }) => {
  return (
    <div className="text-banner">
      <div className="container">
        <h2 className="title">
          { title }
        </h2>
        <p className="body">
          { body }
        </p>
        {
          btnText
            ? <Button btnText={btnText} btnClass={btnClass}/>
            : ''
        }
      </div>
    </div>
  )
}
export default TextBanner