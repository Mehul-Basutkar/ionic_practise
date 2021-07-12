var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//  id, name, mobile, email, dob
const pool = mysql.createPool({
			host : 'localhost',
			user : 'root',
			database : 'db name',
			password : 'pwd'
});

module.exports = pool.promise(); 
module.exports = router;