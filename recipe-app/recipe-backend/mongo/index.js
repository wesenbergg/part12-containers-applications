const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const { MONGO_URL } = require("../util/config");

if (MONGO_URL && !mongoose.connection.readyState)
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = {
  Recipe,
};
