const express = require('express');
const router = express.Router();
const CourseController = require('../app/controller/CourseController');

router.get('/:slug', CourseController.show);
module.exports = router;
