const bodyParser = require("body-parser");
const router = require("express").Router();
const Project = (require("../models/project"));

router.use(bodyParser.json());
router.get("/", function(req, res) {
    Project.find(function(err, project) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.json(project);
       }
    });
 });
 module.exports = router;

//  const bodyParser = require("body-parser");
// const router = require("express").Router();
// const Assignment = (require("../models/assignment"));

// router.use(bodyParser.json());
// router.get("/", function(req, res) {
//     Assignment.find(function(err, assignment) {
//        if (err) {
//           res.status(400).send(err);
//        } 
//        else {
//           res.json(assignment);
//        }
//     });
//  });
//  module.exports = router;
