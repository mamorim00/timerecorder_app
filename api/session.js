// File session.js
// Author: Marina Amorim

// This file defines the API routes for the authentication of the user objects

// API
// /auth   POST Authenticate the user        Status Code
//                                         201 (created)
//                                         401 (no account)
       
const bodyParser = require("body-parser");
const router = require("express").Router();
const Session = require("../models/session-time");
//const SessionTime = (require("../models/session-time"));


router.use(bodyParser.json());
// code for creationg a session using the database
router.post("/", function(req, res) {
   let project= req.body.project;
   let owner = req.body.owner;
   let work = req.body.work;
   let sHrMin = req.body.startTime.split(":"); // hh:mm
   let fHrMin = req.body.finishTime.split(":");
   var session = new Session({
      owner: owner,
      work: work,
      project: project,
      date: new Date(req.body.date),
      startHr: sHrMin[0],
      startMin: sHrMin[1],
      finishHr: fHrMin[0],
      finishMin: fHrMin[1],
      code: req.body.code,//,
      //code90Desc: req.body.otherCategory
                          });
   session.save(function(err, session) {
      if (err) {
         res.status(400).send(err);
      } 
      else {
         res.status(201).json(session);
      }
   });
});



// code for using the post in the stu.html page

// router.post("/", (req, res) => {
//     console.log(`Save route called`);
//     console.log(req.body);
//     let project= req.body.project;
//     let owner = req.body.owner
//     console.log(project);
//     //get the user ID
//     Student.find(function(err, student) {
//         if (student[0]){
//             Project.find(function(err, student) {
//                 if (project[0]) {
//                     //make a session time from the post data
//                     let sHrMin = req.body.startTime.split(":"); // hh:mm
//                     let fHrMin = req.body.finishTime.split(":");

//                     let session = new Session({
//                         owner: owner[0],
//                         project: project[0],
//                         date: new Date(req.body.date),
//                         startHr: sHrMin[0],
//                         startMin: sHrMin[1],
//                         finishHr: fHrMin[0],
//                         finishMin: fHrMin[1],
//                         code: req.body.code//,
//                         //code90Desc: req.body.otherCategory
//                     });
//                         // save the time session data to the database
//                         session.save();
//                         console.log(`user: ${student[0].lname}, ${student[0].fname} session saved.`);
//                         res.status(201).json({msg: "Session saved"});
//                     }
//                     else {
//                      // assert: no project found
//                         console.log(`No project: found`);
//                         res.status(412).json({msg: "No project for user."});
//                         }
//                         });
//                         }
//                         else {
//                             // assert: the user was not found
//                             // send bad user or password error
//                             console.log("no account found");
//                             res.status(401).json({msg: "No account found"});
//                         }
//    })
// });






module.exports = router;
