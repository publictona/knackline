import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Students = () => {

  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/Student");
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudents();
  }, []);

  console.log(Students);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/student/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div >

      <h1>Students Details</h1>
      <div className="students">
        {Students.map((student) => (
          <div key={student.id} className="student">
            <h3>{student.name}</h3>

            <button className="delete" onClick={() => handleDelete(student.id)}  >delete</button>
            <button className="update">
              <Link
                to={`/update/${student.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <Button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new student
        </Link>
      </Button>
    </div>
  );
};

export default Students;



