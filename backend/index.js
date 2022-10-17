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
  database: 'user',
});


//=====================<get student api>==================================
app.get("/user", (req,res)=>{
    const q = "SELECT * FROM user.users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
   })

//=====================<create student api>==================================
app.post("/user", (req, res) => {
  const q = "INSERT INTO users(`Username` ,`Emailid` ,`Password`) VALUES (?)";

  const values = [
    req.body.Username,
    req.body.Emailid,
    req.body.Password,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("user created succesfully");
  });
});


//=====================<update student api>==================================
app.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  const q = "UPDATE users SET `Username`= ? ,`Password`= ?  WHERE id = ?";

  const values = [
    req.body.Username,
    req.body.Password,
   ];

  db.query(q, [...values,userId], (err, data) => {
    if (err) return res.send(err);
    return res.json("user has been updated succesfully");
  });
});

//=====================<delete student api>==================================
app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  const q = " DELETE FROM users WHERE id = ? ";

  db.query(q, [userId], (err, data) => {
    if (err) return res.send(err);
    return res.json("user has been deleted succesfully");
  });
});

//=====================================================================================

app.listen(8800, () => {
  console.log("Connected to backend on port 8800");
});