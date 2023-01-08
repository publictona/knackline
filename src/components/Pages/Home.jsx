import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import { Link,  } from 'react-router-dom';
import { Button } from '@mui/material'
import { color } from '@mui/system';
import Page from '../Pagination';


const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [sortValue, setSortValue] = useState("");
  const [currPage, setCurrPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(5);


  //sort
var sortOption = [ "name", "email", "phone", "gender"];

useEffect(() => {
  loadUserData(0,5,0);
}, []);

const loadUserData = async (start , end , increse) => {
  return await axios
    .get(`http://localhost:8000/user?_start=${start}&_end=${end}`)
    .then((response) => setData(response.data))
    .catch((err) => console.log(err))
};
console.log("data", data)

  //search data

  const handleReset = () => {
    loadUserData();
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:8000/user?q=${value}`)
      .then((response) => {
        setData(response.data)
        setValue("");
      })
      .catch((err) => console.log(err))
  };

  const handleSort = async (e) => {
    let value = e.target.value
    setSortValue(value)
    return await axios
      .get(`http://localhost:8000/user?_sort=${value}&_order=asc`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  };

  

  //pagination
  // const pagination = async (e) =>{
  //   if(currPage === 0){
  //     return(
  //       <h1>gi</h1>

  //     )
  //   }
  //   return await axios
  //   .get(`http://localhost:8000/user?q=${value}&_order=asc`)
  //   .then((response) => {
  //     setData(response.data)
  //   })
  //     .catch((err) => console.log(err))
  // };

  const handleDelete = async (id) => {
    try {
      window.alert("Are You sure that delete this user")
      await axios.delete(`http://localhost:8000/user/${id}`);
      window.location.reload()

    }
    catch (err) {
      console.log(err);
    }
  };



  return (
    <>
    


{/* ======================================= */}

      <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
      }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className='form-control'
          placeholder='search Name...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='btn btn-primary' type="submit" color="dark">Search</button>
        <button className="btn btn-dark mx-2" color="info" onClick={() => handleReset()} >Reset</button>

      </form>

      {/* ==================== */}


      <h2 className='text-center' >User Management</h2>
      <div className='container border shadow'>
        <table className="table ">
          <thead className="thead-dark">
            <tr className='bg-dark text-white'>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email </th>
              <th scope="col">Phone</th>
              <th scope="col ">Gender</th>
              <th scope="col ">Action</th>

            </tr>
          </thead>
          <tbody>
            {
              data && data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td >
                   
                    <Link className='btn btn-success m-2 ' to={`/update/${item.id}`}><i class="fa fa-pencil-square" aria-hidden="true"></i></Link>
                    <Link className='btn btn-danger m-2' onClick={() => handleDelete(item.id)}><i class="fa fa-trash" aria-hidden="true"></i></Link>
                  </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {/* pagination */}
        <Page/>
      
      </div>

      

      <table>
      <thead>
        <tr>
        <th size="8">
        <h5 style={{marginLeft:"40px", color:"gray"}}>Sort By:</h5>
          <select style={{ width: "90%", borderRadius: "3px", height: "35px", mt: "40px", marginLeft: "40px" }}
            onChange = {handleSort}
            value = {sortValue}
          >
            <option>Please select value</option>
            <option>name</option>
            <option>email</option>
            <option>phone</option>
            <option>gender</option>
            
            {
             sortOption.map((item , index) => {
              <option value = {item} key={index} >{item}</option>
                })}
           
          </select>
        </th>
      </tr>
        </thead>
      </table>

       

    </>

  )
}

export default Home
