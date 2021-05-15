const express = require('express');
const router = express.Router();
const score_controller = require('../controllers/scoreController');

// const urlencodedParser = express.urlencoded({ extended: false });
// var bodyParser = require('body-parser')

// const bodyParser = require('body-parser')

router.route('/')
    .all(express.json())
    .post(score_controller.score_detail);

module.exports = router;