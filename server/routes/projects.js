var express = require('express');
var router = express.Router();

const ProjectModel = require('../models/Projects');

router.get('/', async function (_, res) {
    const projects = await ProjectModel.find();
    return res.send(projects);
});

module.exports = router;
