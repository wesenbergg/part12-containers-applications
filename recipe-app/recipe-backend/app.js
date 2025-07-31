const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const statisticsRouter = require("./routes/statistics.js");
const recipesRouter = require("./routes/recipes.js");
const ingriedientsRouter = require("./routes/ingredients.js");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/statistics", statisticsRouter);
app.use("/recipes", recipesRouter);
app.use("/ingredients", ingriedientsRouter);

module.exports = app;
