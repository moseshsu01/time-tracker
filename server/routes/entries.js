var express = require('express');
var router = express.Router();

const EntryModel = require('../models/Entries');

router.get('/:username', async function (req, res) {
  const startOfWeek = getStartOfWeek();
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  const entries = await EntryModel.find({
    username: req.params.username,
    created_at: {
      $gte: startOfWeek.toISOString(),
      $lt: endOfWeek.toISOString()
    }
  });

  return res.send(entries);
});

router.post('/', async function (req, res) {
  if (!req.body.username || !req.body.project_name || !req.body.hours || !req.body.description) {
    return res.status(400).send({ message: 'Missing field' })
  }

  const entry = await EntryModel.create(req.body);

  return res.send(entry);
});

// Get timestamp for start of the current week in UTC
// Timestamp is recorded as UTC in the db, so the timestamp returned
// may not be a Monday at 12:00 AM
function getStartOfWeek() {
  const UTCDate = new Date();
  const offset = UTCDate.getTimezoneOffset();

  console.log("offset", offset);

  const currTimezoneDate = new Date(UTCDate.getTime() - offset * 60000);

  const currTimezoneStartDate = new Date(currTimezoneDate);
  let dayOfWeek = (currTimezoneStartDate.getDay() || 7) - 1;
  currTimezoneStartDate.setDate(currTimezoneStartDate.getDate() - dayOfWeek);

  const startDateDay = new Date(currTimezoneStartDate.toISOString().split('T')[0]);

  const UTCStartDate = new Date(startDateDay.getTime() + offset * 60000);

  return UTCStartDate;
}

module.exports = router;
