const bodyParser = require("body-parser");
const router = require("express").Router();
const Student = (require("../models/student"));

router.use(bodyParser.json());



 // Get list of all users in the database
router.get("/", function(req, res) {
    Student.find(function(err, student) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.json(student);
       }
    });
 });


module.exports = router;
