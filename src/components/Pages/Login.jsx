
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, emailchange] = useState('');
    const [password, passwordupdate] = useState('');
  

    const usenavigate = useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:8000/user/" + email).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid email');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('email',email);
                        usenavigate('/home')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter email');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

   return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2 >Sign In</h2>
                        </div>
                        <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input type='email' value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">   
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary m-2">Login</button> 
                            <span>Don't have an account?  <Link to = '/register' >Register</Link></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
































// import React from 'react'
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'



// const Login = () => {

//   const [data, setData] = useState({
//     Emailid: "",
//     Password: "",
//   });


//   //if user already exist
//   const [err, setError] = useState(false);

//   //redirect page
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8800/login", data);
//       navigate("/");
//     } catch (err) {
//       setError(err.response.data)

//     }
//   };

  

//   //==========================================================
//   return (
//     <div className='auth'>

//       <h1>Login</h1>
//       <form>
//         <input type='email' placeholder='enter email' name='Emailid' onChange={handleChange} />
//         <input type='password' placeholder='enter password' name='Password' onChange={handleChange} />
//         <button onClick={handleClick} > submit</button>
//         {err && <p> {err}</p>}
//         <span>Don't have an account?  <Link to='/register' >Register</Link></span>
//       </form>
//     </div>
//   )
// }

// export default Login



















