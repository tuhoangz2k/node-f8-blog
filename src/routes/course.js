const express = require('express');
const router = express.Router();
const CourseController = require('../app/controller/CourseController');

router.post('/store', CourseController.store);
router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.delete('/:id/force', CourseController.forceDelete);
router.delete('/:id', CourseController.delete);

router.patch('/:id/restore', CourseController.restore);

router.get('/:slug', CourseController.show);
module.exports = router;
