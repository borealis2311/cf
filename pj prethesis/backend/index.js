// const express = require("express");

// const mysql = require('mysql');

// const validationResult  = require('express-validator');

// const app = express();
// app.use(express.json());
// const db = mysql.createConnection({    
//     host: "localhost",    
//     user: "root",    
//     password: "Borealis0",    
//     database: "login"
// })

// // app.post('/signup', (req, res) => { 
// //        const sql = "INSERT INTO login (name,email,password) VALUES (?)";    
// //        const values = [        
// //            req.body.name,        
// //            req.body.email,        
// //            req.body.password    
// //         ]    
// //         db.query(sql, [values], (err, data) => {        
// //             if(err) {            
// //                 return res.json("Error");        
// //             }        
// //             return res.json(data);    
// //         })})

// app.post('/login', (req, res) => {    
//         const sql = "SELECT * login FROM login WHERE username = ? AND password = ?";    
//         db.query(sql, [req.body.username,req.body.password ], (err, data) => {
//         const errors = validationResult(req);        
//         if(!errors.isEmpty()) {            
//             return res.json(errors);        
//         } else {            
//             if(err) {                
//                 return res.json("Error");            
//             }            
//             if(data.length > 0) {                
//                 return res.json("Success");            
//             } else {                
//                 return res.json("Failed");            
//             }        
//         }            
//     })})

// app.listen(8081, ()=> {
//     console.log("listening");
// })