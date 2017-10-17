const controllers = require('../controllers');
const express = require('express');

const router = express.Router();

router.use('', controllers.staticFiles.angular);

module.exports = router;