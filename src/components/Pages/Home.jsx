import React from 'react'
import axios from 'axios';
import Navbar from '../layout/Navbar'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async (req, res) => {
    const response = await axios.get("http://localhost:8800/user");
    if (response.status === 200) {
      setData(response.data)
    }
  };
  console.log(data)

  //================================================
  const handleDelete = async (id) => {
    try {
      window.alert("Are You sure that delete this user")
      await axios.delete(`http://localhost:8800/user/${id}`);
      window.location.reload()

    }
    catch (err) {
      console.log(err);
    }
  };
  //=====================================================

  return (
    <div className='container border shadow'>
      <Navbar />
      <h1 >User Management</h1>


      <table className="table ">
        <thead className="thead-dark">
          <tr className='bg-dark text-white'>
            <th scope="col">No</th>
            <th scope="col">User name</th>
            <th scope="col">Email ID</th>
            <th scope="col ">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.Username}</td>
                  <td>{item.Emailid}</td>
                  <td >
                    <Link className='btn btn-primary m-2' to={`/user/${item.id}`}  ><i class="fa fa-eye" aria-hidden="true"></i></Link>
                    <Link className='btn btn-success m-2 ' to={`/update/${item.id}`}><i class="fa fa-pencil-square" aria-hidden="true"></i></Link>
                    <Link className='btn btn-danger m-2' onClick={() => handleDelete(item.id)}><i class="fa fa-trash" aria-hidden="true"></i></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>

  )
}

export default Home
