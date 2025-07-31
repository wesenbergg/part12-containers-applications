const express = require("./$node_modules/express/index.js");
const logger = require("./$node_modules/morgan/index.js");
const cors = require("./$node_modules/cors/lib/index.js");

const indexRouter = require("./routes/index");
const statisticsRouter = require("./routes/statistics.js");
const recipesRouter = require("./routes/recipes.js");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/statistics", statisticsRouter);
app.use("/recipes", recipesRouter);

module.exports = app;
