const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const statisticsRouter = require("./routes/statistics");
const todosRouter = require("./routes/todos");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/statistics", statisticsRouter);
app.use("/todos", todosRouter);

module.exports = app;
