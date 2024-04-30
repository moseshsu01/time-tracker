const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
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
    default: true
  }
});

const EntryModel = mongoose.model('Entries', EntrySchema);
module.exports = EntryModel;
