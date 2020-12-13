var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data='expr'
  res.render('index.ejs', { title: data, name:'v' });
});

module.exports = router;
