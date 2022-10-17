import axios from 'axios';
import React from 'react'
import Navbar from '../layout/Navbar'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
 


const Home = () => {
  const [users , setUsers] = useState([]);

  // useEffect(()=>{
  //   console.log(" my project")
  // }, [])
  
  //   const fetchAllStudents = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/user");
  //       setUsers(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllStudents();
  
return (
    <div className='container'>
      <Navbar/>
      <h1 color='red'>User Manager</h1>
    
    
<table className="table border shadow">
  <thead className="thead-dark">
    <tr className='bg-dark text-white'>
      <th scope="col">No</th>
      <th scope="col">User name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {/* {
      users.map((user , index)=>{
        <th scope="row">{index+1}</th>,
        <td>{user.name}</td>,
        <td>{user.email}</td>,
        <td>
          <Link className='btn btn-primary'><i class="fa fa-eye" aria-hidden="true"></i></Link>
          <Link className='btn btn-primary'><i class="fa fa-pencil-square" aria-hidden="true"></i></Link>
          <Link className='btn btn-primary'><i class="fa fa-trash" aria-hidden="true"></i></Link>
          <Link className='btn btn-danger'> delete</Link>
        </td>
      })
    } */}

    
  </tbody>
</table>

</div>
    
  )
}

export default Home
