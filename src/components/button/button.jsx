import React from 'react'
import './button.scss'

const Button = ({ btnText, btnClass, handleClick }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={handleClick}>
      { btnText }
    </button>
  )
}
export default Button