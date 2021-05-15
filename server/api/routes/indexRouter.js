const express = require("express");
const router = express.Router();

// const wordRouter = require("./wordRouter");
// const textRouter = require("./textRouter");
const scoreRouter = require("./scoreRouter");

// router.use("/word", wordRouter);
// router.use("/text", textRouter);
router.use("/score", scoreRouter);

module.exports = router;
