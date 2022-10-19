import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Login = () => {

  const [data, setData] = useState({
    Emailid: "",
    Password: "",
  });


  //if user already exist
  const [err, setError] = useState(false);

  //redirect page
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/login", data);
      navigate("/");
    } catch (err) {
      setError(err.response.data)

    }
  };

  //==========================================================
  return (
    <div className='auth'>

      <h1>Login</h1>
      <form>
        <input type='email' placeholder='enter email' name='Emailid' onChange={handleChange} />
        <input type='password' placeholder='enter password' name='Password' onChange={handleChange} />
        <button onClick={handleClick} > submit</button>
        {err && <p> {err}</p>}
        <span>Don't have an account?  <Link to='/register' >Register</Link></span>
      </form>
    </div>
  )
}

export default Login



















