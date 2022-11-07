var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../dbConnection/conn');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
