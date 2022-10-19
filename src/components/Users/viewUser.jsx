import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './View.css'


import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id])

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:8800/user/${id}`);
    if (response.status === 200) {
    return setData({ ...response.data[0] })

    }

  }

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container border shadow" style={{ marginTop: "10px" }}>
          <strong>ID :-</strong>
          <span> {id}</span>
          <br />
          <br />
          <strong>User Name :-</strong>
          <span> {data && data.Username}</span>
          <br />
          <br />

          <strong>Email ID :-</strong>
          <span> {data && data.Emailid }</span>
          <br />
          <br />

          <Link to="/" className='btn btn-primary' style={{ marginLeft: "150px", marginBottom: "10px" }}  > Go back to Home</Link>
        </div>
      </div>


    </div>
  )
}

export default ViewUser










































