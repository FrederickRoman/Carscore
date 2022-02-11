const express = require("express");
const router = express.Router();
const scoreRouter = require("./scoreRouter");

router.use("/score", scoreRouter);

module.exports = router;
