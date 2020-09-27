import React from 'react'
import './pre-footer.scss'
import Pattern from '../../imgs/Subtle-Prism.svg'

const PreFooter = () => {
  return (
    <div className="pre-footer" style={{background: `url(${Pattern})`}}>
      <div className="container">
        <div className="side-a">
          <h2>Dosa Restaurant</h2>
          <p>Monday - Friday 5:30 - 11</p>
          <p>Saturday - Sunday 5 - 11</p>
        </div>
        <div className="side-b">
          <h2>Cafe</h2>
          <p>7:30 AM Daily</p>
        </div>
      </div>
    </div>
  )
}
export default PreFooter