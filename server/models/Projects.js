const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const ProjectModel = mongoose.model('Projects', ProjectSchema);
module.exports = ProjectModel;
