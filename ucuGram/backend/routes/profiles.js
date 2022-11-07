var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../dbConnection/conn');
const { options } = require('./posts');
var router = express.Router();

let collection = 'postsCollection';

/* GET users listing. */
router.get('/:userid/:start', async function(req, res, next) {
  
  if (isNaN(req.params.start)){
    res.status(400).send({"400":"Error in parameter"});
    return;
  }

  let startStr = req.params.start;
  let startAt = parseInt(startStr);

  dbo = getDb();
  await dbo.collection(collection).find({ user_id: req.params.userid},{skip : startAt}).limit(4).toArray(function (err, result) {;
  if (err) {
    res.status(400).send({"400":"Error in fetching posts"});
  } else {
    res.status(200).json(result);
  }
})
});

module.exports = router;
