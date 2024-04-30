var express = require('express');
var router = express.Router();

const UserModel = require('../models/Users');

router.post('/register', async function (req, res) {
  const user = await UserModel.create(req.body);

  return res.send(user);
});

module.exports = router;
