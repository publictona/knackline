import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: "sushma@123",
  database: 'student',
});
//=====================<create student api>==================================
app.get("/", (req, res) => {
  res.json("hello");
});

//=====================<get student api>==================================
app.get("/student", (req,res)=>{
    const q = "SELECT * FROM student.students";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
   })

//=====================<create student api>==================================
app.post("/student", (req, res) => {
  const q = "INSERT INTO students(`name`) VALUES (?)";

  const values = [
    req.body.name,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("student created succesfully");
  });
});


//=====================<update student api>==================================
app.put("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q = "UPDATE students SET `name`= ?  WHERE id = ?";

  const values = [
    req.body.name,
   ];

  db.query(q, [...values,studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json("student has been updated succesfully");
  });
});

//=====================<delete student api>==================================
app.delete("/student/:id", (req, res) => {
  const studentId = req.params.id;
  const q = " DELETE FROM students WHERE id = ? ";

  db.query(q, [studentId], (err, data) => {
    if (err) return res.send(err);
    return res.json("student has been deleted succesfully");
  });
});

//=====================================================================================

app.listen(8800, () => {
  console.log("Connected to backend.");
});