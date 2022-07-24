const bodyParser = require("body-parser");
const router = require("express").Router();
const Session = require("../models/session-time");

router.use(bodyParser.json());
//let username= req.body.username;

router.use(bodyParser.json());
router.get("/", function(req, res) {
   let start = req.body.dateStart;
   let end = req.body.dateEnd;
    Session.find({ $and: [{ date: { $gte: start } }, { date: { $lte: end } }] },
    function(err, session) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.json(session);
       }
    });
 });
 module.exports = router;

 
 



// Get list of all reports in the database that match the criteria




// router.get("/",(req,res) =>{
//     console.log('get Sessions route called'); 
//     let owner = req.body.owner;
//     let project = req.body.project; 
//     Session.find({ $and: [{ owner: { $eq: owner } }, { project: { $eq: project } }] },
//         function(err, session) {
//             console.log(session[0]);
//             if (session[0]) {
//                 console.log(`session found`);
//                 res.status(200).json(session);
//             }
            
//             else {
                
//         }
            
            
//          }); 
        
    
//     });




module.exports = router;





