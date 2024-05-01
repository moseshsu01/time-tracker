const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  project_name: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    default: new Date().toISOString()
  }
});

const EntryModel = mongoose.model('Entries', EntrySchema);
module.exports = EntryModel;
