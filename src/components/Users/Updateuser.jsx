import React from 'react'

const Updateuser = () => {
  return (
    <div className='auth'>
      
    <h1> Update User</h1>
    <form>
    <input type='text' placeholder='enter name'/>
      <input type='password' placeholder='enter password'/>
      <input type='password' placeholder='confirm password'/>
      <button className = 'btn btn-outline-primary'> submit</button>
    </form>
  </div>
  )
}

export default Updateuser