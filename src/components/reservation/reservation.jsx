import React, { useState } from 'react'
import './reservation'

const Reservation = ({ handleModal }) => {
  const [formDetails, setFormDetails] = useState({
    fName: '',
    lName: '',
    numPeople: '1',
    date: ''
  })

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
    console.log(formDetails)
  }
  
  const handleSubmit = e => {
    const { numPeople, date } = formDetails
    e.preventDefault()
    alert(`Reserved table for ${numPeople} ${parseInt(numPeople) === 1 ? 'person' : 'people'} on ${date}`)
    handleModal()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>First Name</label>
        <input type="text" placeholder='First Name' name='fName' value={formDetails.fName} onChange={handleChange} required/>
      </div>
      <div className="input-group">
        <label>Last Name</label>
        <input type="text" placeholder='First Name' name='lName' value={formDetails.value} onChange={handleChange} required/>
      </div>
      <div className="input-group">
        <label>Number of People</label>
        <select name="numPeople" value={formDetails.numPeople} onChange={handleChange}>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5+">5+ People</option>
        </select>
      </div>
      <div className="input-group">
        <label>Date</label>
        <input type="date" placeholder='Last Name' name='date' value={formDetails.date} onChange={handleChange} required/>
      </div>
      <button className='submit-btn' type='submit'>Submit</button>
    </form>
  )
}
export default Reservation