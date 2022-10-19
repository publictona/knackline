import express from "express";
import mysql from "mysql";
import cors from "cors";
import  bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';
import  cookieParser from 'cookie-parser';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//------mysql database connection-----------
 const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: "sushma@123",
  database: 'user',
});

//====================crud operation==================================
app.post("/register", (req,res)=>{
  //check email exist
    const q = "SELECT * FROM users WHERE Emailid = ?"

    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.Password, salt);

    db.query(q, [req.body.Emailid], (err, data) => {
        if (err) return res.json(err);
        if (data.length) {
            return res.status(409).json("Email already exist")
        }

 const q =  "INSERT INTO users(`Username` ,`Emailid` ,`Password`) VALUES (?)";
        const values = [
            req.body.Username,
            req.body.Emailid,
            hash,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User created succesfully");

        });
    });
});


//=====================<create student api>==================================
app.post("/login", (req, res) => {
  //check email id
  const q = "SELECT * FROM users WHERE Emailid = ?";

  db.query(q, [req.body.Emailid], (err, data) => {
    if (err) return res.json(err);
    if  (data.length === 0) return res.status(404).json("User not found");


    //check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.Password , data[0].Password); // true
    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password");

   
    //generate tokan
    const tokan = jwt.sign({  id: data[0].id } , "jwtkey");
    const {Password , ...other} = data[0];
    res.cookie("access_tokan" , tokan , {
      httpOnly : true
    }).status(200).json(data[0])

    });
   });

   //=================================<get all user>=======================
   app.get("/user", (req,res)=>{
    const q = "SELECT * FROM user.users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
   })

   //==========================<add new user>======================================
   app.post("/adduser", (req, res) => {
    const q = "INSERT INTO users(`Username` ,`Emailid` ,`Password` ,`Comfirmpassword` ) VALUES (?)";
  
    const values = [
      req.body.Username,
      req.body.Emailid,
      req.body.Password,
      req.body.Comfirmpassword,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("student created succesfully");
    });
  });
  

//=============================<get user details by id>==================================
   app.get("/user/:id", (req,res)=>{
    const userId = req.params.id;
    const q = "SELECT * FROM user.users  ";
    const values = [
      req.body.Username,
      req.body.Emailid,
     ];
    
    db.query(q, [ ...values ,userId ],(err, data)=>{
        if(err) return res.send(err)
        return res.json(data)

    })
   })

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