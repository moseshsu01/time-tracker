var express = require('express');
var router = express.Router();

const EntryModel = require('../models/Entries');

router.get('/:username', async function (req, res) {
  const entries = await EntryModel.find({username: req.params.username});

  return res.send(entries);
});

router.post('/', async function (req, res) {
  const entry = await EntryModel.create(req.body);

  return res.send(entry);
});

module.exports = router;
