import React, { useState } from 'react'
import './modal-container.scss'
import {ReactComponent as X} from '../../imgs/icons/times-solid.svg'

const ModalContainer = ({ handleModal }) => {


  return (
    <div className='modal-container'>
      <div className="close" onClick={handleModal}>
        <X />
      </div>
      <form>
        <div className="input-group">
          <label>First Name</label>
          <input type="text" placeholder='First Name' required/>
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" placeholder='Last Name' required/>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder='Email' required/>
        </div>
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default ModalContainer