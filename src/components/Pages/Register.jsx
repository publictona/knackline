import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const Register = () => {

    const [data, setData] = useState({
    Username: "",
    Emailid: "",
    Password: "",
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
      await axios.post("http://localhost:8800/register", data);
      navigate("/login");
    } catch (err) {
      setError(err.response.data)
    }
  };
  

  return (
    <div className='auth'>

      <h1>Register</h1>
      <form>
              <input type='text' placeholder='enter name' name='Username' onChange={handleChange} />
         <input type='email' placeholder='enter email' name='Emailid' onChange={handleChange} />
         <input type='password' placeholder='enter password' name='Password' onChange={handleChange} />
         <button onClick={handleClick}> submit </button>
        { err && <p>{err}</p>}
         <span> Do You have an account?  <Link to='/login' >Login</Link></span>



        
      </form>
    </div>
  )
}

export default Register






















// import React from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'



// const Register = () => {

//   const [input, setInput] = useState({
//     Username: "",
//     Emailid: "",
//     Password: "",
//   });


//   //if user already exist
//   //const [err , setError] =useState(null)

//   //redirect page
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setInput(prev => ({ ...prev, [e.target.name]: e.target.val }))

//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     try {
//       const res = await axios.post("http://localhost:8800/register", input)
//       navigate("/login");
//       console.log(res)
//     } catch (error) {
//       console.log(error)
//       //  setError(err.response.data)

//     }
//   }

//   return (
//     <div className='auth'>

//       <h1>Register</h1>
//       <form>
//         <input type='text' placeholder='enter name' name='Username' onChange={handleChange} />
//         <input type='email' placeholder='enter email' name='Emailid' onChange={handleChange} />
//         <input type='password' placeholder='enter password' name='Password' onChange={handleChange} />
//         <button onClick={handleSubmit}> submit</button>
//         {/* <p>err</p> */}
//         {/* {err && <p> {err}</p>} */}
//         <span> Do You have an account?  <Link to='/login' >Login</Link></span>
//       </form>
//     </div>
//   )
// }

// export default Register