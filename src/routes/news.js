const express = require('express');
const router = express.Router();
const NewsController = require('../app/controller/NewsController');

router.get('/:slug', NewsController.show);
router.get('/', NewsController.index);
module.exports = router;
