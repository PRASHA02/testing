const express = require('express');

const router = express.Router();

const hello = require('../controllers/testController')


router.route('/test').get(hello)

module.exports = router