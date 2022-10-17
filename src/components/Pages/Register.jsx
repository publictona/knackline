import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      
      <h1>Register</h1>
      <form>
      <input type='text' placeholder='enter name'/>
        <input type='text' placeholder='enter email'/>
        <input type='password' placeholder='enter password'/>
        <button> submit</button>
        <p> This is an error</p>
        <span> Do You have an account?  <Link to='/login' >Login</Link></span>
      </form>
    </div>
  )
}

export default Register