const controllers = require('../controllers');
const express = require('express');

const router = express.Router();

router.get('/swagger', controllers.staticFiles.swaggerConfig);

router.route('/login')
    .post(controllers.callAction('login.login'));

router.route('/register')
    .post(controllers.callAction('register.register'));

module.exports = router;
