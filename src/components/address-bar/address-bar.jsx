import React from 'react'
import './address-bar.scss'

const AddressBar = () => {
  return (
    <div className="address-bar">
      <div className="container">
        <span className="location">1960 Broad Street, Brooklyn, NY</span>
        <span>718-999-8888</span>
      </div>
    </div>
  )
}
export default AddressBar