var express = require('express');
var router = express.Router();
var gcmController = require('../controllers/gcmController.js');

//API Endpoints
router.route('/gcm')
    .post(gcmController.sendMessage);

module.exports = router;
