import React from 'react'
import './button.scss'

const Button = ({ btnText }) => {
  return (
    <button className="btn">
      { btnText }
    </button>
  )
}
export default Button