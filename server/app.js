const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const apiRouter = require("./api/routes/indexRouter");
const buildDirectory = path.join(__dirname, "../client/dist");
const serveStatic = express.static(buildDirectory);

app
  .use(morgan("dev"))
  .use(compression())
  .use(cors())
  .use("/api", apiRouter)
  .use(serveStatic);

module.exports = app;
