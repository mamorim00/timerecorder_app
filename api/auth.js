// File auth.js
// Author: Marina Amorim

// This file defines the API routes for the authentication of the user objects

// API
// /auth   POST Authenticate the user        Status Code
//                                         201 (created)
//                                         401 (no account)
       

const bodyParser = require("body-parser");
const router = require("express").Router();
const Student = require("../models/student");
const Instructor = require("../models/instructor");




router.use(bodyParser.json());


router.post("/",(req,res) =>{
console.log('Auth route called');  
let username= req.body.username;
let password = req.body.password;
console.log(username);
console.log(password);
Student.find({ $and: [{ username: { $eq: username } }, { password: { $eq: password } }] },
    function(err, student) {
        console.log(student[0]);
        if (student[0]){
            console.log(`login ok`);
            res.status(200).json({msg: `login ok`});
        }
        
        else {
            Instructor.find({ $and: [{ username: { $eq: username } }, { password: { $eq: password } }] },
                function(err, instructor) {
                    console.log(instructor[0]);
                    if (instructor[0]){
                        console.log("login instructor ok");
                        res.status(200).json({msg: `login instructor ok`});
                    }
                    else {
                        console.log("login failed");
                        res.status(401).json({msg: 'incorrect username or password'});
                        
                    }
                });
    }
        
        
     }); 
    

});
module.exports = router;
