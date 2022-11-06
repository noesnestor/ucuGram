var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../dbConnection/conn');
var router = express.Router();

const collection = 'postsCollection';

/* GET notes listing. */
router.get("/", async function (req, res, next) {
  dbo = getDb();
  await dbo.collection(collection).find({}).toArray(function (err, result) {
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

module.exports = router;
