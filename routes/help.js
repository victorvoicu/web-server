var express = require('express');
var router = express.Router();

router.get('/help',function (req,res) { 
    let d1='help page'
    res.render('help.ejs',{data:d1, name:'v'})
 })



module.exports={router}