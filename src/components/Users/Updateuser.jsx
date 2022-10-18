import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Updateuser = () => {
  const [data , setData] =useState({
    Username :"",
    Password :"",
    Comfirmpassword :"",

  })
  const [error , setError] =useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/user/${userId}`, data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className='auth'>
      
    <h1> Update User</h1>
    <form>
    <input type='text' placeholder='enter name' onChange={handleChange} name="Username"/>
      <input type='password' placeholder='enter password'
       onChange={handleChange} name="Password"
       errorMessage="password required"
       />
      <input type='password' placeholder='confirm password' onChange={handleChange}  pattern= 'data.Password' name="Comfirmpassword"  errorMessage="Passwords don't match!"/>
      <button className = 'btn btn-outline-primary' onClick={handleClick}> submit</button>
    </form>
  </div>
  )
}

export default Updateuser










// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Updateuser = () => {
//   const [data , setData] =useState({
//     Username :"",
//     Password :"",
//     Comfirmpassword :"",

//   })
//   const [error , setError] =useState(false)
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userId = location.pathname.split("/")[2];
//   const handleChange = (e) => {
//     setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:8800/user/${userId}`, data);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError(true);
//     }
//   };

//   return (
//     <div className='auth'>
      
//     <h1> Update User</h1>
//     <form>
//     <input type='text' placeholder='enter name' onChange={handleChange} name="Username"/>
//       <input type='password' placeholder='enter password' onChange={handleChange} name="Password"/>
//       <input type='password' placeholder='confirm password' onChange={handleChange} name="Comfirmpassword"/>
//       <button className = 'btn btn-outline-primary' onClick={handleClick}> submit</button>
//     </form>
//   </div>
//   )
// }

// export default Updateuser