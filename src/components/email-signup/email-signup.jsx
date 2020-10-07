import React, { useState } from 'react'
import './email-signup.scss'

const EmailSignUp = ({ handleModal }) => {
  const [formDetails, setFormDetails] = useState({
    fName: '',
    lName: '',
    email: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails({...formDetails, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleModal()
    alert('Successfully signed up for email newsletter!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>First Name</label>
        <input type="text" placeholder='First Name' name='fName' value={formDetails.fName} onChange={handleChange} required/>
      </div>
      <div className="input-group">
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' name='lName' value={formDetails.lName} onChange={handleChange} required/>
      </div>
      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder='Email' name='email' value={formDetails.email} onChange={handleChange} required/>
      </div>
      <button className='submit-btn' type='submit'>Submit</button>
    </form>
  )
}
export default EmailSignUp