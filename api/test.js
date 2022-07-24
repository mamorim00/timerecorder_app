const bodyParser = require("body-parser");
const router = require("express").Router();
const Session = require("../models/session-time");

router.use(bodyParser.json());
//let username= req.body.username;

router.use(bodyParser.json());


// router.get("/", function(req, res) {
//     let dateStart = req.body.dateStart;
//     let dateEnd = req.body.dateEnd;
//     //Session.find({ $and: [{ date: { $gte: dateStart } }, { date: { $lte: dateEnd } }] },
//     Session.find({ date: { $gte: dateStart } },   
//     function(err, session) {
//        if (session[0]) {
//         res.status(200).json(session); 
//        } 
//        else {
//         res.status(400).send(err);
//        }
//     });
//  });

 router.get("/", function(req, res) {
    Session.find(function(err, session) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.json(session);
       }
    });
 });

 

 module.exports = router;