import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Add = () => {
  const [student, setStudent] = useState({
    name: "",
  });

  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/student", student);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (

    <div className='formcontainer'>
      <div className='formWrapper'>
        <span className='logo'>Add New Student</span>

        <form>
          <input type='text'
            placeholder=' Enter name'
            name="name"
            onChange={handleChange}
          />

          <Button onClick={handleClick}>Add</Button>
          {error && "Something went wrong!"}
        </form>
        <Link to="/">See all Students</Link>

      </div>
    </div>




  );
};

export default Add;