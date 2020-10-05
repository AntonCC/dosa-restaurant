import React from 'react'
import './reservation'

const Reservation = () => {
  return (
    <form>
      <div className="input-group">
        <label>First Name</label>
        <input type="text" placeholder='First Name' required/>
      </div>
      <div className="input-group">
        <label>Last Name</label>
        <input type="text" placeholder='First Name' required/>
      </div>
      <div className="input-group">
        <label>Number of People</label>
        <select name="Number of Peopl">
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value=">4">4+ People</option>
        </select>
      </div>
      <div className="input-group">
        <label>Date</label>
        <input type="date" placeholder='Last Name' required/>
      </div>
      <button className='submit-btn' type='submit'>Submit</button>
    </form>
  )
}
export default Reservation