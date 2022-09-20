const express = require('express');
const router = express.Router();
const NewsController = require('../app/controller/SiteController');

router.use('/search', NewsController.search);
router.use('/', NewsController.home);
module.exports = router;
