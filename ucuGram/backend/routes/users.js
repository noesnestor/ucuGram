var express = require('express');
var router = express.Router();

let connection = 'usersConnection';

/* GET users based on ID listing. */
router.get("/:userid", async function (req, res, next) {
  dbo = getDb();
  const userDB = await dbo.collection(collection).findOne({ _id: ObjectId(req.params.postid) });
  if (userDB !== null) {
    res.status(200).send(userDB);
  } else {
    res.status(404).send({"404":`Did not find userid: ${req.params.postid}`});
  }
});

module.exports = router;
