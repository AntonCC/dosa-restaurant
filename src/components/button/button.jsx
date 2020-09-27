import React from 'react'
import './button.scss'

const Button = ({ btnText, btnClass }) => {
  return (
    <button className={`btn ${btnClass}`}>
      { btnText }
    </button>
  )
}
export default Button