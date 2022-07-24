// import express
var express = require("express");
var bodyParser =require("body-parser");
// var Student = require("./modules/student");
// var Instructor = require("./modules/instructor");

// create an instance of the web server
const app = express();

// set a route to serve static web resources
app.use(express.static("public"));

// add the router
const router = express.Router();
router.use("/api/session", require("./api/session"));
router.use("/api/auth", require("./api/auth"));
router.use("/api/stuFind", require("./api/stuFind"));
router.use("/api/sessionsFind", require("./api/sessionsFind"));
router.use("/api/projectFind", require("./api/projectFind"));
router.use("/api/test", require("./api/test"));


// use the body parser to parse post data
//app.use(bodyParser.urlencoded({ extend: false}));

// use the body-parser middleware 
//app.use(bodyParser.json());



// Student.find({email: {$eq: username}}, (err, users) => {
//     // check to see if the user was found
//     if (student[0]) 
//     {
//         console.log(student);
//       // assert:  the user was found
//       // get the project id - for sprint 3 get the only project document
//       Student.find({password: {$eq: password}}, (err, projects) => {
//         if (student[0]) {
//             console.log(student);
//             res.json({msg: "Session Saved"});
//         }
//         else {
//           // assert: no user found
//           console.log(`No account found`);
//           res.json({msg: "Incorrect user or password"});
//         }
//       });
//     }
// });
// });






// use the router in the app
app.use(router);



// set a port to listen for requests on
app.listen(3000,(err) =>{
 if(err){
     console.log("server setup failed")
 }
 else{
     console.log("server listening to port 3000")
 }
});

module.exports = router;










