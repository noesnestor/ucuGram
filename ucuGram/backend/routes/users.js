var express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('../dbConnection/conn');
var router = express.Router();

let collection = 'usersCollection';

/* GET users based on ID listing. */
router.get("/:userid", async function (req, res, next) {
  dbo = getDb();
  const userDB = await dbo.collection(collection).findOne({ _id: ObjectId(req.params.userid) });
  if (userDB !== null) {
    res.status(200).send(userDB);
  } else {
    res.status(404).send({"404":`Did not find userid: ${req.params.userid}`});
  }
});

module.exports = router;
