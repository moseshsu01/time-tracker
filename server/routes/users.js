var express = require('express');
var router = express.Router();

const UserModel = require('../models/Users');

router.post('/register', async function (req, res) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send({ message: 'Missing username' });
  }

  if (!password) {
    return res.status(400).send({ message: 'Missing password' });
  }

  const user = await UserModel.findOne({ username: username });

  if (user) {
    return res.status(409).send({ message: 'User with username already exists' });
  }

  const newUser = await UserModel.create(req.body);

  return res.status(200).send(newUser);
});

router.post('/login', async function (req, res) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).send({ message: 'Missing username' });
  }

  if (!password) {
    return res.status(400).send({ message: 'Missing password' });
  }

  const user = await UserModel.findOne({ username: username });

  if (!user) {
    return res.status(404).send({ message: 'Username not found' });
  }

  if (user.password === password) {
    return res.json({ username: user.username });
  } else {
    return res.status(401).send({ message: 'Password incorrect' });
  }
});

module.exports = router;
