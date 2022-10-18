import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [input , setInput] = useState({
    Emailid:"",
    Password:"",
  });


//if user already exist
  const [err , setError] =useState(null)

  //redirect page
  const navigate = useNavigate();

  const handleChange = e =>{
    setInput(prev =>({...prev , [e.target.name]:e.target.val}))

  }

const handleSubmit = async e => {
  e.preventDefault()
  try {
    const res = await axios.post("http://localhost:8800/login" , input)
    navigate("/");
    //console.log(res)
  } catch (err) {
    console.log(err)
     setError(err.response.data)
    
  }
}

return (
    <div className='auth'>
      
      <h1>Login</h1>
      <form>
        <input type='email' placeholder='enter email' name='Emailid' onChange={handleChange}/>
        <input type='password' placeholder='enter password'name='Password' onChange={handleChange}/>
        <button onClick={handleSubmit}> submit</button>
       {err && <p> {err}</p>}
       <span>Don't have an account?  <Link to='/register' >Register</Link></span>
      </form>
    </div>
  )
}

export default Login



















// import React from 'react'
// import { Link } from 'react-router-dom'


// const Login = () => {
//   return (
//     <div className='auth'>
      
//       <h1>Login</h1>
//       <form>
//         <input type='text' placeholder='enter email'  />
//         <input type='password' placeholder='enter password'/>
//         <button> submit</button>
//         <p> This is an error</p>
//         <span>Don't have an account?  <Link to='/register' >Register</Link></span>
//       </form>
//     </div>
//   )
// }

// export default Login