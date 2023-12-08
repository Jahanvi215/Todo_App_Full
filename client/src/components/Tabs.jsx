import React from 'react'

const Tabs = () => {
  return (
    <div className='tab'>
       <input type="checkbox" />Select all
      <select name="complete" id="choose">
        <option value="completed">completed</option>
        <option value="in-progress">In-progress</option>
        <option value="onhold">Onhold</option>
      </select>

      <input type="radio" name="" id="" className='selectall'/>All
      <input type="radio" name="" id="" className='selectall'/>Completed
      <input type="radio" name="" id="" className='selectall'/>Onhold
    </div>
  )
}

export default Tabs
