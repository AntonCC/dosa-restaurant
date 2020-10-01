import React from 'react'
import './landing.scss'

const Landing = ({ bgImage, small }) => {
  return (
    <div className={`landing ${small ? 'small' : ''}`} style={{ background: `url(${bgImage}) center/cover no-repeat` }}>

    </div>
  )
}
export default Landing