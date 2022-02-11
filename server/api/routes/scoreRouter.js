const express = require("express");
const router = express.Router();
const score_controller = require("../controllers/scoreController");

router.route("/").all(express.json()).post(score_controller.score_detail);

module.exports = router;
