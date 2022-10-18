import mysql from "mysql";
import { db } from "../index"
//const bcrypt = require('bcryptjs');


export const register = (req, res) => {
    //check user exist
    // const q = "INSERT INTO users`Username`=? OR `Emailid`=? ";



    // db.query(q, [req.body.Username, req.body.Emailid], (err, data) => {
    //     if (err) return res.json(err);
    //     if (data.length) {
    //         return res.send(409).json("user already exist")
    //     }


        //hash pass for create user
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync("req.body.Password", salt);

        "INSERT INTO users(`Username` ,`Emailid` ,`Password`) VALUES (?)";
        const values = [
            req.body.Username,
            req.body.Emailid,
            req.body.Password,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("user created succesfully");

        });
    // });


};












//======================<LOGIN>=======================================
export const login = (req, res) => {

}

export const logout = (req, res) => {

}