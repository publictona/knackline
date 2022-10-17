import React from 'react'
import Navbar from '../layout/Navbar'

const addUser = () => {
  return (
    <div className='container'>
      
    <div className='auth'>
      
      <h1>Add New User</h1>
      <form>
      <input type='text' placeholder='enter name'/>
        <input type='text' placeholder='enter email address'/>
        <input type='password' placeholder='enter password'/>
        <input type='password' placeholder='confirm password'/>
        <button className = 'btn btn-outline-primary'> submit</button>
      </form>
    </div>
    </div>
  )
}

export default addUser

