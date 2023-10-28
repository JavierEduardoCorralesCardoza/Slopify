const express = require('express');
const router = express.Router();
const signinController = require('../controllers/Home/signinController');

router.get('/signin', signinController);

module.exports = router;