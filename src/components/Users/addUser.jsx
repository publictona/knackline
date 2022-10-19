import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AddUser = () => {
  const [data, setData] = useState({
    Username: "",
    Emailid: "",
  
  });

  //error
  const [err, setError] = useState(false)
  //redirect page
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/adduser", data);
      navigate("/");
    } catch (err) {
      
      setError(err.response.data)
    }
  };

  return (
    <div className='container'>
      
    <div className='auth'>
      
      <h1>Add New User</h1>
      <form>
      <input type='text' placeholder='enter name'  name="Username" onChange={handleChange} />
        <input type='email' placeholder='enter email address' name="Emailid"  onChange={handleChange}/>
        <input type='password' placeholder='enter password' name="Password" onChange={handleChange}/>
        <input type='password' placeholder='confirm password' name="Comfirmpassword" onChange={handleChange} />
        <button  onClick={handleClick} className = 'btn btn-outline-primary'> submit</button>
        {err && <p> {err}</p>}
        <Link  className='btn btn-primary' to="/">See all Users</Link>
      </form>
    </div>
    </div>
  )
}

export default AddUser

