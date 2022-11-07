var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../dbConnection/conn');
var router = express.Router();

const collection = 'postsCollection';

/* GET posts for carousel listing. */
router.get("/carousel", async function (req, res, next) {
  dbo = getDb();
  console.log(req); 
  await dbo.collection(collection).find({}).limit(5).toArray(function (err, result) {
      if (err) {
        res.status(400).send({"400":"Error in fetching posts"});
      } else {
        res.status(200).json(result);
      }
    });
});

/* GET post based on ID listing. */
router.get("/:postid", async function (req, res, next) {
  dbo = getDb();
  const postDB = await dbo.collection(collection).findOne({ _id: ObjectId(req.params.postid) });
  if (postDB !== null) {
    res.status(200).send(postDB);
  } else {
    res.status(404).send({"404":`Did not find postid: ${req.params.postid}`});
  }
});

/* GET posts for search listing. */
router.get("/search/:start", async function (req, res, next) {
  if (isNaN(req.params.start)){
    res.status(400).send({"400":"Error in parameter"});
    return;
  }
  let startStr = req.params.start;
  let startAt = parseInt(startStr);
  options = {
    skip : startAt
  }
  dbo = getDb();
  await dbo.collection(collection).find({},options).limit(6).toArray(function (err, result) {
    if (err) {
      res.status(400).send({"400":"Error in fetching posts"});
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
