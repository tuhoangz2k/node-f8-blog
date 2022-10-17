const express = require('express');
const router = express.Router();
const NewsController = require('../app/controller/SiteController');

router.get('/search', NewsController.search);
router.get('/', NewsController.home);
module.exports = router;
