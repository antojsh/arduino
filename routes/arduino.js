var express = require('express');
var router = express.Router();
var json = require('../json')

router.get('/', function(req, res, next) {
  res.send(global.json);
});


router.post('/',function(req,res){
	console.log(req.body)
})
module.exports = router;
