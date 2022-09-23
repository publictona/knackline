import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [student, setStudent] = useState({
    name: "",

  });
  const [error, setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const studentId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/student/${studentId}`, student);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (

    <div className='formcontainer'>
      <div className='formWrapper'>
        <span className='logo'>Update Student Name</span>

        <form>
          <input type='text'
            placeholder='name'
            name="name"
            onChange={handleChange}
          />

          <Button onClick={handleClick}>Update</Button>
          {error && "Something went wrong!"}
        </form>
        <Link to="/">See all Students</Link>


      </div>
    </div>



  );
};

export default Update;