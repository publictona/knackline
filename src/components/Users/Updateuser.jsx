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
  const [err , setError] =useState(false)
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
      setError(err.response.data)
    }
  };

  //===========================================================
  const checkComfirmPassValidation = (e) =>{
    setData(e.target.value);
    if("Password"!= "Comfirmpassword"){
      setError("comfirm Password should be match with password ")
    }else{
      setError("");
    }
  }

  return (
    <div className='auth'>
      
    <h1> Update User</h1>
    <form>
    <input type='text' placeholder='enter name' onChange={handleChange} name="Username"/>
      <input type='password' placeholder='enter password'onChange={handleChange} name="Password"/>
      <input type='password'  placeholder='confirm password' onChange={(e)=>checkComfirmPassValidation(e)}   name="Comfirmpassword" />
      <button className = 'btn btn-outline-primary' onClick={handleClick}> submit</button>
      {err && <p> {err}</p>}
    </form>
  </div>
  )
}

export default Updateuser










