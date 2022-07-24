// File: db.js
// Author: M. Amorim   
var mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost/mydb");
module.exports = mongoose;
